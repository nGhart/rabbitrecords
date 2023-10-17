import React, { useState } from 'react';
import quarantineStore from '../../stores/quarantineStore';
import EditQuarantine from './EditQuarantine';
import Modal from 'react-bootstrap/Modal';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  useDisclosure,
  Button,
  Tr,
  Td,
} from '@chakra-ui/react';

const SingleQuarantine = ({ item, index }) => {
  const store = quarantineStore((store) => {
    return {
      editQuarantine: store.editQuarantine,
      deleteQuarantine: store.deleteQuarantine,
      handleUpdateQuarantine: store.handleUpdateQuarantine,
      updateQuarantine: store.updateQuarantine,
      updateFormQuarantine: store.updateFormQuarantine,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editQuarantine(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Tr key={item._id}>
        <Td>{index + 1}</Td>
        <Td>{item.animal}</Td>
        <Td>{item.condition}</Td>
        <Td>{item.startDate}</Td>
        <Td>{item.endDate}</Td>
        <Td>{item.outcome}</Td>
        <Td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteQuarantine(item._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </Td>
      </Tr>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton className="headerMod">
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditQuarantine
            updateQuarantine={store.updateQuarantine}
            handleUpdateQuarantine={store.handleUpdateQuarantine}
            updateFormQuarantine={store.updateFormQuarantine}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleQuarantine;
