import React, { useState } from "react";
import Card from "../../components/Card/index.jsx";
import {
  VStack,
  WrapItem,
  Text,
  Wrap,
  useMediaQuery,
  UnorderedList,
  ListItem,
  Box,
} from "@chakra-ui/react";
import Chaser from "../../assets/images/chaser.jpg";
import Rockstar from "../../assets/images/rockstar.webp";
import RockstarLincoln from "../../assets/images/lincoln.webp";
import Skyscanner from "../../assets/images/skyscanner.jpg";
import Towanda from "../../assets/images/honesdale.jpg";
import University from "../../assets/images/university.jpg";
import Hobbies1 from "../../assets/images/hobbies1.jpg";
import Hobbies2 from "../../assets/images/hobbies2.jpg";
import { formatTimeFromNow } from "../../util/time";
import usePalette from "../../hooks/usePallette.js";
import InstaFeed from "./components/InstaFeed/index.jsx";

function getWorkPlaces(colors) {
  return [
    {
      id: 1,
      img: Chaser,
      title: "Chaser",
      subtitle: "Front-End Engineer \u25CF Remote",
      body: (
        <VStack>
          {`${formatTimeFromNow(new Date(2018, 11, 2))}`}
          <Text fontSize="13px" fontColor={colors.mid} fontWeight="bold">
            Some notable projects
          </Text>
          <UnorderedList>
            <ListItem>Payment Portal</ListItem>
            <ListItem>Receivables</ListItem>
          </UnorderedList>
        </VStack>
      ),
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

function getAboutMe() {
  return [
    {
      id: 7,
      img: Hobbies1,
      title: "About me",
      subtitle: "💀",
      body: (
        <InstaFeed fields="id,thumbnail,  caption, media_url, media_type" />
      ),
    },
    {
      id: 8,
      img: Hobbies2,
      title: "Hobbies",
      subtitle: "🚴",
      body: "",
    },
  ];
}

const Work = () => {
  const colors = usePalette("greys");
  const workPlaces = getWorkPlaces(colors);
  const amoutMe = getAboutMe();
  const [isDesktop] = useMediaQuery("(min-width: 970px)");
  const [selected, setSelected] = useState(amoutMe[0]);

  return (
    <Box p={10} maxW="1300px" h="100%" overflowY="auto" overflowX="hidden">
      <VStack justifyContent="center" h="100%" spacing={4}>
        <Wrap w="100%" justify="center">
          {amoutMe.map((job, key) => {
            const { id, title, subtitle, img, body } = job;
            const isActive = selected.id === id;
            return (
              <WrapItem flex="1" key={key}>
                <VStack w="100%">
                  <Card
                    isActive={isActive}
                    onClick={() => setSelected(job)}
                    title={title}
                    subtitle={subtitle}
                    image={img}
                  />
                  {!isDesktop && isActive && (
                    <Box
                      fontSize="13px"
                      minHeight="150px"
                      backgroundColor={colors.neutral}
                      borderRadius="5px"
                      borderWidth="1px"
                      p={3}
                      w="100%"
                      textAlign="justify"
                    >
                      {body}
                    </Box>
                  )}
                </VStack>
              </WrapItem>
            );
          })}
        </Wrap>
        {isDesktop && (
          <Box
            p={4}
            h="100%"
            w="100%"
            backgroundColor={colors.neutral}
            borderRadius="5px"
            borderWidth="1px"
          >
            <VStack alignItems="flex-start" spacing={5}>
              <VStack alignItems="flex-start" spacing={1}>
                <Text fontSize="15px" color={colors.default} fontWeight="bold">
                  {selected.company}
                </Text>
                <Text fontSize="13px" color={colors.mid} fontWeight="bold">
                  {selected.title}
                </Text>
                <Text fontSize="13px" color={colors.mid} fontWeight="bold">
                  {selected.time}
                </Text>
              </VStack>
              <Text fontSize="13px" color={colors.mid} textAlign="justify">
                {selected.body}
              </Text>
            </VStack>
          </Box>
        )}
        <Wrap w="100%" justify="center">
          {workPlaces.map((job, key) => {
            const { id, title, img, body, subtitle } = job;
            const isActive = selected.id === id;
            return (
              <WrapItem flex="1">
                <Card
                  key={key}
                  body={body}
                  isActive={isActive}
                  onClick={() => setSelected(job)}
                  subtitle={subtitle}
                  title={title}
                  image={img}
                />
                {!isDesktop && isActive && (
                  <Box
                    fontSize="13px"
                    minHeight="150px"
                    backgroundColor={colors.neutral}
                    borderRadius="5px"
                    borderWidth="1px"
                    p={3}
                    w="100%"
                    textAlign="justify"
                  >
                    {body}
                  </Box>
                )}
              </WrapItem>
            );
          })}
        </Wrap>
      </VStack>
    </Box>
  );
};

export default Work;
