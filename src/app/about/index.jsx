import { Center, Image, Text, VStack, Box } from "@chakra-ui/react";
import Ash from "../../assets/images/ash.jpg";
import usePalette from "../../hooks/usePallette";

const About = () => {
  const colors = usePalette();

  return (
    <Box w="100%" h="100%" p={4}>
      <Box borderWidth="1px" w="100%" borderColor={colors.lightGray} h="100%">
        <Center alignItems="flex-start" h="100%" p={10}>
          <VStack gap={10}>
            <Image src={Ash} borderRadius="100%" filter="grayscale(100%)" />
            <Text fontWeight="bold" textAlign="center">
              Welcome to corah.xyz.
            </Text>
            <Text fontWeight="500" textAlign="center">
              Home of Ash Corah, a Software Engineer from Edinburgh.
            </Text>
            {/* <Text fontWeight="500" textAlign="center">
              Toolkit
            </Text>
            <Text fontWeight="500" textAlign="center">
              Knows his way around
            </Text>
            <Text fontWeight="500" textAlign="center">
              Dabbled with
            </Text>
            <Text fontWeight="500" textAlign="center">
              Enjoys
            </Text> */}
          </VStack>
        </Center>
      </Box>
    </Box>
  );
};

export default About;
