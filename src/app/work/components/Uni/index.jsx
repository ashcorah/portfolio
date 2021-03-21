import { VStack, Text, Box, Center, Heading } from "@chakra-ui/react";
import usePalette from "../../../../hooks/usePallette";

const Chaser = () => {
  const colors = usePalette();
  return (
    <Center as={Box} p={8} w="100%" h="100%" overflow="auto">
      <VStack
        spacing="8px"
        justifyContent="flex-start"
        fontSize="14px"
        color={colors.base}
      >
        <Heading as="h4" size="sm">
          University of Lincoln, Student
        </Heading>
        <Text textAlign="center">Computer Science, BSc</Text>
        <Heading as="h5" size="xs">
          Things I worked on
        </Heading>
        <Text textAlign="center">
          I graduated with a 2:1 in Computer Science at the University of
          Lincoln. In my third year, I wrote a dissertation on an investigation
          into how emotions can be perceived through robotics.
        </Text>
      </VStack>
    </Center>
  );
};

export default Chaser;
