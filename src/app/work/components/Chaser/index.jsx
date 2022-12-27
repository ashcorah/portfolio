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
        color={colors.text}
      >
        <Heading as="h4" size="sm">
          Chaser
        </Heading>
        <Text textAlign="center">
          A small startup company focusing on invoice payments. Automating the
          credit control process.
        </Text>
        <Heading as="h5" size="xs">
          Things I worked on
        </Heading>
        <Text textAlign="center">
          Lead developer of the{" "}
          <Text
            as="a"
            href="https://www.chaserhq.com/features/payment-portal"
            textDecoration="underline"
          >
            Payment Portal
          </Text>{" "}
          which allows customers to pay directly through our system. Developed
          the first iteration of our{" "}
          <Text
            as="a"
            href="https://www.chaserhq.com/features"
            textDecoration="underline"
          >
            Receivables
          </Text>{" "}
          which added React to Chasers tech stack. Developed our{" "}
          <Text
            as="a"
            href="https://www.chaserhq.com/collections"
            textDecoration="underline"
          >
            Collections
          </Text>{" "}
          system which allows customers to escalate invoices.
        </Text>
        <Text textAlign="center">
          Please check out the component library on NPM{" "}
          <Text textDecoration="underline">
            {" "}
            <a href="https://www.npmjs.com/package/chaser-components">
              chaser-components
            </a>
          </Text>
        </Text>
      </VStack>
    </Center>
  );
};

export default Chaser;
