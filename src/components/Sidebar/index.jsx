import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { Box, HStack, Text, VStack, IconButton, Image } from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Ash from '../../assets/images/ash.png';

const Sidebar = () => {
  const isAboutPage = useRouteMatch("/about");
  const { pathname } = useLocation();
  const colors = usePalette();

  const title = (
    <Link to="/">
      <Image src={Ash} />
    </Link>
  );

  // eslint-disable-next-line react/prop-types
  function NavLink({ to, children }) {
    const isMatch = pathname === to || (pathname === "/about" && to === "/");
    return (
      <Link to={to}>
        <Text
          sx={{
            cursor: "pointer",
            color: isMatch ? colors.white : "black",
            fontWeight: isMatch ? "bold" : "normal",
            fontSize: "1em",
            ":hover": {
              color: colors.red,
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
      backgroundColor=" #5b6467"
      backgroundImage="linear-gradient(315deg, #5b6467 0%, #8b939a 74%)"
      p={6}
      h="100%"
      w="250px"
    >
      <VStack spacing={4}>
        <VStack spacing={6}>
          {title}
        </VStack>
        <VStack spacing="35px">
          <HStack>
            <IconButton
              sx={{
                ":hover": {
                  color: colors.red,
                },
              }}
              variant="ghost"
              aria-label="github"
              icon={<AiFillGithub size="30px" />}
              color={colors.white}
            />
            <IconButton
              sx={{
                ":hover": {
                  color: colors.red,
                },
              }}
              color={colors.white}
              variant="ghost"
              aria-label="instagram"
              icon={<AiFillInstagram size="30px" />}
            />
            <IconButton
              sx={{
                ":hover": {
                  color: colors.red,
                },
              }}
              color={colors.white}
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
