import React, { useState } from 'react';
import medStore from '../../stores/medStore';
import EditMed from './EditMed';
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

const SingleMed = ({ item, index }) => {
  const store = medStore((store) => {
    return {
      editMed: store.editMed,
      deleteMed: store.deleteMed,
      handleUpdateMed: store.handleUpdateMed,
      updateMed: store.updateMed,
      updateFormMed: store.updateFormMed,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editMed(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Tr key={item._id}>
        <Td>{index + 1}</Td>
        <Td>{item.name}</Td>
        <Td>{item.number}</Td>
        <Td>{item.supplier}</Td>
        <Td>{item.expiryDate}</Td>
        <Td>{item.status}</Td>
        <Td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteMed(item._id)}
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
          <EditMed
            updateMed={store.updateMed}
            handleUpdateMed={store.handleUpdateMed}
            updateFormMed={store.updateFormMed}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleMed;
