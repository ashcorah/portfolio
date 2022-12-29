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
import cx from "classnames";
import usePalette from "../../hooks/usePallette";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

import style from "./Sidebar.module.scss";
import ThemeSelector from "../ThemeSelector";

const Sidebar = () => {
  const location = useLocation();
  const colors = usePalette();

  const title = (
    <Stack textAlign="left" className={style.vapor}>
      <Link to="/">
        <Heading>Ash Corah</Heading>
        <Text fontSize="12px">Software Engineer</Text>
      </Link>
    </Stack>
  );

  // eslint-disable-next-line react/prop-types
  function NavLink({ to, children }) {
    const isMatch =
      location.pathname.includes(to) ||
      (to === "/about" && location.pathname === "/");

    return (
      <Link to={to}>
        <Text
          className={cx(isMatch ? style.vapor : undefined)}
          sx={{
            cursor: "pointer",
            color: isMatch ? colors.selected : colors.text,
            fontWeight: isMatch ? "bold" : "normal",
            fontSize: "0.9em",
            ":hover": {
              color: colors.textHover,
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
        <ThemeSelector />
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
                  color: colors.iconHover,
                },
              }}
              variant="ghost"
              aria-label="github"
              icon={<AiFillGithub size="30px" />}
              color={colors.icon}
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/ashcorah/"
              borderWidth="1px"
              sx={{
                ":hover": {
                  color: colors.iconHover,
                },
              }}
              color={colors.icon}
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
                  color: colors.iconHover,
                },
              }}
              color={colors.icon}
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
                  color: colors.iconHover,
                },
              }}
              color={colors.icon}
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
