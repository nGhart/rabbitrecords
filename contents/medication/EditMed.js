import React from 'react';
import Form from 'react-bootstrap/Form';

const EditMed = ({
  updateMed,
  handleUpdateMed,
  updateFormMed,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateMed}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={handleUpdateMed}
          value={updateFormMed.name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="number">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="text"
          name="number"
          onChange={handleUpdateMed}
          value={updateFormMed.number}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="supplier">
        <Form.Label>Supplier</Form.Label>
        <Form.Control
          type="text"
          name="supplier"
          onChange={handleUpdateMed}
          value={updateFormMed.supplier}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="expiryDate">
        <Form.Label>Expiry Date *</Form.Label>
        <Form.Control
          type="date"
          name="expiryDate"
          onChange={handleUpdateMed}
          value={updateFormMed.expiryDate}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Select
          type="text"
          name="status"
          onChange={handleUpdateMed}
          value={updateFormMed.status}
        >
          <option>Pick Status</option>
          <option value="Available">Available</option>
          <option value="Finished">Finished</option>
        </Form.Select>
      </Form.Group>
      <div className="formButtonsContainer">
        <button className="formButtons" type="submit">
          Save
        </button>
        <button
          className="formButtons"
          type="button"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </Form>
  );
};

export default EditMed;
