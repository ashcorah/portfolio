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
  const isHome = useRouteMatch("/about");
  const { pathname } = useLocation();
  const colors = usePalette();
  const [isMobile] = useMediaQuery("(max-width: 516px");

  const title = (
    <Stack textAlign="center">
      <Link to="/">
        <Heading
          transition="0.5s all ease"
          color={isHome ? colors.black : colors.greys.default}
        >
          Ash Corah
        </Heading>
        <Text
          transition="0.5s all ease"
          color={isHome ? colors.black : colors.greys.default}
        >
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
            color: isMatch ? colors.black : colors.greys.default,
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
              color={colors.greys.default}
            />
            <IconButton
              sx={{
                ":hover": {
                  color: colors.black,
                },
              }}
              color={colors.greys.default}
              variant="ghost"
              aria-label="instagram"
              icon={<AiFillInstagram size="30px" />}
            />
            <IconButton
              sx={{
                ":hover": {
                  color: colors.black,
                },
              }}
              color={colors.greys.default}
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
