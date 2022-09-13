/*
 *   Chakra UI for importing ReUseable React Components
 */

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

//  Wallet Connection
import { ConnectButton } from "@rainbow-me/rainbowkit";

import Link from "next/link";
import React, { useState, useEffect } from "react";

// Checking if the Wallet is Connected or Not
import { useAccount, useConnect, useDisconnect } from "wagmi";

/*
 *       Fetching Bored Ape NFT Collection NFT By ID from Open Sea API
 *
 */

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

function Dashboard() {
  //  Wallet Connection status Hook
  const { isConnected, isDisconnected } = useAccount();

  //   //  Wallet Connection status Component State Variables
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Array for Holding BAYC NFT Collection
  const [collection, setCollection] = useState();

  // Fetching All NFTs from ID 0 to 20

  async function fetchNFTs() {
    let nfts = [];
    for (let index = 1; index <= 20; index++) {
      const element = await fetchCollectionNFT(index);
      nfts.push(element);
    }
    setCollection(nfts);
  }

  //  Managing Component State using UseEffect
  // Everytime the Wallet is Connected or Disconnected
  // it will update the state variables
  useEffect(() => {
    fetchNFTs();

    if (isConnected == true) setIsWalletConnected(true);
    if (isDisconnected == true) setIsWalletConnected(false);
  }, [isConnected, isDisconnected]);

  return (
    // The Over All Conainer of the Dashboard
    <Box width="100%" height="fit-cpontent" bg="black">
      {/* 
    Horizontal Stack ( Flex display ) for showing Wallet Connection and Back to Website Buttons

*/}
      <HStack px={"2rem"} pt="20" width="95%" justify={"space-between"}>
        {/* 
            Responsive Fonts

            {["1rem", "2rem", "2rem"]}

            Denotes different values for FontSize as Follows

            For Small Devices - font size is 1 rem
            For Medium Devices - font size is 2 rem
            For Large Devices - font size is 3 rem
            
        */}
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
        height={
          isWalletConnected && collection?.length > 0 ? "fit-content" : "90vh"
        }
      >
        <Text
          bgGradient="linear(to-r,#84e1bc, #1652f0)"
          bgClip="text"
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="900"
          maxW={["60vw", "50vw", "40vw"]}
          lineHeight="2ch"
        >
          {/* Showing Customized Messages if Wallet is connected or not */}
          {!isWalletConnected
            ? "Your Wallet is Not Connected ! Connect Wallet First"
            : "My Minted NFTs"}

          {/* If the NFT Collection is not Fetched Yet , Show Loading Screen */}
          {collection?.length < 0 && " Loading.."}
        </Text>
      </VStack>
      {isWalletConnected && (
        <Grid p="10" templateColumns="repeat(3, 1fr)" gap={6}>
          {collection?.map((item) => {
            console.log("ite is ",item)
            return <NftItem key={"NFT " + item.id} item={item} />;
          })}
        </Grid>
      )}
    </Box>
  );
}

function NftItem({item}) {
  return (
    <GridItem >
      <Box
        p={"5"}
        border="1px solid gray"
        justifyContent={"center"}
        borderRadius={"10"}
      >
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
        <Heading pt="4" fontSize={"16px"} color={"white"}>
          #{item.id}
        </Heading>
      </Box>
    </GridItem>
  );
}
export default Dashboard;
