import React from "react";
import Card from "../../components/Card/index.jsx";
import { Container, Grid, Box, GridItem } from "@chakra-ui/react";
import Chaser from "../../assets/images/chaser.png";
import Rockstar from "../../assets/images/rockstar.jpg";
import RockstarLincoln from "../../assets/images/lincoln.jpg";
import Skyscanner from "../../assets/images/skyscanner.webp";
import Towanda from "../../assets/images/honesdale.jpg";
import University from "../../assets/images/university.jpg";
import { formatTimeFromNow } from "../../util/time";

const Work = () => (
  <Container maxW="xl" centerContent>
    <Box p={5}>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1}>
          <Card
            img={Chaser}
            title="Front-End Engineer &bull; Remote"
            current
            summary="Finance software to chase invoices"
            time={`Started work at Chaser ${formatTimeFromNow(
              new Date(2018, 11, 2)
            )}`}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Card
            img={Skyscanner}
            title="Full-Stack Engineer"
            summary="Flights comparison website"
            time={`Worked at Skyscanner ${formatTimeFromNow(
              new Date(2016, 10, 20)
            )}`}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Card
            img={Rockstar}
            title="Software Tools Engineer"
            summary="Video games"
            time={`Worked at Skyscanner ${formatTimeFromNow(
              new Date(2015, 10, 20)
            )}`}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Card
            img={RockstarLincoln}
            title="Quality Assurance"
            summary="Video games"
            time={`Worked at Skyscanner ${formatTimeFromNow(
              new Date(2015, 10, 20)
            )}`}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Card
            img={Towanda}
            title="Camp Counsellor"
            summary="Summer Camp in Pennsylvania"
            time={`Worked at Skyscanner ${formatTimeFromNow(
              new Date(2013, 10, 20)
            )}`}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Card
            img={University}
            title="University Graduate"
            summary="Studying at Lincoln University"
            time={`Studied in Lincoln ${formatTimeFromNow(
              new Date(2012, 10, 20)
            )}`}
          />
        </GridItem>
      </Grid>
    </Box>
  </Container>
);

export default Work;
