import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import AddDisease from './AddDisease';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DiseaseList = () => {
  const [diseases, setDiseases] = useState([]);
  const [show, setShow] = useState(false);
  const [updatedDisease, setUpdatedDisease] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formatDate = (date) => {
    // Assuming date is in the format "yyyy-MM-ddTHH:mm:ss.sssZ"
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    axios
      .get('http://localhost:1994/diseases')
      .then((res) => {
        //console.log(res);
        setDiseases(res.data.diseases);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteDisease = (_id) => {
    axios
      .delete(`http://localhost:1994/diseases/${_id}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    window.location.reload();
  };
  const updateDisease = (item) => {
    setUpdatedDisease(item);
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDisease((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const saveUpdatedDisease = () => {
    axios
      .put(
        `http://localhost:1994/diseases/${updatedDisease._id}`,
        updatedDisease
      )
      .then((res) => {
        console.log(res).catch((error) => console.error);
      });
    handleClose();
    setDiseases(updateDisease);
    window.location.reload();
  };
  return (
    <div>
      <AddDisease />
      DiseaseList
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>DATE</th>
            <th>ID</th>
            <th>CONDITION</th>
            <th>MANAGEMENT</th>
            <th>DURATION</th>
            <th>OUTCOME</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {diseases.length > 0 ? ( // Check if diseases array is not empty
            diseases.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.diseaseDate}</td>
                <td>{item.diseaseAnimal}</td>
                <td>{item.diseaseCondition}</td>
                <td>{item.diseaseManagement}</td>
                <td>{item.diseaseDuration}</td>
                <td>{item.diseaseOutcome}</td>
                <td>
                  <button onClick={() => updateDisease(item)}>Edit</button>
                  <button onClick={() => deleteDisease(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No diseases found</td>
            </tr>
          )}
        </tbody>
      </Table>
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
                value={
                  updatedDisease.diseaseAnimal
                    ? updatedDisease.diseaseAnimal
                    : ''
                }
                type="text"
                placeholder="Animal ID"
                onChange={handleChange}
                name="diseaseAnimal"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Control
                value={
                  updatedDisease.diseaseCondition
                    ? updatedDisease.diseaseCondition
                    : ''
                }
                type="text"
                placeholder="Condition"
                onChange={handleChange}
                name="diseaseCondition"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Control
                value={
                  updatedDisease.diseaseManagement
                    ? updatedDisease.diseaseManagement
                    : ''
                }
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
                value={
                  updatedDisease.diseaseDuration
                    ? updatedDisease.diseaseDuration
                    : ''
                }
                type="Number"
                placeholder="Duration of Treatment"
                onChange={handleChange}
                name="diseaseDuration"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Control
                value={
                  updatedDisease.diseaseOutcome
                    ? updatedDisease.diseaseOutcome
                    : ''
                }
                type="text"
                placeholder="Outcome"
                onChange={handleChange}
                name="diseaseOutcome"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Control
                value={
                  updatedDisease.diseaseDate ? updatedDisease.diseaseDate : ''
                }
                // value={
                //   updatedDisease.diseaseDate
                //     ? formatDate(updatedDisease.diseaseDate)
                //     : ''
                // }
                type="text"
                placeholder="Date"
                onChange={handleChange}
                name="diseaseDate"
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={saveUpdatedDisease}
              type="submit"
            >
              Save Changes
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
  );
};

export default DiseaseList;
