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
        color={colors.base}
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
          I was resposible for keep track of approximately 20 kids, day in, day
          out for 7 weeks. It was a 24 hours job with 1 day off a week.
          Difficult but highly rewarding. My job was to keep my allocated kids
          safe, entertained and take them to different activities throughout the
          day.
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
