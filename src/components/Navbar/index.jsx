import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, Container } from "@chakra-ui/react";

import style from "./Navbar.module.scss";

const Navbar = () => (
  <Container maxW="container.xl" centerContent>
    <Box p={5}>
      <HStack spacing="70px">
        <Link style={{ fontWeight: "bold" }} to="/">
          Home
        </Link>
        <p className={style.title}>Ash Corah</p>
        <Link style={{ fontWeight: "bold" }} to="/work">
          Work
        </Link>
      </HStack>
    </Box>
  </Container>
);

export default Navbar;
