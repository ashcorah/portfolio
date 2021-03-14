import { Box } from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette.js";

const AccentBox = ({ children, accent, fontColor, ...rest }) => {
  const colors = usePalette();
  return (
    <Box
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
