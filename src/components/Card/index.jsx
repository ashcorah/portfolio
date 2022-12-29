import { Box, VStack, IconButton, HStack } from "@chakra-ui/react";
import usePalette from "../../hooks/usePallette";
import useControlProp from "../../hooks/useControlProp";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const Front = ({
  image,
  shown,
  colors,
  title,
  subtitle,
  externalLink,
  githubLink,
}) => {
  return (
    <Box
      h="100%"
      w="100%"
      sx={{
        backfaceVisibility: "hidden",
        position: "absolute",
        filter: shown && "grayscale(100%) brightness(50%)",
        transition: "0.5s all ease",
        zIndex: shown ? -1 : 2,
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
          filter: "grayscale(0%) brightness(100%)",
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
        {!shown && (
          <>
            <Box color={colors.cardText} fontWeight="semibold" fontSize="xs">
              {title}
            </Box>
            <Box color={colors.cardText} fontWeight="semibold" fontSize="xs">
              {subtitle}
            </Box>
          </>
        )}
        {(externalLink || githubLink) && (
          <HStack
            zIndex="3"
            position="absolute"
            bottom="10px"
            gap="2px"
            left="10px"
          >
            {externalLink && (
              <IconButton
                as="a"
                href={externalLink}
                sx={{
                  ":hover": {
                    color: colors.card,
                  },
                }}
                variant="ghost"
                target="_blank"
                aria-label="github"
                icon={<BiLinkExternal size="25px" />}
                color="white"
              />
            )}
            {githubLink && (
              <IconButton
                as="a"
                href={githubLink}
                target="_blank"
                sx={{
                  ":hover": {
                    color: colors.card,
                  },
                }}
                variant="ghost"
                aria-label="github"
                icon={<AiFillGithub size="25px" />}
                color="white"
              />
            )}
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

const Back = ({ shown, body }) => {
  return (
    <VStack
      h="100%"
      w="100%"
      sx={{
        position: "absolute",
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(-10px)" : "translateY(20px)",
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
  externalLink,
  githubLink,
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
        externalLink={externalLink}
        githubLink={githubLink}
        {...rest}
      />
      <Back shown={shown} body={body} colors={colors} />
    </Box>
  );
};

export default Card;
