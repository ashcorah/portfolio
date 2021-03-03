import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Box,
  HStack,
  Container,
  useMediaQuery,
  VStack,
  Text,
  StackDivider,
  IconButton,
} from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";
import TextGradient from "../../assets/images/textgradient.jpg";
import TextGradient2 from "../../assets/images/textgradient2.jpg";
import Confetti from "react-canvas-confetti";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [fireConfetti, setFireConfetti] = useState(false);
  const { pathname } = useLocation();
  const palette = usePalette();

  // eslint-disable-next-line react/prop-types
  function NavLink({ to, children }) {
    const isMatch = pathname === to || (pathname === "/about" && to === "/");
    return (
      <Link to={to}>
        <Text
          fontWeight="bold"
          sx={{
            cursor: "pointer",
            backgroundImage: `url(${isMatch ? TextGradient2 : TextGradient})`,
            backgroundClip: "text",
            whiteSpace: "nowrap",
            textDecoration: "none",
            ":hover": {
              backgroundImage: `url(${TextGradient2})`,
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
          backgroundImage: `url(${TextGradient})`,
          backgroundClip: "text",
          fontFamily: "Pacifico",
          fontSize: "3em",
          whiteSpace: "nowrap",
          textDecoration: "none",
          transition: "all 0.3s ease",
          ":hover": {
            transform: "scale(1.1)",
            backgroundImage: `url(${TextGradient2})`,
          },
        }}
      >
        Ash Corah
      </Text>
    </Link>
  );

  return (
    <Container centerContent>
      <VStack
        spacing={4}
        divider={<StackDivider borderColor="gray.200" maxW="442px" />}
      >
        <Box p={2}>
          <VStack spacing="10px">
            {isLargerThan600 ? (
              <HStack spacing="70px">
                <NavLink to="/">About</NavLink>
                {title}
                <NavLink to="/work">Work</NavLink>
              </HStack>
            ) : (
              <VStack spacing="15px">
                {title}
                <NavLink to="/">About</NavLink>
                <NavLink to="/work">Work</NavLink>
              </VStack>
            )}
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
                    color: palette.active,
                  },
                }}
                variant="ghost"
                aria-label="Search database"
                icon={<AiFillGithub size="30px" />}
                color={palette.inActive}
              />
              <IconButton
                sx={{
                  ":hover": {
                    color: palette.active,
                  },
                }}
                color={palette.inActive}
                variant="ghost"
                aria-label="Search database"
                icon={<AiFillInstagram size="30px" />}
              />
            </HStack>
          </VStack>
        </Box>
        <div />
      </VStack>
    </Container>
  );
};

export default Navbar;
