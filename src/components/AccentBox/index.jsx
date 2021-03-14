import { Box } from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette.js";

const AccentBox = ({ children, accent, fontColor, image, ...rest }) => {
  const colors = usePalette();
  return (
    <Box
      backgroundImage={`url(${image})`}
      backgroundPosition="90% 45%"
      backgroundRepeat="no-repeat"
      backgroundSize="400px"
      position="relative"
      color={fontColor || colors.white}
      backgroundColor={accent || colors.blue}
      display="flex"
      justifyContent="flex-start"
      fontSize="13px"
      p={10}
      h="100%"
      w="100%"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default AccentBox;
