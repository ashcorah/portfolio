import { useQuery } from "react-query";
import React from "react";
import {
  Wrap,
  Image,
  WrapItem,
  Box,
  Text,
  Stack,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
} from "@chakra-ui/react";
import getInstagramAccount from "../../../../services/getInstagramAccount";
import { string } from "prop-types";
import usePalette from "../../../../hooks/usePallette";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { VideoProgress } from "react-video-progress";
import style from "./InstaFeed.module.scss";

function MediaContent({ media_url, media_type, ...videoProps }) {
  return (
    <VStack cursor="pointer">
      {media_type === "VIDEO" ? (
        <VideoProgress
          progressStart="BottomLeft"
          type="BottomLine"
          pathColor="#c4302b"
          pathWidth="4px"
          target="_blank"
          onMouseOver={(event) => event.target.play()}
          onMouseOut={(event) => event.target.pause()}
          src={media_url}
          style={{
            width: "100%",
          }}
          wrapperStyle={{
            width: "100%",
            filter: "brightness(100%)",
          }}
          preload="auto"
          {...videoProps}
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
          h="100%"
          w="100%"
          objectFit="cover"
          src={media_url}
        />
      )}
    </VStack>
  );
}

function DisplayModal({ title, media_url, media_type, trigger }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {typeof trigger === "function" ? trigger(onOpen) : trigger}
      <Modal isOpen={isOpen} size="md" onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p="5px" maxHeight="450px" overflow="hidden">
              <MediaContent media_url={media_url} media_type={media_type} />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const InstaFeed = ({ fields }) => {
  const colors = usePalette();
  const { isLoading, error, data } = useQuery(["instagram", { fields }], () =>
    getInstagramAccount(fields)
  );

  if (isLoading)
    return (
      <Center h="100%" w="100%">
        <ClimbingBoxLoader color={colors.base} />
      </Center>
    );

  if (error)
    return (
      <Center h="100%">
        Instagram API token expired, (their API sucks) 😔
      </Center>
    );

  return (
    <Wrap w="100%" spacing="20px" justify="flex-start" textAlign="center">
      {data?.map(({ media_url, caption, media_type }) => {
        return (
          <DisplayModal
            title={caption}
            media_url={media_url}
            media_type={media_type}
            trigger={(onOpen) => (
              <WrapItem flex="1" onClick={onOpen}>
                <Stack h="100%" w="100%" position="relative">
                  <Center
                    h="100%"
                    sx={{
                      ":hover": {
                        p: {
                          display: "none",
                        },
                      },
                    }}
                  >
                    <Box
                      p={0}
                      overflow="hidden"
                      transition="0.5s all ease"
                      filter="grayscale(100%) brightness(50%)"
                      maxH="350px"
                      minW="350px"
                      minH="350px"
                      h="100%"
                      className={style.loading}
                      w="100%"
                      sx={{
                        ":hover": {
                          filter: "grayscale(0%) brightness(100%)",
                        },
                      }}
                    >
                      <MediaContent
                        media_url={media_url}
                        media_type={media_type}
                      />
                    </Box>
                    <Text
                      position="absolute"
                      maxW="120px"
                      fontSize="15px"
                      color={colors.white}
                    >
                      {caption}
                    </Text>
                  </Center>
                </Stack>
              </WrapItem>
            )}
          />
        );
      })}
    </Wrap>
  );
};

export default InstaFeed;

InstaFeed.propTypes = {
  fields: string,
};
