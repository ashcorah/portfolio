import { useMediaQuery } from "@chakra-ui/react";

function useMobile() {
  const [isMobile] = useMediaQuery("(max-width: 850px)");
  return isMobile;
}

export default useMobile;
