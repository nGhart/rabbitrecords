import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import contactStore from '../../stores/contactStore';

const AddContact = () => {
  const store = contactStore();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Contact
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
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddContact}>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="contactName"
                onChange={store.updateCreateContacts}
                value={store.createContact.contactName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="contactEmail"
                onChange={store.updateCreateContacts}
                value={store.createContact.contactEmail}
              />
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                name="contactNumber"
                onChange={store.updateCreateContacts}
                value={store.createContact.contactNumber}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactGroup">
              <Form.Label>Contact Group</Form.Label>
              <Form.Control
                type="text"
                name="contactGroup"
                onChange={store.updateCreateContacts}
                value={store.createContact.contactGroup}
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

export default AddContact;
