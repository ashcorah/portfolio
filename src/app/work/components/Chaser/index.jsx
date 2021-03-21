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
        color={colors.base}
      >
        <Heading as="h4" size="sm">
          Chaser
        </Heading>
        <Text textAlign="center">
          Chaser is a small startup company focusing on invoice payments. Chaser
          aims to reduce the time it takes to get companies invoices paid. This
          is achieved by automating the credit control process through e-mail
          reminders.
        </Text>
        <Heading as="h5" size="xs">
          Things I worked on
        </Heading>
        <Text textAlign="center">
          I was the lead developer of the{" "}
          <Text
            as="a"
            href="https://www.chaserhq.com/features/payment-portal"
            textDecoration="underline"
            color={colors.base}
          >
            Payment Portal
          </Text>{" "}
          which allows customers to pay directly through our system. I developed
          the first iteration of our{" "}
          <Text
            as="a"
            href="https://www.chaserhq.com/features"
            textDecoration="underline"
            color={colors.base}
          >
            Receivables
          </Text>{" "}
          which added React to Chasers tech stack. I developed our{" "}
          <Text
            as="a"
            href="https://www.chaserhq.com/collections"
            textDecoration="underline"
            color={colors.base}
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
