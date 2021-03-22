import { useMediaQuery } from "@chakra-ui/react";

function useMobile() {
  const [isMobile] = useMediaQuery("(max-width: 650px");
  return isMobile;
}

export default useMobile;
