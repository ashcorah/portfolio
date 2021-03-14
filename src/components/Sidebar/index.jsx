import { Link, useLocation, useRouteMatch } from "react-router-dom";
import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Stack,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Sidebar = () => {
  const { pathname } = useLocation();
  const colors = usePalette();
  const [isMobile] = useMediaQuery("(max-width: 516px");

  function color(path) {
    switch (path) {
      case "/about":
        return colors.gold;
      case "/gallery":
        return colors.lavendar;
      default:
        return colors.blue;
    }
  }

  const title = (
    <Stack textAlign="center">
      <Link to="/">
        <Heading transition="0.5s all ease" color={color(pathname)}>
          Ash Corah
        </Heading>
        <Text transition="0.5s all ease" color={colors.gray}>
          Software Engineer
        </Text>
      </Link>
    </Stack>
  );

  // eslint-disable-next-line react/prop-types
  function NavLink({ to, children }) {
    const isMatch = pathname === to || (pathname === "/about" && to === "/");
    return (
      <Link to={to}>
        <Text
          sx={{
            cursor: "pointer",
            color: isMatch ? colors.black : colors.gray,
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
      justifyContent={isMobile ? "center" : "flex-start"}
      display="flex"
      backgroundColor="transparent"
      p={10}
      h="100%"
      w="100%"
    >
      <VStack spacing={4}>
        <VStack spacing={6}>{title}</VStack>
        <VStack spacing="35px">
          <HStack>
            <IconButton
              sx={{
                ":hover": {
                  color: colors.black,
                },
              }}
              variant="ghost"
              aria-label="github"
              icon={<AiFillGithub size="30px" />}
              color={colors.gray}
            />
            <IconButton
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
            <IconButton
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
          </HStack>
          <VStack>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
