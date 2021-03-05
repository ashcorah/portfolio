import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box, HStack, VStack, Text, IconButton } from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";
import Confetti from "react-canvas-confetti";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  const [fireConfetti, setFireConfetti] = useState(false);
  const { pathname } = useLocation();
  const colors = usePalette();

  // eslint-disable-next-line react/prop-types
  function NavLink({ to, children }) {
    const isMatch = pathname === to || (pathname === "/about" && to === "/");
    return (
      <Link to={to}>
        <Text
          fontWeight="bold"
          sx={{
            cursor: "pointer",
            color: isMatch ? colors.white : "black",
            whiteSpace: "nowrap",
            textDecoration: "none",
            ":hover": {
              color: colors.white,
            },
          }}
        >
          {children}
        </Text>
      </Link>
    );
  }

  const title = (
    <Link to="/">
      <Text
        onMouseEnter={() => setFireConfetti(false)}
        onMouseLeave={() => setFireConfetti(true)}
        sx={{
          cursor: "pointer",
          fontSize: "3em",
          color: colors.white,
          whiteSpace: "nowrap",
          textDecoration: "none",
        }}
      >
        Ash Corah
      </Text>
    </Link>
  );

  return (
    <Box background={colors.grey} p={6}>
      <VStack spacing={4}>
        <VStack spacing={3}>
          {title}
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/">About</NavLink>
        </VStack>
        <Confetti
          style={{
            position: "absolute",
            zIndex: -1,
          }}
          fire={fireConfetti}
        />
        <HStack>
          <IconButton
            sx={{
              ":hover": {
                color: colors.grey,
              },
            }}
            variant="ghost"
            aria-label="Search database"
            icon={<AiFillGithub size="30px" />}
            color={colors.white}
          />
          <IconButton
            sx={{
              ":hover": {
                color: colors.grey,
              },
            }}
            color={colors.white}
            variant="ghost"
            aria-label="Search database"
            icon={<AiFillInstagram size="30px" />}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Navbar;
