import React, { useState } from "react";
import Card from "../../components/Card/index.jsx";
import { WrapItem, Wrap } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import PageContainer from "../../components/PageContainer/index.jsx";

import ChaserText from "./components/Chaser/index.jsx";
import RockstarText from "./components/Rockstar/index.jsx";
import SkyscannerText from "./components/Skyscanner/index.jsx";
import RockstarQAText from "./components/RockstarQA/index.jsx";
import CampText from "./components/CampTowanda/index.jsx";
import UniText from "./components/Uni/index.jsx";

import Bank from "../../assets/images/chaser.webp";
import Rockstar from "../../assets/images/rockstar.jpg";
import RockstarLincoln from "../../assets/images/lincoln.jpg";
import Skyscanner from "../../assets/images/skyscanner.jpg";
import Towanda from "../../assets/images/honesdale.jpg";
import University from "../../assets/images/university.jpg";
import usePalette from "../../hooks/usePallette.js";

function getWorkPlaces() {
  return [
    {
      img: Bank,
      title: "Chaser",
      subtitle: "Full-Stack Engineer \u25CF Remote",
      body: <ChaserText />,
      externalLink: "https://www.chaserhq.com",
      githubLink: "https://www.npmjs.com/package/chaser-components",
      id: "chaser",
    },
    {
      img: Skyscanner,
      title: "Skyscanner",
      subtitle: "Full-Stack Engineer",
      externalLink: "https://www.skyscanner.net/",
      body: <SkyscannerText />,
      id: "skyscanner",
    },
    {
      img: Rockstar,
      title: "Rockstar Games",
      subtitle: "Tools Engineer",
      body: <RockstarText />,
      id: "tools",
    },
    {
      img: RockstarLincoln,
      title: `Rockstar Games`,
      subtitle: "Quality Assurance",
      body: <RockstarQAText />,
      id: "qa",
    },
    {
      img: Towanda,
      title: "Camp Towanda",
      subtitle: "Camp Counsellor",
      externalLink: "https://www.camptowanda.com/",
      body: <CampText />,
      id: "towanda",
    },
    {
      img: University,
      title: "University of Lincoln",
      subtitle: "Bachelors Degree",
      body: <UniText />,
      id: "lincoln",
    },
  ];
}

const CardItem = ({
  key,
  subtitle,
  title,
  image,
  id,
  body,
  externalLink,
  githubLink,
}) => {
  const history = useHistory();
  const [jobOpen, setJobOpen] = useState(false);

  const { params } = useRouteMatch(`/work/:job`) || {};
  const selectedJob = params?.job;
  const isSelected = id === selectedJob;

  function toggleJob(shown) {
    if (shown) history.push(`/work/${id}`);
    else history.push(`/work`);
    setJobOpen(shown);
  }

  return (
    <WrapItem
      key={key}
      body={body}
      flex="1 1 380px"
      as={Card}
      subtitle={subtitle}
      title={title}
      image={image}
      externalLink={externalLink}
      githubLink={githubLink}
      showBack={jobOpen || isSelected}
      onToggle={toggleJob}
    />
  );
};

const Work = () => {
  const colors = usePalette();
  const workPlaces = getWorkPlaces(colors);

  return (
    <PageContainer>
      <Wrap h="100%" w="100%" display="flex" spacing="20px">
        {workPlaces.map((job, key) => {
          const { title, img, subtitle, id, body, externalLink, githubLink } =
            job;
          return (
            <CardItem
              key={key}
              subtitle={subtitle}
              title={title}
              image={img}
              id={id}
              body={body}
              externalLink={externalLink}
              githubLink={githubLink}
            />
          );
        })}
      </Wrap>
    </PageContainer>
  );
};

export default Work;
