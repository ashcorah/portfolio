import { Box, Image, Badge } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Card = ({ img, alt, current, title, summary, time }) => {
  return (
    <Box
      cursor="pointer"
      width="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      opacity="0.8"
      sx={{
        ":hover": {
          transition: "all 0.3s ease",
          opacity: "1",
        },
      }}
    >
      <Image boxSize="300px" objectFit="cover" src={img} alt={alt} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {current && (
            <Badge borderRadius="full" px="2" colorScheme="orange">
              Current
            </Badge>
          )}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml={current ? 2 : 0}
          >
            {title}
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {summary}
        </Box>
        <Box>{time}</Box>
      </Box>
    </Box>
  );
};

export default Card;
