import { Center, Image } from "@chakra-ui/react";
import Ash from "../../assets/images/ash.jpg";

const About = () => {
  return (
    <Center h="100%">
      <Image src={Ash} borderRadius="100%" filter="grayscale(100%)" />
    </Center>
  );
};

export default About;
