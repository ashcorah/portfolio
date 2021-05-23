import {
  Center,
  Image,
  Text,
  VStack,
  Box,
  HStack,
  Button,
} from "@chakra-ui/react";
import Ash from "../../assets/images/ash.jpg";
import Swhirly from "../../assets/images/swhirly.gif";
import usePalette from "../../hooks/usePallette";
import PageContainer from "../../components/PageContainer/index.jsx";
import { AiOutlineMail } from "react-icons/ai";

const ToolSection = ({ skills, title }) => (
  <VStack>
    <Text color="white">{title}</Text>
    <HStack
      justifyContent="center"
      flexWrap="wrap"
      display="flex"
      spacing="3px"
    >
      {skills.map((skill) => (
        <ToolkitBox skill={skill} />
      ))}
    </HStack>
  </VStack>
);

const ToolkitBox = ({ skill }) => {
  const colors = usePalette();

  return (
    <Box
      pl={2}
      pr={2}
      color="white"
      borderWidth="1px"
      borderColor={colors.gray}
    >
      {skill}
    </Box>
  );
};

const About = () => {
  const colors = usePalette();
  const skills = [
    "Git",
    "NodeJS",
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "React",
    "Redux",
    "GraphQL",
    "Jest",
    "Agile",
  ];
  const knows = ["MongoDB", "Styled components"];
  const dabbled = [
    "Docker",
    "AWS",
    "GCP",
    "VueJS",
    "Typescript",
    "NextJS",
    "GatsbyJS",
  ];
  const enjoys = ["BMX", "Snowboard", "Mountain Biking"];

  return (
    <PageContainer>
      <Box w="100%" h="100%" position="relative">
        <Image
          transition="0.5s all ease"
          className="skt"
          src={Swhirly}
          objectFit="cover"
          filter="brightness(50%)"
          h="100%"
          w="100%"
          top="0"
          left="0"
          position="absolute"
          zIndex="-1"
        />
        <Center alignItems="flex-start" h="100%" p={10} pt="100px">
          <VStack spacing={10}>
            <VStack spacing={6} display="flex">
              <Image
                transition="0.5s all ease"
                className="ash"
                src={Ash}
                maxW="180px"
                objectFit="cover"
                borderRadius="5%"
                sx={{
                  ":hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
              <VStack spacing={8} display="flex" justifyContent="flex-start">
                <VStack spacing={0} display="flex" justifyContent="flex-start">
                  <Text color="white" textAlign="center" maxW="450px">
                    I'm an Edinburgh-based software engineer who specializes in
                    building things for the web. Currently, I'm an engineer at a{" "}
                    <Text
                      as="a"
                      href="https://www.chaserhq.com/"
                      textDecoration="underline"
                    >
                      Chaser
                    </Text>
                    , a start-up in London focused on getting companies paid on
                    time.
                  </Text>
                </VStack>
                <VStack spacing={4}>
                  <ToolSection title="Toolkit" skills={skills} />
                  <ToolSection title="Know my way around" skills={knows} />
                  <ToolSection title="Dabbled with" skills={dabbled} />
                  <ToolSection title="Interests" skills={enjoys} />
                </VStack>
              </VStack>
            </VStack>
            <Button
              as="a"
              href="mailto:ashcorah@gmail.com"
              leftIcon={<AiOutlineMail />}
              fontWeight="normal"
              color="white"
              _hover={{ borderColor: colors.red }}
              variant="outline"
            >
              Get in touch
            </Button>
          </VStack>
        </Center>
      </Box>
    </PageContainer>
  );
};

export default About;
