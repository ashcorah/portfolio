import { Link, useLocation } from "react-router-dom";
import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Sidebar = () => {
  const location = useLocation();
  const colors = usePalette();

  const title = (
    <Stack
      textAlign="left"
      sx={{
        ":hover *": {
          color:
            colors[["red", "blue", "green"][Math.floor(Math.random() * 3)]],
        },
      }}
    >
      <Link to="/">
        <Heading transition="0.3s all ease">Ash Corah</Heading>
        <Text transition="0.3s all ease" color={colors.gray}>
          Software Engineer
        </Text>
      </Link>
    </Stack>
  );

  // eslint-disable-next-line react/prop-types
  function NavLink({ to, children }) {
    const isMatch =
      location.pathname.includes(to) ||
      (location.pathname === "/about" && to === "/");
    return (
      <Link to={to}>
        <Text
          sx={{
            cursor: "pointer",
            color: isMatch ? colors.base : colors.gray,
            fontWeight: isMatch ? "bold" : "normal",
            fontSize: "1em",
            ":hover": {
              color: "black",
            },
          }}
        >
          {children}
        </Text>
      </Link>
    );
  }

  return (
    <Box
      alignItems="flex-start"
      display="flex"
      backgroundColor="transparent"
      p={10}
      h="100%"
      w="100%"
    >
      <VStack spacing={8} alignItems="flex-start" display="flex" w="100%">
        {title}
        <VStack alignItems="flex-start" display="flex" w="100%">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </VStack>
        <VStack spacing={2}>
          <HStack alignItems="flex-start" display="flex" w="100%">
            <IconButton
              as="a"
              href="https://github.com/ashcorah"
              borderWidth="1px"
              sx={{
                ":hover": {
                  color: colors.base,
                },
              }}
              variant="ghost"
              aria-label="github"
              icon={<AiFillGithub size="30px" />}
              color={colors.gray}
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/trashcorah/"
              borderWidth="1px"
              sx={{
                ":hover": {
                  color: colors.base,
                },
              }}
              color={colors.gray}
              variant="ghost"
              aria-label="instagram"
              icon={<AiFillInstagram size="30px" />}
            />
          </HStack>
          <HStack alignItems="flex-start" display="flex" w="100%">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/ashcorah/"
              borderWidth="1px"
              sx={{
                ":hover": {
                  color: colors.base,
                },
              }}
              color={colors.gray}
              variant="ghost"
              aria-label="linkedin"
              icon={<AiFillLinkedin size="30px" />}
            />
            <IconButton
              as="a"
              href="mailto:ashcorah@gmail.com"
              borderWidth="1px"
              sx={{
                ":hover": {
                  color: colors.base,
                },
              }}
              color={colors.gray}
              variant="ghost"
              aria-label="email"
              icon={<AiOutlineMail size="30px" />}
            />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
