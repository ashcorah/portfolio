import React, { useState } from "react";
import Card from "../../components/Card/index.jsx";
import {
  VStack,
  WrapItem,
  Text,
  Wrap,
  useMediaQuery,
  Container,
  UnorderedList,
  ListItem,
  StackDivider,
} from "@chakra-ui/react";
import Chaser from "../../assets/images/chaser.png";
import Rockstar from "../../assets/images/rockstar.jpg";
import RockstarLincoln from "../../assets/images/lincoln.jpg";
import Skyscanner from "../../assets/images/skyscanner.webp";
import Towanda from "../../assets/images/honesdale.PNG";
import University from "../../assets/images/university.jpg";
import { formatTimeFromNow } from "../../util/time";

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
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [selectedJob, setSelected] = useState(workPlaces[0]);

  return (
    <Container maxW="container.xl">
      <VStack
        justifyContent="center"
        spacing={4}
        divider={<StackDivider borderColor="gray.200" />}
      >
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
              <WrapItem w={!isLargerThan600 && "100%"}>
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
        {isLargerThan600 && (
          <VStack>
            <Text color="white" fontWeight="bold">
              {selectedJob.title}
            </Text>
            <Text color="white" textAlign="justify">
              {selectedJob.description}
            </Text>
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default Work;
