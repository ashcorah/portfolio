import { VStack, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import usePalette from "../../../../hooks/usePallette";

const Chaser = () => {
  const colors = usePalette();
  return (
    <VStack
      spacing={10}
      justifyContent="flex-start"
      alignItems="flex-start"
      textAlign="justify"
      w="100%"
    >
      <VStack
        justifyContent="flex-start"
        alignItems="flex-start"
        textAlign="justify"
        w="100%"
      >
        <Text fontSize="1.6em" color={colors.white}>
          What is it?
        </Text>
        <Text fontSize="1.3em" color={colors.white}>
          I am currently employed at Chaser. We're a small startup company
          focusing on invoice payments. We aim to reduce the time it takes to
          get companies invoices paid. We do this by automating the credit
          control process through e-mail reminders.
        </Text>
      </VStack>
      <VStack
        justifyContent="flex-start"
        alignItems="flex-start"
        textAlign="justify"
        w="100%"
      >
        <Text fontSize="1.6em" color={colors.white}>
          What are some notable achievements?
        </Text>
        <Text fontSize="1.3em" color={colors.white}>
          I was involved in the first iteration of the redesign for Chasers UI.
          I introduced the company to React where I was able to develop the
          first iteration of a brand new Receivables. From there, we have
          completely re-written the entire front-end. I was the lead in managing
          and releasing a payment portal where clients can pay invoices using a
          stand-alone application via. Stripe. I also developed a collections
          project, that enables customers to escalate unpaid invoices.
        </Text>
      </VStack>
      <VStack alignItems="flex-start">
        <Text fontSize="1.6em" color={colors.white}>
          Want to know more?
        </Text>
        <UnorderedList>
          <ListItem>
            <Text
              fontSize="1.3em"
              textDecoration="underline"
              color={colors.white}
            >
              <a href="https://www.chaserhq.com/features">Receivables</a>
            </Text>
          </ListItem>
          <ListItem>
            <Text
              fontSize="1.3em"
              textDecoration="underline"
              color={colors.white}
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
              color={colors.white}
            >
              <a href="https://www.chaserhq.com/collections">Collections</a>
            </Text>
          </ListItem>
        </UnorderedList>
        <Text fontSize="1.3em" color={colors.white}>
          Please check out our component library on NPM:{" "}
          <Text textDecoration="underline">
            {" "}
            <a href="https://www.npmjs.com/package/chaser-components">
              chaser-components
            </a>
          </Text>
        </Text>
      </VStack>
    </VStack>
  );
};

export default Chaser;
