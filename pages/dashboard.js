import {
  Box,
  Stack,
  Heading,
  HStack,
  Button,
  ButtonGroup,
  VStack,
  Text,

} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React, { useState ,useEffect} from "react";
import { useAccount ,useConnect,useDisconnect} from "wagmi";
function Dashboard() {
  const { isConnected,isDisconnected } = useAccount();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(()=>{
    console.log("wallet connection ",isConnected);
    if(isConnected)
      setIsWalletConnected(true);
      if(isDisconnected)
      setIsWalletConnected(false);

  },[isConnected,isDisconnected])

  return (
    <Box width="100%" height="100vh" bg="black">
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
      <VStack justify="center" height={ isWalletConnected?"fit-content" : "90vh"}>
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
            : "My Minted NFTs"}
        </Text>
      </VStack>
      
    </Box>
  );
}

export default Dashboard;
