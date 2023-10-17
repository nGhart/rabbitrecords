import React, { useState } from 'react';
import diseaseStore from '../../stores/diseaseStore';
import EditDisease from './EditDisease';
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

const SingleDisease = ({ item, index }) => {
  const store = diseaseStore((store) => {
    return {
      editDisease: store.editDisease,
      deleteDisease: store.deleteDisease,
      handleUpdateDisease: store.handleUpdateDisease,
      updateDisease: store.updateDisease,
      updateFormDisease: store.updateFormDisease,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editDisease(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Tr key={item._id}>
        <Td>{index + 1}</Td>
        <Td>{item.diseaseAnimal}</Td>
        <Td>{item.diseaseCondition}</Td>
        <Td>{item.diseaseManagement}</Td>
        <Td>{item.diseaseDuration}</Td>
        <Td>{item.diseaseOutcome}</Td>
        <Td>{item.diseaseDate}</Td>
        <Td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteDisease(item._id)}
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
          <EditDisease
            updateDisease={store.updateDisease}
            handleUpdateDisease={store.handleUpdateDisease}
            updateFormDisease={store.updateFormDisease}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleDisease;
