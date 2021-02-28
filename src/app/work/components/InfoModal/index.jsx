import React from "react";
import { func, bool, object } from "prop-types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const InfoModal = ({ isOpen, onClose, selectedJob }) => {
  const { title, description } = selectedJob || {};

  return (
    <Modal motionPreset="scale" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <Box p={4}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;

InfoModal.propTypes = {
  selectedJob: object,
  onClose: func,
  isOpen: bool,
};
