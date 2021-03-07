import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Box, HStack, VStack, Text, IconButton, Image } from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Me from "../../assets/images/me.jpg";

const Sidebar = () => {
  const isAboutPage = useRouteMatch("/about");
  const colors = usePalette();

  const title = (
    <Link to="/">
      <VStack
        spacing="0px"
        textAlign="center"
        sx={{
          ":hover *": {
            color: colors.red,
          },
        }}
      >
        <Text
          sx={{
            cursor: "pointer",
            fontSize: "1.5em",
            color: colors.white,
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          Ash Corah
        </Text>
        <Text
          sx={{
            cursor: "pointer",
            fontSize: "1em",
            color: colors.white,
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          Software Engineer
        </Text>
      </VStack>
    </Link>
  );

  return (
    <Box background={colors.greys.default} p={6} h="100%" w="250px">
      <VStack spacing={4}>
        <VStack spacing={6}>
          {title}
          <Link to="/about">
            <Image
              src={Me}
              cursor="pointer"
              width="130px"
              transition="0.5s all ease"
              sx={{
                filter: !isAboutPage && "grayscale(100%) brightness(65%)",
                borderRadius: "100%",
                ":hover": {
                  filter: "grayscale(0%) brightness(100%)",
                },
              }}
            />
          </Link>
        </VStack>
        <HStack>
          <IconButton
            sx={{
              ":hover": {
                color: colors.red,
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
                color: colors.red,
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

export default Sidebar;
