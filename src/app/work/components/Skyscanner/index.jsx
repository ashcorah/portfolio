import { VStack, Text, Box, Center, Heading } from "@chakra-ui/react";
import usePalette from "../../../../hooks/usePallette";

const Chaser = () => {
  const colors = usePalette();
  return (
    <Center as={Box} p={4} w="100%" h="100%" overflow="auto">
      <VStack
        spacing="8px"
        justifyContent="flex-start"
        fontSize="14px"
        color={colors.base}
      >
        <Heading as="h4" size="sm">
          Skyscanner, Full-stack Engineer
        </Heading>
        <Text textAlign="center">
          Skyscanner is a leading search engine tool designed to find cheap
          flights.
        </Text>
        <Heading as="h5" size="xs">
          Things I worked on
        </Heading>
        <Text textAlign="center">
          I worked on internal tools development, from Slack integrations to
          internal communication tooling. My primary resonsibility was the
          development of Flightdeck Flightdeck enabled employees to effectively
          communicate and find each other within a global environment.
        </Text>
      </VStack>
    </Center>
  );
};

export default Chaser;
