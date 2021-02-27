import React, { useState } from "react";
import Card from "../../components/Card/index.jsx";
import { Wrap, WrapItem, useDisclosure, Container } from "@chakra-ui/react";
import InfoModal from "./components/InfoModal/index.jsx";
import Chaser from "../../assets/images/chaser.png";
import Rockstar from "../../assets/images/rockstar.jpg";
import RockstarLincoln from "../../assets/images/lincoln.jpg";
import Skyscanner from "../../assets/images/skyscanner.webp";
import Towanda from "../../assets/images/honesdale.PNG";
import University from "../../assets/images/university.jpg";
import { formatTimeFromNow } from "../../util/time";
import FlipMove from "react-flip-move";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedJob, setSelected] = useState();

  function openJob(id) {
    setSelected(workPlaces[id]);
    onOpen();
  }

  return (
    <Container maxW="1500px">
      <InfoModal isOpen={isOpen} onClose={onClose} selectedJob={selectedJob} />
      <Wrap align="center" justify="center" spacing="24px">
        <FlipMove
          typeName={null}
          easing="cubic-bezier(1, 0, 0, 1)"
          enterAnimation
        >
          {workPlaces.map(
            ({ company, img, title, summary, current, time }, key) => (
              <WrapItem key={key} onClick={() => openJob(key)}>
                <Card
                  company={company}
                  img={img}
                  current={current}
                  title={title}
                  summary={summary}
                  time={time}
                />
              </WrapItem>
            )
          )}
        </FlipMove>
      </Wrap>
    </Container>
  );
};

export default Work;
