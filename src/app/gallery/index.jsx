import { Box, VStack } from "@chakra-ui/react";
import InstaFeed from "./components/InstaFeed/index.jsx";

const Gallery = () => {
  return (
    <Box w="100%" h="100%" p={4}>
      <VStack spacing={2} h="100%" w="100%">
        <InstaFeed fields="id,thumbnail,  caption, media_url, media_type" />
      </VStack>
    </Box>
  );
};

export default Gallery;
