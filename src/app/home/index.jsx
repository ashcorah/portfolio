import React, { useState } from "react";
import Card from "../../components/Card/index.jsx";
import {
  VStack,
  WrapItem,
  Text,
  Wrap,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import Alps1 from "../../assets/images/alps1.jpg";
import Alps2 from "../../assets/images/alps2.jpg";

import { formatTimeFromNow } from "../../util/time";
import usePalette from "../../hooks/usePallette.js";

const workPlaces = [
  {
    img: Alps1,
    company: "Who am i?",
    title: "Software Engineer",
    current: true,
    summary: "Finance company for invoice chasing",
    time: `Started at Chaser ${formatTimeFromNow(new Date(2018, 11, 2))}`,
    description: "",
  },
  {
    img: Alps2,
    company: "My Interests",
    title: "Hobbies",
    current: false,
    summary: "",
    time: ``,
    description: ``,
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
