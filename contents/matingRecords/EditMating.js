import React from 'react';
import Form from 'react-bootstrap/Form';

const EditMating = ({
  updateMating,
  handleUpdateMating,
  updateFormMating,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateMating}>
      <Form.Group className="mb-3" controlId="matingDoe">
        <Form.Label>Doe *</Form.Label>
        <Form.Control
          type="text"
          name="matingDoe"
          onChange={handleUpdateMating}
          value={updateFormMating.matingDoe}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="matingBuck">
        <Form.Label>Buck *</Form.Label>
        <Form.Control
          type="text"
          name="matingBuck"
          onChange={handleUpdateMating}
          value={updateFormMating.matingBuck}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="matingDate2">
        <Form.Label>Date of Last Servicing *</Form.Label>
        <Form.Control
          type="date"
          name="matingDate2"
          onChange={handleUpdateMating}
          value={updateFormMating.matingDate2}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="nesting">
        <Form.Label>Nesting Date</Form.Label>
        <Form.Control
          type="date"
          name="nesting"
          onChange={handleUpdateMating}
          value={updateFormMating.nesting}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="kindling">
        <Form.Label>Kindling Date</Form.Label>
        <Form.Control
          type="date"
          name="kindling"
          onChange={handleUpdateMating}
          value={updateFormMating.kindling}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Select
          type="date"
          name="status"
          onChange={handleUpdateMating}
          value={updateFormMating.status}
        >
          <option>Pick Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
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

export default EditMating;
