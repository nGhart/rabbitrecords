import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import feedStore from '../../stores/feedStore';

const AddFeed = () => {
  const store = feedStore();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Entry
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
          <Modal.Title>Add New Feed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddFeed}>
            <Form.Group className="mb-3" controlId="feedName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="feedName"
                onChange={store.updateCreateFeeds}
                value={store.createFeed.feedName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="feedQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="feedQuantity"
                onChange={store.updateCreateFeeds}
                value={store.createFeed.feedQuantity}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="feedServing">
              <Form.Label>Serving</Form.Label>
              <Form.Control
                type="number"
                name="feedServing"
                onChange={store.updateCreateFeeds}
                value={store.createFeed.feedServing}
                placeholder="Serving per day"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="feedDatePurchased">
              <Form.Label>Contact DatePurchased</Form.Label>
              <Form.Control
                type="date"
                name="feedDatePurchased"
                onChange={store.updateCreateFeeds}
                value={store.createFeed.feedDatePurchased}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddFeed;
