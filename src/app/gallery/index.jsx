import { Box } from "@chakra-ui/react";
import InstaFeed from "./components/InstaFeed/index.jsx";

const Gallery = () => {
  return (
    <Box p={6}>
      <InstaFeed fields="id,thumbnail,  caption, media_url, media_type" />
    </Box>
  );
};

export default Gallery;
