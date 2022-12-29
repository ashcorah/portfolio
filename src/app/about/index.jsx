import { Center, Image, Text, VStack, Box, HStack } from "@chakra-ui/react";
import Ash from "../../assets/images/ash.jpg";
import usePalette from "../../hooks/usePallette";
import PageContainer from "../../components/PageContainer/index.jsx";
import Win98Popup from "../../components/Win98Popup/index";
import { useTheme } from "@emotion/react";

const ToolSection = ({ skills, title }) => (
  <VStack>
    <Text>{title}</Text>
    <HStack
      justifyContent="center"
      flexWrap="wrap"
      display="flex"
      spacing="3px"
    >
      {skills.map((skill) => (
        <ToolkitBox key={skill} skill={skill} />
      ))}
    </HStack>
  </VStack>
);

const ToolkitBox = ({ skill }) => {
  const colors = usePalette();

  return (
    <Box pl={2} pr={2} borderWidth="1px" borderColor={colors.border}>
      {skill}
    </Box>
  );
};

const About = () => {
  const { images } = useTheme();
  const skills = [
    "Git",
    "NodeJS",
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "Typescript",
    "React",
    "Redux",
    "GraphQL",
    "Jest",
    "Agile",
  ];
  const knows = ["MongoDB", "Styled components"];
  const dabbled = ["Docker", "AWS", "GCP", "VueJS", "NextJS", "GatsbyJS"];
  const enjoys = ["BMX", "Snowboard", "Mountain Biking"];

  return (
    <PageContainer>
      <Box w="100%" h="100%" position="relative">
        <Image
          transition="0.5s all ease"
          className="skt"
          src={images.aboutImg}
          objectFit="cover"
          filter="brightness(75%)"
          h="100%"
          w="100%"
          top="0"
          left="0"
          position="absolute"
          zIndex="-1"
        />

        <Center alignItems="flex-start" h="100%" p={10} pt="100px">
          <Win98Popup title="About">
            <VStack spacing={10} padding="25px">
              <VStack spacing={6} display="flex">
                <VStack spacing={8} display="flex" justifyContent="flex-start">
                  <VStack
                    spacing={0}
                    display="flex"
                    justifyContent="flex-start"
                  >
                    <Image
                      transition="0.5s all ease"
                      className="ash"
                      src={Ash}
                      maxW="150px"
                      objectFit="cover"
                      sx={{
                        marginBottom: "30px",
                        boxShadow:
                          " -0.0625rem -0.0625rem 0 #6bffff, 0.0625rem 0.0625rem 0 #ff819e",
                        ":hover": {
                          filter: "grayscale(100%)",
                        },
                      }}
                    />
                    <Text textAlign="center" maxW="550px">
                      I'm an Edinburgh-based software engineer who specializes
                      in building things for the web. Currently, I'm an engineer
                      at a{" "}
                      <Text
                        as="a"
                        href="https://www.chaserhq.com/"
                        textDecoration="underline"
                      >
                        Chaser
                      </Text>
                      , a start-up in London focused on getting companies paid
                      on time.
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
            </VStack>
          </Win98Popup>
        </Center>
      </Box>
    </PageContainer>
  );
};

export default About;
