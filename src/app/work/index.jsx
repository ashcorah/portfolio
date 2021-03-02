import React, { useState } from "react";
import Card from "../../components/Card/index.jsx";
import {
  VStack,
  Flex,
  WrapItem,
  Box,
  Image,
  Text,
  Stack,
  Wrap,
  useMediaQuery,
} from "@chakra-ui/react";
import Chaser from "../../assets/images/chaser.png";
import Rockstar from "../../assets/images/rockstar.jpg";
import RockstarLincoln from "../../assets/images/lincoln.jpg";
import Skyscanner from "../../assets/images/skyscanner.webp";
import Towanda from "../../assets/images/honesdale.PNG";
import University from "../../assets/images/university.jpg";
import { formatTimeFromNow } from "../../util/time";
import { img1, img2, img3 } from "../../assets/images/work/chaser/index";

const workPlaces = [
  {
    img: Chaser,
    company: "Chaser",
    title: "Front-End Engineer \u25CF Remote",
    current: true,
    summary: "Finance company for invoice chasing",
    time: `Started at Chaser ${formatTimeFromNow(new Date(2018, 11, 2))}`,
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley
     of type and scrambled it to make a type specimen book. It has survived 
     not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s
       with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.`,
    images: [img1, img2, img3],
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
    images: [img1, img2, img3],
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
    images: [img1, img2, img3],
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
    images: [img1, img2, img3],
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
    images: [img1, img2, img3],
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
    images: [img1, img2, img3],
  },
];

const Work = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [selectedJob, setSelected] = useState(0);

  return (
    <Box p={4}>
      <Flex flex="1">
        <VStack flex="1">
          {workPlaces.map(
            (
              { company, title, img, description, summary, current, time },
              key
            ) => (
              <Card
                key={key}
                description={description}
                isActive={selectedJob === key}
                onClick={() => setSelected(key)}
                company={company}
                current={current}
                title={title}
                summary={summary}
                time={time}
                image={img}
              />
            )
          )}
        </VStack>
        {isLargerThan600 && (
          <Flex minW="300px" flexGrow="1">
            <Stack paddingLeft="20px">
              <VStack spacing="15px" alignItems="left">
                <Text fontWeight="bold">{workPlaces[selectedJob].title}</Text>
                <Text textAlign="justify">
                  {workPlaces[selectedJob].description}
                </Text>
                <Wrap spacing="5px">
                  {workPlaces[selectedJob].images.map((img) => (
                    <WrapItem>
                      <Image maxW="300px" src={img} />
                    </WrapItem>
                  ))}
                </Wrap>
              </VStack>
            </Stack>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Work;
