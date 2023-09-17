import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import animalStore from '../../stores/store';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './animal.css';

const AddAnimal = () => {
  const store = animalStore();
  const [show, setShow] = useState(false);

  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);
  return (
    <div>
      <button
        onClick={modalShow}
        style={{
          border: 'none',
          borderRadius: '4px',
          backgroundColor: 'rgb(231, 226, 212)',
          padding: '5px',
          margin: '0 auto 5px',
        }}
      >
        Add Animal
      </button>
      <Modal
        show={show}
        onHide={modalClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h1>Add Animal</h1>{' '}
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddAnimal}>
            <div>
              <fieldset>
                <Form.Group>
                  <label htmlFor="">ID</label>
                  <input
                    name="name"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.name}
                    type="text"
                  />
                </Form.Group>
              </fieldset>
              <fieldset>
                <Form.Group>
                  <label htmlFor="">SEX</label>
                  <input
                    name="sex"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.sex}
                    type="text"
                  />
                </Form.Group>
              </fieldset>
              <fieldset>
                <Form.Group>
                  <label htmlFor="">BREED</label>
                  <input
                    name="breed"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.breed}
                    type="text"
                  />
                </Form.Group>
              </fieldset>
              <fieldset>
                {' '}
                <Form.Group>
                  <label htmlFor="">DOB</label>
                  <input
                    name="dob"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.dob}
                    type="date"
                  />
                </Form.Group>
              </fieldset>
              <fieldset>
                <Form.Group>
                  <h3>Animal bred on Farm</h3>
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
              </fieldset>
              <fieldset>
                <h3>PARENTS</h3>
                <Form.Group>
                  <label htmlFor="">Dame</label>
                  <input
                    name="dame"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.dame}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Sire</label>
                  <input
                    name="sire"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.sire}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Granddame</label>
                  <input
                    name="grandDame"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.grandDame}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Grandsire</label>
                  <input
                    name="grandSire"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.grandSire}
                    type="text"
                  />
                </Form.Group>
              </fieldset>
              <fieldset>
                <label htmlFor="">WEANED AT</label>
                <input
                  name="weaning"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.weaning}
                  type="number"
                />
              </fieldset>
              <fieldset>
                <h3>WEIGHT</h3>
                <Form.Group>
                  <label htmlFor="">At Birth</label>
                  <input
                    name="weightBirth"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.weightBirth}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">At Weaning</label>
                  <input
                    name="weightWean"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.weightWean}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">At 8 Weeks</label>
                  <input
                    name="weight8"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.weight8}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Current</label>
                  <input
                    name="weightCurrent"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.weightCurrent}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Sale</label>
                  <input
                    name="weightSale"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.weightSale}
                    type="number"
                  />
                </Form.Group>
              </fieldset>
              <fieldset>
                <h3>FERTILITY</h3>
                <Form.Group>
                  <label htmlFor="">Age at First Service</label>
                  <input
                    name="firstService"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.firstService}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number of Services</label>
                  <input
                    name="totalService"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.totalService}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number of Litters</label>
                  <input
                    name="totalLitters"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.totalLitters}
                    type="number"
                  />
                </Form.Group>
              </fieldset>
              <fieldset>
                <h3>LITTER</h3>
                <Form.Group>
                  <label htmlFor="">Number of Kits</label>
                  <input
                    name="totalKits"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.totalKits}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number of Kits Alive</label>
                  <input
                    name="aliveKits"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.aliveKits}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number of Kits Dead</label>
                  <input
                    name="deadKits"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.deadKits}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number Sold</label>
                  <input
                    name="soldKits"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.soldKits}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number Butchered</label>
                  <input
                    name="butcheredKits"
                    onChange={store.updateCreateAnimals}
                    value={store.createAnimal.butcheredKits}
                    type="text"
                  />
                </Form.Group>
              </fieldset>
            </div>
            <div>
              <button
                style={{
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: 'rgb(231, 226, 212)',
                  padding: '5px',
                  margin: '0 auto 5px',
                }}
                type="submit"
              >
                Add
              </button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={modalClose}>
            footerCancel
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddAnimal;
