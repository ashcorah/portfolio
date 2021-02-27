import React, { useState } from "react";
import Card from "../../components/Card/index.jsx";
import { Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import InfoModal from "./components/InfoModal/index.jsx";
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
    title: "Front-End Engineer \u25CF Remote",
    current: true,
    summary: "Finance software to chase invoices",
    time: `Started work at Chaser ${formatTimeFromNow(new Date(2018, 11, 2))}`,
    description: "Something cool...",
  },
  {
    img: Skyscanner,
    title: "Full-Stack Engineer \u25CF On-site",
    current: false,
    summary: "Flights comparison website",
    time: `Worked at Skyscanner ${formatTimeFromNow(new Date(2016, 10, 20))}`,
    description: "Something cool...",
  },
  {
    img: Rockstar,
    title: "Software Tools Engineer \u25CF On-site",
    current: false,
    summary: "Video games software",
    time: `Worked at Skyscanner ${formatTimeFromNow(new Date(2015, 10, 20))}`,
    description: "Something cool...",
  },
  {
    img: RockstarLincoln,
    title: "Quality Assurance \u25CF On-site",
    current: false,
    summary: "Video games software",
    time: `Worked at Skyscanner ${formatTimeFromNow(new Date(2015, 10, 20))}`,
    description: "Something cool...",
  },
  {
    img: Towanda,
    title: "Camp Counsellor \u25CF America",
    current: false,
    summary: "Summer Camp in Pennsylvania",
    time: `Worked at Skyscanner ${formatTimeFromNow(new Date(2013, 10, 20))}`,
    description: "Something cool...",
  },
  {
    img: University,
    title: "University Graduate \u25CF Study",
    current: false,
    summary: "Studying at Lincoln University",
    time: `Studied in Lincoln ${formatTimeFromNow(new Date(2012, 10, 20))}`,
    description: "Something cool...",
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
    <div>
      <InfoModal isOpen={isOpen} onClose={onClose} selectedJob={selectedJob} />
      <Wrap align="center" justify="center" spacing="24px">
        {workPlaces.map(({ img, title, summary, time }, key) => (
          <WrapItem key={key} onClick={() => openJob(key)}>
            <Card img={img} title={title} summary={summary} time={time} />
          </WrapItem>
        ))}
      </Wrap>
    </div>
  );
};

export default Work;
