import { Box, VStack } from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";

const Card = ({ isSelected, image, subtitle, title, ...rest }) => {
  const colors = usePalette();

  return (
    <Box
      zIndex="0"
      borderWidth="1px"
      position="relative"
      cursor="pointer"
      overflow="hidden"
      transition="0.5s all ease"
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
          filter: isSelected
            ? "grayscale(0%) brightness(100%)"
            : "grayscale(100%) brightness(50%)",
        },
        ":hover::before": {
          filter: "grayscale(0%) brightness(100%)",
          transform: "scale(1.1)",
        },
      }}
      {...rest}
    >
      <Box p="6" h="100%" w="100%">
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
