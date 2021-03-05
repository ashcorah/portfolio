/* eslint-disable react/prop-types */
import { Box, VStack, HStack, useMediaQuery } from "@chakra-ui/react";

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
  const [isMobile] = useMediaQuery("(max-width: 970px)");

  return (
    <VStack width="100%">
      <Box
        borderRadius="5px"
        position="relative"
        cursor="pointer"
        h="100%"
        width="280px"
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
            zIndex: "1",
            background: `no-repeat center/cover url(${image})`,
            transition: "all 200ms",
            transform: !isActive && "translateY(100%)",
            filter: !isActive
              ? "brightness(65%)"
              : "grayscale(100%) brightness(45%)",
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
      {isMobile && isActive && (
        <Box p={3} textAlign="justify">
          {description}
        </Box>
      )}
    </VStack>
  );
};

export default Card;
