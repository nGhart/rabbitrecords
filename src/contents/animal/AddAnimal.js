import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import animalStore from '../../stores/store';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './animal.css';

const AddAnimal = () => {
  const store = animalStore();
  const [show, setShow] = useState(false);

  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);
  return (
    <div>
      <button className="addButtons" onClick={modalShow}>
        Add Animal
      </button>
      <Modal
        show={show}
        onHide={modalClose}
        backdrop="static"
        scrollable={true}
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="headerMod">
          <h4>Add Animal</h4>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddAnimal}>
            <Container>
              <Row style={{ display: 'flex' }}>
                <h6>DETAILS</h6>

                <Row>
                  <Form.Group className="mb-1 jBetween">
                    <Form.Label htmlFor="">ID *</Form.Label>
                    <Form.Control
                      className="fif"
                      required
                      name="name"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.name}
                      type="text"
                    />
                  </Form.Group>

                  <Form.Group className="mb-1 jBetween">
                    <Form.Label>SEX *</Form.Label>
                    <Form.Select
                      className="fif"
                      aria-label="SEX"
                      name="sex"
                      required
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.sex}
                      type="text"
                    >
                      <option>Pick gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-1 jBetween">
                    <Form.Label htmlFor="">BREED</Form.Label>
                    <Form.Control
                      className="fif"
                      name="breed"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.breed}
                      type="text"
                    />
                  </Form.Group>

                  <Form.Group className="mb-1 jBetween">
                    <Form.Label htmlFor="">DOB *</Form.Label>
                    <Form.Control
                      className="fif"
                      name="dob"
                      required
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.dob}
                      type="date"
                    />
                  </Form.Group>

                  <Form.Group className="mb-1 jBetween">
                    <h6>SOURCE</h6>
                    <Form.Check
                      inline
                      label="Bred on Farm"
                      name="bred"
                      type="radio"
                      id="bred"
                      onChange={store.updateCreateAnimals}
                      value="Bred on Farm"
                      checked={store.createAnimal.bred === 'Bred on Farm'}
                    />
                    <Form.Check
                      inline
                      label="Purchased"
                      name="bred"
                      type="radio"
                      id="purchased"
                      value="Purchased"
                      checked={store.createAnimal.bred === 'Purchased'}
                      onChange={store.updateCreateAnimals}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-1 jBetween">
                  <Form.Label>STATUS</Form.Label>
                  <Form.Select
                    className="fif"
                    aria-label="STATUS"
                    name="status"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.status}
                    type="text"
                  >
                    <option>Pick status</option>
                    <option value="Available">Available</option>
                    <option value="Sold">Sold</option>
                    <option value="Dead">Dead</option>
                  </Form.Select>
                </Form.Group>

                <h6>PARENTS</h6>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Dam *</Form.Label>
                  <Form.Control
                    className="fif"
                    name="dame"
                    required
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.dame}
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Sire *</Form.Label>
                  <Form.Control
                    className="fif"
                    name="sire"
                    required
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.sire}
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Granddam</Form.Label>
                  <Form.Control
                    className="fif"
                    name="grandDame"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.grandDame}
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Grandsire</Form.Label>
                  <Form.Control
                    className="fif"
                    name="grandSire"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.grandSire}
                    type="text"
                  />
                </Form.Group>

                <h6>WEIGHT</h6>

                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Current</Form.Label>
                  <Form.Control
                    className="fif"
                    name="weightCurrent"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.weightCurrent}
                    type="number"
                  />
                </Form.Group>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Sale</Form.Label>
                  <Form.Control
                    className="fif"
                    name="weightSale"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.weightSale}
                    type="number"
                  />
                </Form.Group>

                <h6>FERTILITY</h6>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Number of Services</Form.Label>
                  <Form.Control
                    className="fif"
                    name="totalService"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.totalService}
                    type="number"
                  />
                </Form.Group>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Number of Litters</Form.Label>
                  <Form.Control
                    className="fif"
                    name="totalLitters"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.totalLitters}
                    type="number"
                  />
                </Form.Group>

                <h6>LITTER</h6>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Number of Kits</Form.Label>
                  <Form.Control
                    className="fif"
                    name="totalKits"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.totalKits}
                    type="number"
                  />
                </Form.Group>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Number of Kits Alive</Form.Label>
                  <Form.Control
                    className="fif"
                    name="aliveKits"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.aliveKits}
                    type="number"
                  />
                </Form.Group>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Number of Kits Dead</Form.Label>
                  <Form.Control
                    className="fif"
                    name="deadKits"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.deadKits}
                    type="number"
                  />
                </Form.Group>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Number Sold</Form.Label>
                  <Form.Control
                    className="fif"
                    name="soldKits"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.soldKits}
                    type="number"
                  />
                </Form.Group>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Number Butchered</Form.Label>
                  <Form.Control
                    className="fif"
                    name="butcheredKits"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.butcheredKits}
                    type="number"
                  />
                </Form.Group>

                <div className="formButtonsContainer">
                  <button className="formButtons" type="submit">
                    Add
                  </button>
                  <button
                    type="buttons"
                    className="formButtons"
                    onClick={modalClose}
                  >
                    Close
                  </button>
                </div>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddAnimal;
