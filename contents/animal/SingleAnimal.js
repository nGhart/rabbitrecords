import React, { useState } from 'react';
import animalStore from '../../stores/store';
import './animal.css';
import EditAnimal from './EditAnimal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SingleAnimal = ({ item, index }) => {
  const store = animalStore((store) => ({
    editAnimal: store.editAnimal,
    deleteAnimal: store.deleteAnimal,
    updateAnimal: store.updateAnimal,
    handleUpdate: store.handleUpdate,
    updateForm: store.updateForm,
  }));

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    store.editAnimal(item);
    setShowModal(true);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.breed}</td>
        <td>{item.sex}</td>
        <td>{item.bred}</td>
        <td>{item.dob}</td>
        <td>Calc</td>
        <td>{item.weaning}</td>
        <td>{item.weightCurrent}</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleShow}>
              <i className="fas fa-eye"></i>
            </button>
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteAnimal(item._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditAnimal
            updateAnimal={store.updateAnimal}
            handleUpdate={store.handleUpdate}
            updateForm={store.updateForm}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{item.name}</p>
          <p>{item.breed}</p>
          <p>{item.sex}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleAnimal;
