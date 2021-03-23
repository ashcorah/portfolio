import { VStack, Text, Box, Center, Heading } from "@chakra-ui/react";
import usePalette from "../../../../hooks/usePallette";

const Chaser = () => {
  const colors = usePalette();
  return (
    <Center as={Box} p={4} w="100%" h="100%" overflow="auto">
      <VStack
        spacing="8px"
        justifyContent="flex-start"
        flexDirection="column"
        fontSize="14px"
        color={colors.white}
      >
        <Heading as="h4" size="sm">
          Rockstar, Tools Engineer
        </Heading>
        <Text textAlign="center">
          Rockstar Games is a leading game developer.
        </Text>
        <Heading as="h5" size="xs">
          Things I worked on
        </Heading>
        <Text textAlign="center">
          I worked as a Tools Engineer. I wrote executable tools using C#. The
          tools we developed assisted the development of triple A titles such as
          Grand Theft Auto and Red Dead Redemption.
        </Text>
        <Text textAlign="center">
          Check out{" "}
          <Text
            as="a"
            href="https://www.rockstargames.com/V"
            textDecoration="underline"
          >
            GTA V
          </Text>
        </Text>
      </VStack>
    </Center>
  );
};

export default Chaser;
