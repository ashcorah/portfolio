import { VStack, Text, Box, Center, Heading } from "@chakra-ui/react";
import usePalette from "../../../../hooks/usePallette";

const Chaser = () => {
  const colors = usePalette();
  return (
    <Center as={Box} p={8} w="100%" h="100%" overflow="auto">
      <VStack
        spacing="8px"
        justifyContent="flex-start"
        flexDirection="column"
        fontSize="14px"
        color={colors.white}
      >
        <Heading as="h4" size="sm">
          Camp Towanda, Camp Counsellor
        </Heading>
        <Text textAlign="center">
          Camp Towanda is a summer camp located in Pennsylvania, USA.
        </Text>
        <Heading as="h5" size="xs">
          Things I worked on
        </Heading>
        <Text textAlign="center">
          Kept track of approximately 20 kids, day in, day out for 7 weeks. 24
          hour job with 1 day off a week. Difficult and highly rewarding. My job
          was to keep my kids safe, entertained and take them to different
          activities throughout the day.
        </Text>
        <Text textAlign="center">
          Check out{" "}
          <Text
            as="a"
            href="https://www.camptowanda.com/"
            textDecoration="underline"
          >
            Camp Towanda
          </Text>
        </Text>
      </VStack>
    </Center>
  );
};

export default Chaser;
