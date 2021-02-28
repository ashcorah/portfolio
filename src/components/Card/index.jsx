import { Box, Image, Badge, Button, VStack, HStack } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Card = ({ company, img, alt, current, title, summary, time }) => {
  return (
    <Box
      position="relative"
      cursor="pointer"
      width="280px"
      height="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      sx={{
        ":hover > img": {
          filter: "invert() hue-rotate(90deg)",
        },
        ":hover > button": {
          opacity: "1",
        },
      }}
    >
      <Box
        as={Button}
        variant="solid"
        outline="transparent"
        top="50%"
        left="50%"
        position="absolute"
        zIndex="1"
        opacity="0"
        transform="translate(-50%, -200%)"
      >
        Read more
      </Box>
      <Image
        opacity="1"
        boxSize="280px"
        objectFit="cover"
        src={img}
        alt={alt}
        transition="all 0.3s ease"
      />
      <Box p="6" backgroundColor="white">
        <VStack alignItems="left" spacing="3px">
          <HStack>
            <Box fontWeight="semibold" fontSize="xs" textTransform="uppercase">
              {company}
            </Box>
            {current && (
              <Badge borderRadius="full" px="2" colorScheme="orange">
                Current
              </Badge>
            )}
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
  );
};

export default Card;
