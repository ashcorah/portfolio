import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";

import style from "./Navbar.module.scss";

const Navbar = () => (
  <Box>
    <HStack>
      <Link to="/">Home</Link>
      <p className={style.title}>Ash Corah</p>
      <Link to="/work">Work</Link>
    </HStack>
  </Box>
);

export default Navbar;
