import React from "react";
import Card from "../../components/Card/index.jsx";
import { WrapItem, Box, Wrap } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import Chaser from "./components/Chaser/index.jsx";
import Bank from "../../assets/images/chaser.jpg";
import Rockstar from "../../assets/images/rockstar.webp";
import RockstarLincoln from "../../assets/images/lincoln.webp";
import Skyscanner from "../../assets/images/skyscanner.jpg";
import Towanda from "../../assets/images/honesdale.jpg";
import University from "../../assets/images/university.jpg";
import usePalette from "../../hooks/usePallette.js";

function getWorkPlaces() {
  return [
    {
      img: Bank,
      title: "Chaser",
      subtitle: "Front-End Engineer \u25CF Remote",
      body: <Chaser />,
      id: "chaser",
    },
    {
      img: Skyscanner,
      title: "Skyscanner",
      subtitle: "Full-Stack Engineer",
      body: `Notable projects:`,
      id: "skyscanner",
    },
    {
      img: Rockstar,
      title: "Rockstar Games",
      subtitle: "Tools Engineer",
      body: `Blah`,
      id: "tools",
    },
    {
      img: RockstarLincoln,
      title: `Rockstar Games`,
      subtitle: "Quality Assurance",
      body: `Blah`,
      id: "qa",
    },
    {
      img: Towanda,
      title: "Camp Towanda",
      subtitle: "Camp Towanda",
      body: `Blah`,
      id: "towanda",
    },
    {
      img: University,
      title: "University of Lincoln",
      subtitle: "Bachelors Degree",
      body: `Blah`,
      id: "lincoln",
    },
  ];
}

const Work = () => {
  const history = useHistory();
  const colors = usePalette();
  const workPlaces = getWorkPlaces(colors);
  const { params } = useRouteMatch(`/work/:job`) || {};
  const selectedJob = params?.job;

  return (
    <Box h="100%" w="100%">
      <Wrap
        pt={4}
        pb={6}
        pr={10}
        h="100%"
        w="100%"
        display="flex"
        sx={{
          "> ul": {
            width: "100%",
          },
        }}
      >
        {workPlaces.map((job, key) => {
          const { title, img, subtitle, id } = job;
          const isSelected = id === selectedJob;
          return (
            <WrapItem
              isSelected={isSelected}
              key={key}
              flex="1 1 380px"
              as={Card}
              onClick={() => history.push(`/work/${id}`)}
              subtitle={subtitle}
              title={title}
              image={img}
            />
          );
        })}
      </Wrap>
    </Box>
  );
};

export default Work;
