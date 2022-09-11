import { Box, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Box position={"fixed"} p={["0", "10px", "10px"]} bg={"white"}  boxShadow="1px 1px 1px 1px grey" w="100%">
      <HStack  justify="space-between" w={["100%","98%","80vw"]}>
        <Image
          pl={["10", "0", "20"]}
          src="https://nftlaunchkit.xyz/logo.svg"
          width={"25"}
          height="8"
          objectFit={"contain"}
        />

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
          <NavLink title="StartBuilding" link={"/"} />
          
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
  );
}

const NavLink = ({title,link})=>{
    return (
        <Link _hover={{textDecoration:"none"}} href={link}>{title}</Link>

    )
}

export default Navbar;
