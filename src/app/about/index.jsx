import { Center, Image, Text, VStack, Box, HStack } from "@chakra-ui/react";
import Ash from "../../assets/images/ash.jpg";
import Skatepark from "../../assets/images/skatepark.jpg";
import usePalette from "../../hooks/usePallette";

const ToolSection = ({ skills, title }) => (
  <VStack>
    <Text color="white">{title}</Text>
    <HStack justifyContent="center" flexWrap="wrap" display="flex" spacing="2px">
      {skills.map(skill => (
        <ToolkitBox skill={skill} />
      ))}
    </HStack>
  </VStack>
)

const ToolkitBox = ({ skill }) => {
  const colors = usePalette();

  return (
    <Box pl={2} pr={2} color="white" fontWeight="bold" borderWidth="1px" borderColor={colors.gray}>
      {skill}
    </Box>
  )
}

const About = () => {
  const skills = ["Git", "NodeJS", "HTML", "CSS", "Sass", "JS", "React", "Redux", "GraphQL", "Jest"];
  const knows = ["MongoDB", "Styled components"];
  const dabbled = ["Docker", "Typescript", "NextJS", "GatsbyJS"];
  const enjoys = ["BMX", "Snowboard", "Mountain Biking"];

  return (
    <Box w="100%" h="100%" p={4}>
      <Box w="100%" h="100%" position="relative">
        <Image
          transition="0.5s all ease"
          className="skt"
          src={Skatepark}
          objectFit="cover"
          filter="grayscale(100%) brightness(50%)"
          h="100%"
          w="100%"
          top="0"
          left="0"
          position="absolute"
          zIndex="-1"
        />
        <Center alignItems="flex-start" h="100%" p={10} pt="100px">
          <VStack spacing={18} justifyContent="center" display="flex">
            <Image
              transition="0.5s all ease"
              className="ash"
              src={Ash}
              borderRadius="100%"
              filter="grayscale(100%)"
            />
            <Text fontWeight="bold" color="white" textAlign="center">
              Welcome to corah.xyz.
            </Text>
            <Text color="white" textAlign="center">
              I'm Ash Corah, a Software Engineer from Edinburgh.
            </Text>
            <ToolSection
              title="Toolkit"
              skills={skills}
            />
            <ToolSection
              title="Knows his way around"
              skills={knows}
            />
            <ToolSection
              title="Dabbled with"
              skills={dabbled}
            />
            <ToolSection
              title="Enjoys"
              skills={enjoys}
            />
          </VStack>
        </Center>
      </Box>
    </Box>
  );
};

export default About;
