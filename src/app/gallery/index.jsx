import { Box, Text, VStack, StackDivider } from "@chakra-ui/react";
import InstaFeed from "./components/InstaFeed/index.jsx";
import AccentBox from "../../components/AccentBox/index";
import usePalette from "../../hooks/usePallette.js";

const Gallery = () => {
  const colors = usePalette();
  return (
    <Box w="100%" h="100%">
      <VStack spacing={4}>
        <AccentBox accent={colors.lavendar} minH="350px">
          <VStack
            w="100%"
            alignItems="flex-start"
            spacing={6}
            divider={
              <StackDivider borderWidth="1px" w="80%" borderColor="white" />
            }
          >
            <Text fontSize="3em">Instagram Feed</Text>
            <Text fontSize="1.5em">
              A collection of videos and images of me trying to injure myself
            </Text>
          </VStack>
        </AccentBox>
        <InstaFeed fields="id,thumbnail,  caption, media_url, media_type" />
      </VStack>
    </Box>
  );
};

export default Gallery;
