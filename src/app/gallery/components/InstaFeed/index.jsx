import { useQuery } from "react-query";
import { Wrap, Image, WrapItem, Text, Stack, Center } from "@chakra-ui/react";
import getInstagramAccount from "../../../../services/getInstagramAccount";
import { string } from "prop-types";
import usePalette from "../../../../hooks/usePallette";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { VideoProgress } from 'react-video-progress'

const InstaFeed = ({ fields }) => {
  const colors = usePalette();
  const { isLoading, error, data } = useQuery(["instagram", { fields }], () =>
    getInstagramAccount(fields), {
    refetchOnMount: false,
  });

  if (isLoading) return (
    <Center h="100%">
      <ClimbingBoxLoader color={colors.greys.default} />
    </Center>
  );
  if (error) return (
    <Center h="100%">
      Uh oh...something failed 😔
    </Center>
  );

  return (
    <Wrap spacing={2} w="100%" justify="center" textAlign="center">
      {data.map(({ media_url, caption, media_type, thumbnail }) => {
        return (
          <WrapItem flex="1">
            <Stack h="100%" position="relative">
              <Center
                h="100%"
                sx={{
                  ":hover": {
                    "p": {
                      display: "none"
                    }
                  },
                }}
              >
                <Stack
                  overflow="hidden"
                  transition="0.5s all ease"
                  filter="grayscale(100%) brightness(50%)"
                  height="100%"
                  sx={{
                    borderRadius: "5px",
                    ":hover": {
                      filter: "grayscale(0%) brightness(100%)",
                    },
                  }}
                >
                  {media_type === "VIDEO" ? (
                    <VideoProgress
                      progressStart="BottomLeft"
                      type="BottomLine"
                      pathColor={colors.youtube}
                      pathWidth="4px"
                      onMouseOver={event => event.target.play()}
                      onMouseOut={event => event.target.pause()}
                      src={media_url}
                      wrapperStyle={{
                        minWidth: "200px",
                        height: "100%",
                        filter: "brightness(100%)",
                      }}
                      preload="auto"
                    />
                  ) : (
                    <Image
                      transition="transform .4s"
                      zIndex="-1"
                      sx={{
                        ":hover": {
                          transform: "scale(1.1)",
                          transformOrigin: "50% 50%",
                        },
                      }}
                      minW="200px"
                      h="100%"
                      objectFit="cover"
                      src={media_url}
                    />
                  )}
                </Stack>
                <Text
                  position="absolute"
                  maxW="120px"
                  fontWeight="bold"
                  fontSize="15px"
                  color={colors.white}
                >
                  {caption}
                </Text>
              </Center>
            </Stack>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default InstaFeed;

InstaFeed.propTypes = {
  fields: string,
};