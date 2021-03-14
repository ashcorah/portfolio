import React, { useState } from "react";
import Card from "../../components/Card/index.jsx";
import {
  VStack,
  Text,
  useMediaQuery,
  Box,
  StackDivider,
  HStack,
} from "@chakra-ui/react";
import Chaser from "./components/Chaser/index.jsx";
import Bank from "../../assets/images/chaser.jpg";
import Rockstar from "../../assets/images/rockstar.webp";
import RockstarLincoln from "../../assets/images/lincoln.webp";
import Skyscanner from "../../assets/images/skyscanner.jpg";
import Towanda from "../../assets/images/honesdale.jpg";
import University from "../../assets/images/university.jpg";
import usePalette from "../../hooks/usePallette.js";
import AccentBox from "../../components/AccentBox/index";

function getWorkPlaces(colors) {
  return [
    {
      id: 1,
      img: Bank,
      title: "Chaser",
      subtitle: "Front-End Engineer \u25CF Remote",
      body: <Chaser />,
    },
    {
      id: 2,
      img: Skyscanner,
      title: "Skyscanner",
      subtitle: "Full-Stack Engineer",
      body: `Notable projects:`,
    },
    {
      id: 3,
      img: Rockstar,
      title: "Rockstar Games",
      subtitle: "Tools Engineer",
      body: `Blah`,
    },
    {
      id: 4,
      img: RockstarLincoln,
      title: `Rockstar Games`,
      subtitle: "Quality Assurance",
      body: `Blah`,
    },
    {
      id: 5,
      img: Towanda,
      title: "Camp Towanda",
      subtitle: "Camp Towanda",
      body: `Blah`,
    },
    {
      id: 6,
      img: University,
      title: "University of Lincoln",
      subtitle: "Bachelors Degree",
      body: `Blah`,
    },
  ];
}

const Work = () => {
  const colors = usePalette();
  const workPlaces = getWorkPlaces(colors);
  const [isDesktop] = useMediaQuery("(min-width: 970px)");
  const [selected, setSelected] = useState(workPlaces[0]);

  return (
    <Box h="100%" w="100%">
      <HStack h="100%" spacing={2}>
        <VStack
          pt={4}
          pb={6}
          pr={1}
          h="100%"
          display="flex"
          flexGrow="1"
          flexDirection="column"
        >
          {workPlaces.map((job, key) => {
            const { id, title, img, body, subtitle } = job;
            const isActive = selected.id === id;
            return (
              <>
                <Card
                  key={key}
                  isActive={isActive}
                  onClick={() => setSelected(job)}
                  subtitle={subtitle}
                  title={title}
                  image={img}
                />
                {!isDesktop && isActive && (
                  <Box
                    fontSize="13px"
                    color={colors.white}
                    minHeight="150px"
                    backgroundColor={colors.blue}
                    borderRadius="5px"
                    borderWidth="1px"
                    p={3}
                    w="100%"
                    textAlign="justify"
                  >
                    {body}
                  </Box>
                )}
              </>
            );
          })}
        </VStack>
        {isDesktop && (
          <VStack spacing="0px" h="100%" w="100%">
            <AccentBox accent={colors.blue}>
              <VStack alignItems="flex-start" w="100%" spacing={20}>
                <VStack
                  w="100%"
                  alignItems="flex-start"
                  spacing={6}
                  divider={
                    <StackDivider
                      borderWidth="1px"
                      w="90%"
                      borderColor="white"
                    />
                  }
                >
                  <Text fontSize="3em">{selected.title}</Text>
                  <Text fontSize="1.5em">{selected.subtitle}</Text>
                </VStack>
                <Text>{selected.body}</Text>
              </VStack>
            </AccentBox>
          </VStack>
        )}
      </HStack>
    </Box>
  );
};

export default Work;
