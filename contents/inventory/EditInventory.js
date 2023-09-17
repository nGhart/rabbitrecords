import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditInventory = ({
  updateInventory,
  handleUpdateInventory,
  updateFormInventory,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateInventory}>
      <Form.Group className="mb-3" controlId="inventoryName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="inventoryName"
          onChange={handleUpdateInventory}
          value={updateFormInventory.inventoryName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="inventoryNumber">
        <Form.Label>Serial Number</Form.Label>
        <Form.Control
          type="text"
          name="inventoryNumber"
          onChange={handleUpdateInventory}
          value={updateFormInventory.inventoryNumber}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inventoryDate">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="date"
          name="inventoryDate"
          onChange={handleUpdateInventory}
          value={updateFormInventory.inventoryDate}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inventoryPrice">
        <Form.Label>Purchase Price</Form.Label>
        <Form.Control
          type="number"
          name="inventoryPrice"
          onChange={handleUpdateInventory}
          value={updateFormInventory.inventoryPrice}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inventorySalePrice">
        <Form.Label>Sale Price</Form.Label>
        <Form.Control
          type="number"
          name="inventorySalePrice"
          onChange={handleUpdateInventory}
          value={updateFormInventory.inventorySalePrice}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <button type="button" onClick={handleCloseModal}>
        Close
      </button>
    </Form>
  );
};

export default EditInventory;
