import {
  VStack,
  Text,
  UnorderedList,
  Box,
  ListItem,
  Center,
} from "@chakra-ui/react";
import usePalette from "../../../../hooks/usePallette";

const Chaser = () => {
  const colors = usePalette();
  return (
    <Center as={Box} p={4} w="100%" h="100%">
      <VStack textAlign="center">
        <Text fontSize="1.6em" color={colors.base}>
          What is it?
        </Text>
        <Text fontSize="1.3em" color={colors.base}>
          I am currently employed at Chaser. We're a small startup company
          focusing on invoice payments. We aim to reduce the time it takes to
          get companies invoices paid. We do this by automating the credit
          control process through e-mail reminders.
        </Text>
        <Text fontSize="1.6em" color={colors.base}>
          What are some notable achievements?
        </Text>
        <Text fontSize="1.3em" color={colors.base}>
          I was involved in the first iteration of the redesign for Chasers UI.
          I introduced the company to React where I was able to develop the
          first iteration of a brand new Receivables. From there, we have
          completely re-written the entire front-end. I was the lead in managing
          and releasing a payment portal where clients can pay invoices using a
          stand-alone application via. Stripe. I also developed a collections
          project, that enables customers to escalate unpaid invoices.
        </Text>

        <Text fontSize="1.6em" color={colors.base}>
          Want to know more?
        </Text>
        <UnorderedList>
          <ListItem>
            <Text
              fontSize="1.3em"
              textDecoration="underline"
              color={colors.base}
            >
              <a href="https://www.chaserhq.com/features">Receivables</a>
            </Text>
          </ListItem>
          <ListItem>
            <Text
              fontSize="1.3em"
              textDecoration="underline"
              color={colors.base}
            >
              <a href="https://www.chaserhq.com/features/payment-portal">
                Payment Portal
              </a>
            </Text>
          </ListItem>
          <ListItem>
            <Text
              fontSize="1.3em"
              textDecoration="underline"
              color={colors.base}
            >
              <a href="https://www.chaserhq.com/collections">Collections</a>
            </Text>
          </ListItem>
        </UnorderedList>
        <Text fontSize="1.3em" color={colors.base}>
          Please check out our component library on NPM:{" "}
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
