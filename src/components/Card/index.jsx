/* eslint-disable react/prop-types */
import { Box, VStack, HStack, useMediaQuery } from "@chakra-ui/react";
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
  const [isLessThan600] = useMediaQuery("(max-width: 600px)");
  const colors = usePalette();

  return (
    <VStack width="100%">
      <Box
        backgroundColor={isActive ? "transparent" : colors.sex}
        position="relative"
        cursor="pointer"
        width={isLessThan600 ? "100%" : "280px"}
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
            zIndex: "1",
            background: `no-repeat center/cover url(${image})`,
            transition: "all 200ms",
            transform: !isActive && "translateY(100%)",
            filter: !isActive
              ? "grayscale(100%) brightness(45%)"
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
        <Box as="div" p="6">
          <VStack
            alignItems="left"
            spacing="3px"
            sx={{ "> *": { zIndex: "3" } }}
          >
            <HStack>
              <Box
                fontWeight="semibold"
                fontSize="xs"
                textTransform="uppercase"
              >
                {company}
              </Box>
            </HStack>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {title}
            </Box>
            <Box
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              isTruncated
            >
              {summary}
            </Box>
            <Box mt="1" color="gray.500" fontWeight="semibold" fontSize="xs">
              {time}
            </Box>
          </VStack>
        </Box>
      </Box>
      {isLessThan600 && isActive && (
        <Box p={3} textAlign="justify">
          {description}
        </Box>
      )}
    </VStack>
  );
};

export default Card;
