import { useQuery } from "react-query";
import { Wrap, Box, Image, WrapItem } from "@chakra-ui/react";
import getInstagramAccount from "../../../../services/getInstagramAccount";
import { string } from "prop-types";
import HoverVideoPlayer from "react-hover-video-player";

const InstaFeed = ({ fields }) => {
  const { isLoading, error, data } = useQuery(["instagram", { fields }], () =>
    getInstagramAccount(fields)
  );

  if (isLoading) return "Loading...";
  if (error) return "EROR!";

  console.log(data);

  // make grey, white caption
  // hover, caption fades off color fades in

  return (
    <Box p={10} maxW="1300px" h="100%" overflowY="auto" overflowX="hidden">
      <Wrap w="100%" justify="center">
        {data.map(({ media_url, caption, media_type, thumbnail }) => {
          return (
            <WrapItem flex="1">
              {media_type === "VIDEO" ? (
                <HoverVideoPlayer
                  videoSrc={media_url}
                  pausedOverlay={<Image src={thumbnail} />}
                />
              ) : (
                <Image minW="150px" maxW="200px" src={media_url} />
              )}
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};

export default InstaFeed;

InstaFeed.propTypes = {
  fields: string,
};
