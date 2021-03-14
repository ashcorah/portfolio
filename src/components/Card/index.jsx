import { Box, VStack } from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";

const Card = ({ isActive, image, subtitle, title, ...rest }) => {
  const colors = usePalette();

  return (
    <Box
      h="100%"
      zIndex="0"
      borderWidth="1px"
      position="relative"
      cursor="pointer"
      width="100%"
      minW="280px"
      overflow="hidden"
      sx={{
        "::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          zIndex: "-1",
          background: `no-repeat center/cover url(${image})`,
          transition: "0.3s all ease",
          filter: !isActive
            ? "grayscale(100%) brightness(50%)"
            : "brightness(65%)",
        },
        ":hover::before": {
          opacity: "100%",
          transform: "scale(1.2)",
        },
      }}
      {...rest}
    >
      <Box p="6" h="100%">
        <VStack
          disply="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing="3px"
          h="100%"
        >
          <Box color={colors.white} fontWeight="semibold" fontSize="xs">
            {title}
          </Box>
          <Box color={colors.white} fontWeight="semibold" fontSize="xs">
            {subtitle}
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Card;
