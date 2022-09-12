import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Head from "next/head";
function Navbar() {
  return (
    <>
    <Head>
    <title>NFT Launch Kit</title>

    </Head>
    <Box position={"fixed"} p={["0", "10px", "10px"]} bg={"white"}  boxShadow="1px 1px 1px 1px grey" w="100%">
      <HStack  justify="space-between" w={["100%","98%","80vw"]}>
        <a href="/">
        <Image
          pl={["10", "0", "20"]}
          src="https://nftlaunchkit.xyz/logo.svg"
          width={"25"}
          height="8"
          objectFit={"contain"}
        />

        </a>

        <HStack
          display={["none", "none", "flex"]}
          spacing="10"
          fontSize={"14px"}
          fontWeight="620"
          justify="center"
        >
          <NavLink title="Home" link={"/"} />
          <NavLink title="Explore" link={"/"} />
          <NavLink title="Pricing" link={"/"} />
          <NavLink title="Membership" link={"/"} />
          <NavLink title="StartBuilding" link={"/dashboard"} />
          
        </HStack>

        <Box>
          <Link href="/">
            <Image
              display={["flex", "flex", "none"]}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/240px-Hamburger_icon.svg.png"
              width={"25"}
              height="8"
            />
          </Link>
        </Box>
      </HStack>
    </Box>
    </>
    
  );
}

const NavLink = ({title,link})=>{
    return (
        <Box _hover={{textDecoration:"none"}}>
        <Link href={link}>{title}</Link>
        </Box>

    )
}

export default Navbar;
