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
} from "@chakra-ui/react";
import TextGradient from "../../assets/images/textgradient.jpg";
import TextGradient2 from "../../assets/images/textgradient2.jpg";
import Confetti from "react-canvas-confetti";

const Navbar = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 600px)");
  const [fireConfetti, setFireConfetti] = useState(false);
  const { pathname } = useLocation();

  // eslint-disable-next-line react/prop-types
  function NavLink({ to, children }) {
    const isMatch = pathname === to || (pathname === "/home" && to === "/");
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
    <>
      <Container centerContent>
        {isLargerThan1280 ? (
          <Box p={5}>
            <HStack spacing="70px">
              <NavLink to="/">Home</NavLink>
              {title}
              <NavLink to="/work">Work</NavLink>
            </HStack>
          </Box>
        ) : (
          <Box p={5}>
            <VStack spacing="15px">
              {title}
              <NavLink to="/">Home</NavLink>
              <NavLink to="/work">Work</NavLink>
            </VStack>
          </Box>
        )}
        <Confetti
          style={{
            position: "absolute",
            zIndex: -1,
          }}
          fire={fireConfetti}
        />
      </Container>
    </>
  );
};

export default Navbar;
