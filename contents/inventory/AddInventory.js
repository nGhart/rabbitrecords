import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import inventoryStore from '../../stores/inventoryStore';

const AddInventory = () => {
  const store = inventoryStore();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Inventory
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddInventory}>
            <Form.Group className="mb-3" controlId="inventoryName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="inventoryName"
                onChange={store.updateCreateInventories}
                value={store.createInventory.inventoryName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inventoryNumber">
              <Form.Label>Serial Number</Form.Label>
              <Form.Control
                type="text"
                name="inventoryNumber"
                onChange={store.updateCreateInventories}
                value={store.createInventory.inventoryNumber}
              />
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inventoryDate">
              <Form.Label>Date Purchase</Form.Label>
              <Form.Control
                type="date"
                name="inventoryDate"
                onChange={store.updateCreateInventories}
                value={store.createInventory.inventoryDate}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inventoryPrice">
              <Form.Label>Purchase Price</Form.Label>
              <Form.Control
                type="number"
                name="inventoryPrice"
                onChange={store.updateCreateInventories}
                value={store.createInventory.inventoryPrice}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inventorySalePrice">
              <Form.Label>Sale Price</Form.Label>
              <Form.Control
                type="number"
                name="inventorySalePrice"
                onChange={store.updateCreateInventories}
                value={store.createInventory.inventorySalePrice}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>{' '}
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddInventory;
