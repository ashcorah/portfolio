import React from "react";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 600px)");

  // eslint-disable-next-line react/prop-types
  function NavLink({ to, children }) {
    return (
      <Link to={to}>
        <Text fontWeight="bold">{children}</Text>
      </Link>
    );
  }

  const title = (
    <Link to="/">
      <Text
        sx={{
          backgroundImage: `url(${TextGradient})`,
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Pacifico",
          fontSize: "3em",
          whiteSpace: "nowrap",
          textDecoration: "none",
          ":hover": {
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
    </Container>
  );
};

export default Navbar;
