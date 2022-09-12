import {
  Box,
  Stack,
  Heading,
  HStack,
  Button,
  ButtonGroup,
  VStack,
  Text,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function Dashboard() {
  const { isConnected, isDisconnected } = useAccount();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [collection, setCollection] = useState();

  async function fetchCollectionNFT(id) {
    const options = { method: "GET" };
    let nft = null;
    return await fetch(
      `https://api.opensea.io/api/v1/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${id}/?include_orders=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        nft = response;
        return nft;
      })
      .catch((err) => console.error(err));
  }

  async function fetchNFTs() {
    let nfts = [];
    for (let index = 0; index < 20; index++) {
      const element = await fetchCollectionNFT(index);
      nfts.push(element);
    }
    setCollection(nfts);
  }

  useEffect(() => {
    fetchNFTs();
    console.log("nfts are ", collection);
    if (isConnected == true) setIsWalletConnected(true);

    if (isDisconnected == true) setIsWalletConnected(false);
  }, [isConnected, isDisconnected]);

  return (
    <Box width="100%" height="fit-cpontent" bg="black">
      <HStack px={"2rem"} pt="20" width="95%" justify={"space-between"}>
        <Heading color="white" fontSize={["1rem", "2rem", "2rem"]}>
          Dashboard
        </Heading>
        <Stack spacing={"2"} direction={["column", "column", "row"]}>
          <ConnectButton
            chainStatus={(e) => {
              console.log("connected ", e);
            }}
          />
          <ButtonGroup mt="4" variant="solid" spacing="5">
            <Button>
              <Link href="/">Back to Website</Link>
            </Button>
          </ButtonGroup>
        </Stack>
      </HStack>
      <VStack
        justify="center"
        height={collection?.length>0 ? "fit-content" : "90vh"}
      >
        <Text
          bgGradient="linear(to-r,#84e1bc, #1652f0)"
          bgClip="text"
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="900"
          maxW={["60vw", "50vw", "40vw"]}
          lineHeight="2ch"
        >
          {!isWalletConnected
            ? "Your Wallet is Not Connected ! Connect Wallet First"
            :  "My Minted NFTs"}
            {
              collection?.length<0 && " Loading.."
            }

        </Text>
      </VStack>
      {isWalletConnected && (
        <Grid p="10" templateColumns="repeat(3, 1fr)" gap={6}>
          {collection?.map((item) => {
            return (
              <GridItem key={"item " + item.id}>
                <Box p={"5"} border="1px solid gray" justifyContent={"center"} borderRadius={"10"}>
                  <a
                    target="_blank"
                    href={`https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${item?.token_id}`}
                  >
                    <Image
                      width="25vw"
                      key={"img of " + item.id}
                      src={item.image_url}
                      alt={"item" + item.id}
                    />
                  </a>
                  <Heading pt="4" fontSize={"16px"} color={"white"}>#{item.id}</Heading>


                </Box>
              </GridItem>
            );
            console.log("the image is ", item.image_url);
          })}
        </Grid>
      )}
    </Box>
  );
}

export default Dashboard;
