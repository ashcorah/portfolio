import { Box, VStack } from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";
import useControlProp from "../../hooks/useControlProp";

const Front = ({ image, shown, colors, title, subtitle }) => {
  return (
    <Box
      h="100%"
      w="100%"
      sx={{
        backfaceVisibility: "hidden",
        position: "absolute",
        transform: shown ? "rotateX(180deg)" : "rotateX(0deg)",
        transformStyle: "preserve-3d",
        transition: "transform ease 500ms",
        zIndex: 2,
        "::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          zIndex: -1,
          background: `no-repeat center/cover url(${image})`,
          transition: "0.3s all ease",
          filter: "grayscale(100%) brightness(50%)",
        },
        ":hover::before": {
          filter: !shown && "grayscale(0%) brightness(100%)",
          transform: !shown && "scale(1.1)",
        },
      }}
    >
      <VStack
        display="flex"
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
  );
};

const Back = ({ shown, body, colors }) => {
  return (
    <VStack
      h="100%"
      w="100%"
      borderWidth="1px"
      borderColor={colors.blue}
      sx={{
        ":hover": {
          borderColor: colors.red,
        },
        position: "absolute",
        transform: shown ? "rotateX(0deg)" : "rotateX(-180deg)",
        transformStyle: "preserve-3d",
        transition: "transform ease 600ms",
        backfaceVisibility: "hidden",
      }}
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {body}
    </VStack>
  );
};

const Card = ({
  showBack,
  onToggle,
  image,
  subtitle,
  title,
  body,
  ...rest
}) => {
  const colors = usePalette();
  const [shown, setShown] = useControlProp(showBack, onToggle, true);

  return (
    <Box
      minH="300px"
      minW="300px"
      display="block"
      w="100%"
      position="relative"
      cursor="pointer"
      transformStyle="preserve-3d"
      boxSizing="border-box"
      overflow="hidden"
      onClick={(e) => {
        e.stopPropagation();
        setShown(!shown);
      }}
      {...rest}
    >
      <Front
        shown={shown}
        colors={colors}
        image={image}
        subtitle={subtitle}
        title={title}
        {...rest}
      />
      <Back shown={shown} body={body} colors={colors} />
    </Box>
  );
};

export default Card;
