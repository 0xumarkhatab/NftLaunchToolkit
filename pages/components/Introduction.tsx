import { Box, Text, ButtonGroup, Button } from "@chakra-ui/react";
import React from "react";

// This is a simple Component that shows the Tagline and Purpose of the website
import Link from "next/link";
function Introduction() {
  /**
   *      How It Works ?
   *
   *      A Fadded ( Linear Graident ) Background Image
   *      Tagline
   *      Description of NFTLaunchKit
   *      Button to Start Building Stuff
   */

  return (
    <Box
      width={"100%"}
      height="100vh"
      p="40"
      /*
       *  Background Image
       */
      backgroundImage={`linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.7)),
    url('intro_bg.jpg');`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat={"no-repeat"}
    >
      {/* Tagline */}
      <Text
        bgGradient="linear(to-r,#84e1bc, #1652f0)"
        bgClip="text"
        fontSize={["2xl", "3xl", "4xl"]}
        fontWeight="900"
        maxW={["60vw", "50vw", "40vw"]}
        lineHeight="2ch"
      >
        The best solution for no-code web3 apps.
      </Text>

      {/* Description */}

      <Text
        pt="1rem"
        color="white"
        fontSize={["14px", "16px", "18px"]}
        fontWeight="normal"
        maxW={["60vw", "50vw", "40vw"]}
        lineHeight="3ch"
      >
        With NFTLaunchKit you can create a smart contract in our dashboard with
        a few clicks, provided by Thirdweb. You can create a NFT Minting Website
        with our templates and manage everything from the dashboard. Without any
        code and for free.
      </Text>

      <Text
        pt="1rem"
        color="white"
        fontSize="20px"
        fontWeight="700"
        maxW={["50vw", "40vw", "40vw"]}
        lineHeight="3ch"
      >
        Build. Design. Launch
      </Text>

      {/* Button To Navigate to Dashboard */}

      <ButtonGroup mt="4" variant="solid" spacing="5">
        <Link href="/dashboard">
        <Button>Start Building</Button>
        </Link>
      </ButtonGroup>

    </Box>
  );
}

export default Introduction;
