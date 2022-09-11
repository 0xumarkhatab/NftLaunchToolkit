import { Box,HStack, Image, Link } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <HStack  justify="space-between"  bg={"white"}  w="100vw" p={["0","15px","15px"]} pl={["0","40","40"]} boxShadow="1px 1px 1px 1px grey" >
      <Image  src="https://nftlaunchkit.xyz/logo.svg" width={"25"} height="8" />
      <HStack display={["none","none","flex"]} spacing="10" fontSize={"12px"} fontWeight="620" justify="center" w="40vw">
        <Link href="/">Home</Link>
        <Link href="/">Explore</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Membership</Link>
        <Link href="/">StartBuilding</Link>

      </HStack>
      <Box>
      <Image display={["flex","none","none"]}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/240px-Hamburger_icon.svg.png" width={"25"} height="8" />

      </Box>

    </HStack>
  );
}

export default Navbar;
