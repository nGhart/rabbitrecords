import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const AddDisease = () => {
  const [disease, setDisease] = useState({
    diseaseAnimal: '',
    diseaseCondition: '',
    diseaseManagement: '',
    diseaseDuration: '',
    diseaseOutcome: '',
    diseaseDate: '',
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDisease((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:1994/diseases', disease)
      .then((res) => console.log(res))
      .catch((error) => console.error());
    setShow(false);
  };

  // useEffect(() => {
  //   console.log(disease);
  // }, [disease]);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        AddDisease
      </Button>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  value={disease.diseaseAnimal}
                  type="text"
                  placeholder="Animal ID"
                  onChange={handleChange}
                  name="diseaseAnimal"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  value={disease.diseaseCondition}
                  type="text"
                  placeholder="Condition"
                  onChange={handleChange}
                  name="diseaseCondition"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  value={disease.diseaseManagement}
                  type="text"
                  placeholder="Management"
                  onChange={handleChange}
                  name="diseaseManagement"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  value={disease.diseaseDuration}
                  type="Number"
                  placeholder="Duration of Treatment"
                  onChange={handleChange}
                  name="diseaseDuration"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  value={disease.diseaseOutcome}
                  type="text"
                  placeholder="Outcome"
                  onChange={handleChange}
                  name="diseaseOutcome"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  value={disease.diseaseDate}
                  type="date"
                  placeholder="Date"
                  onChange={handleChange}
                  name="diseaseDate"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleClick} type="submit">
                Add Entry
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AddDisease;
