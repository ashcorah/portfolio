import React from "react";
import { func, bool, object } from "prop-types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const InfoModal = ({ isOpen, onClose, selectedJob }) => {
  const { title, description } = selectedJob || {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{description}</ModalBody>
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
