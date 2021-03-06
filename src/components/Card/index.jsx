/* eslint-disable react/prop-types */
import { Box, VStack, useMediaQuery } from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";

const Card = ({
  company,
  isActive,
  current,
  image,
  title,
  summary,
  time,
  description,
  ...rest
}) => {
  const colors = usePalette("greys");
  const [isMobile] = useMediaQuery("(max-width: 970px)");

  return (
    <VStack width="100%">
      <Box
        backgroundColor={colors.neutral}
        zIndex="0"
        borderRadius="5px"
        position="relative"
        cursor="pointer"
        width="100%"
        minW="280px"
        height="150px"
        borderWidth="1px"
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
            transform: !isActive && "translateY(100%)",
            filter: !isActive
              ? "grayscale(100%) brightness(50%)"
              : "brightness(65%)",
          },
          ":hover::before": {
            transform: "none",
          },
          ":hover *": {
            color: "white !important",
          },
          "*": {
            color: isActive && "white !important",
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
            <Box fontWeight="semibold" fontSize="xs">
              {company}
            </Box>
            <Box color="gray.500" fontWeight="semibold" fontSize="xs">
              {title}
            </Box>
          </VStack>
        </Box>
      </Box>
      {isMobile && isActive && (
        <Box
          fontSize="13px"
          minHeight="150px"
          backgroundColor={colors.neutral}
          borderRadius="5px"
          borderWidth="1px"
          p={3}
          w="100%"
          textAlign="justify"
        >
          {description}
        </Box>
      )}
    </VStack>
  );
};

export default Card;
