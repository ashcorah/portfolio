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
import { formatTimeFromNow } from "../../util/time";
import usePalette from "../../hooks/usePallette.js";

const workPlaces = [
  {
    img: Chaser,
    company: "Chaser",
    title: "Front-End Engineer \u25CF Remote",
    current: true,
    summary: "Finance company for invoice chasing",
    time: `Started at Chaser ${formatTimeFromNow(new Date(2018, 11, 2))}`,
    description: (
      <UnorderedList>
        <ListItem>Payment Portal</ListItem>
        <ListItem>Receivables</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
    ),
  },
  {
    img: Skyscanner,
    company: "Skyscanner",
    title: "Full-Stack Engineer",
    current: false,
    summary: "Flights comparison website",
    time: `2015 - 2018 - 3 years`,
    description: `Notable projects:`,
  },
  {
    img: Rockstar,
    title: "Software Tools Engineer",
    company: "Rockstar Games",
    current: false,
    summary: "Video games developer",
    time: `2014 - 2015 - 8 months`,
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley
     of type and scrambled it to make a type specimen book. It has survived 
     not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s
       with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.`,
  },
  {
    img: RockstarLincoln,
    company: "Rockstar Games",
    title: "Quality Assurance",
    current: false,
    summary: "Video games developer",
    time: `2014 - 2015 - 2 months`,
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley
     of type and scrambled it to make a type specimen book. It has survived 
     not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s
       with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.`,
  },
  {
    img: Towanda,
    company: "Camp Towanda",
    title: "Camp Counsellor",
    current: false,
    summary: "Summer Camp in Pennsylvania",
    time: `2011 - 2014 - 3 summers`,
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley
     of type and scrambled it to make a type specimen book. It has survived 
     not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s
       with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.`,
  },
  {
    img: University,
    company: "University of Lincoln",
    title: "University located in Lincoln \u25CF Study",
    current: false,
    summary: "Studying at Lincoln University",
    time: `2011 - 2014 - 3 years`,
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley
     of type and scrambled it to make a type specimen book. It has survived 
     not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s
       with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.`,
  },
];

const Work = () => {
  const [isDesktop] = useMediaQuery("(min-width: 970px)");
  const [selectedJob, setSelected] = useState(workPlaces[0]);
  const colors = usePalette("greys");

  return (
    <Box p={10} maxW="1300px" h="100%" overflowY="auto" overflowX="hidden">
      <VStack justifyContent="center" h="100%" spacing={4}>
        <Wrap justify="center">
          {workPlaces.map((job, key) => {
            const {
              company,
              title,
              img,
              description,
              summary,
              current,
              time,
            } = job;
            return (
              <WrapItem flex="1">
                <Card
                  key={key}
                  description={description}
                  isActive={selectedJob === job}
                  onClick={() => setSelected(job)}
                  company={company}
                  current={current}
                  title={title}
                  summary={summary}
                  time={time}
                  image={img}
                />
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
            <VStack alignItems="flex-start">
              <Text fontSize="15px" color={colors.default} fontWeight="bold">
                {selectedJob.company}
              </Text>
              <Text fontSize="13px" color={colors.default} fontWeight="bold">
                {selectedJob.title}
              </Text>
              <Text fontSize="13px" color={colors.default} textAlign="justify">
                {selectedJob.description}
              </Text>
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Work;
