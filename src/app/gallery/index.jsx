import { VStack } from "@chakra-ui/react";
import InstaFeed from "./components/InstaFeed/index.jsx";
import PageContainer from '../../components/PageContainer/index.jsx';

const Gallery = () => {
  return (
    <PageContainer>
      <VStack spacing={2} h="100%" w="100%">
        <InstaFeed fields="id,thumbnail,  caption, media_url, media_type" />
      </VStack>
    </PageContainer>
  );
};

export default Gallery;
