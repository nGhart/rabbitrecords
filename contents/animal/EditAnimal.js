import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const EditAnimal = ({
  updateAnimal,
  handleUpdate,
  updateForm,
  handleCloseModal,
}) => {
  return (
    <div>
      <section className="updateForm">
        <Form onSubmit={updateAnimal}>
          <Container>
            <Row style={{ display: 'flex' }}>
              <h6>DETAILS</h6>

              <Row>
                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">ID *</Form.Label>
                  <Form.Control
                    className="fif"
                    name="name"
                    onChange={handleUpdate}
                    value={updateForm.name}
                    type="text"
                    autoFocus
                  />
                </Form.Group>

                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Sex *</Form.Label>
                  <Form.Select
                    aria-label="SEX"
                    className="fif"
                    name="sex"
                    onChange={handleUpdate}
                    value={updateForm.sex}
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
                    onChange={handleUpdate}
                    value={updateForm.breed}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">DOB *</Form.Label>
                  <Form.Control
                    className="fif"
                    name="dob"
                    onChange={handleUpdate}
                    value={updateForm.dob}
                    type="date"
                  />
                </Form.Group>

                <Form.Group className="mb-1 jBetween">
                  <h6>Source</h6>
                  <Form.Check
                    inline
                    label="Bred on Farm"
                    name="bred"
                    type="radio"
                    id="bred"
                    onChange={handleUpdate}
                    value="Bred on Farm"
                    checked={updateForm.bred === 'Bred on Farm'}
                  />
                  <Form.Check
                    inline
                    label="Purchased"
                    name="bred"
                    type="radio"
                    id="purchased"
                    value="Purchased"
                    checked={updateForm.bred === 'Purchased'}
                    onChange={handleUpdate}
                  />
                </Form.Group>

                <Form.Group className="mb-1 jBetween">
                  <Form.Label htmlFor="">Status</Form.Label>
                  <Form.Select
                    className="fif"
                    aria-label="status"
                    name="status"
                    onChange={handleUpdate}
                    value={updateForm.status}
                    type="text"
                  >
                    <option>Pick status</option>
                    <option value="Available">Available</option>
                    <option value="Sold">Sold</option>
                    <option value="Dead">Dead</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <h6>PARENTS</h6>
              <Form.Group className="mb-1 jBetween">
                <Form.Label htmlFor="">Dam *</Form.Label>
                <Form.Control
                  className="fif"
                  name="dame"
                  onChange={handleUpdate}
                  value={updateForm.dame}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-1 jBetween">
                <Form.Label htmlFor="">Sire *</Form.Label>
                <Form.Control
                  className="fif"
                  name="sire"
                  onChange={handleUpdate}
                  value={updateForm.sire}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-1 jBetween">
                <Form.Label htmlFor="">Granddam</Form.Label>
                <Form.Control
                  className="fif"
                  name="grandDame"
                  onChange={handleUpdate}
                  value={updateForm.grandDame}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-1 jBetween">
                <Form.Label htmlFor="">Grandsire</Form.Label>
                <Form.Control
                  className="fif"
                  name="grandSire"
                  onChange={handleUpdate}
                  value={updateForm.grandSire}
                  type="text"
                />
              </Form.Group>

              <h6>WEIGHT</h6>

              <Form.Group className="mb-1 jBetween">
                <label htmlFor="">Current</label>
                <Form.Control
                  className="fif"
                  name="weightCurrent"
                  onChange={handleUpdate}
                  value={updateForm.weightCurrent}
                  type="number"
                />
              </Form.Group>
              <Form.Group className="mb-1 jBetween">
                <label htmlFor="">Sale</label>
                <Form.Control
                  className="fif"
                  name="weightSale"
                  onChange={handleUpdate}
                  value={updateForm.weightSale}
                  type="number"
                />
              </Form.Group>

              <h6>FERTILITY</h6>

              <Form.Group className="mb-1 jBetween">
                <label htmlFor="">Number of Services</label>
                <Form.Control
                  className="fif"
                  name="totalService"
                  onChange={handleUpdate}
                  value={updateForm.totalService}
                  type="number"
                />
              </Form.Group>
              <Form.Group className="mb-1 jBetween">
                <label htmlFor="">Number of Litters</label>
                <Form.Control
                  className="fif"
                  name="totalLitters"
                  onChange={handleUpdate}
                  value={updateForm.totalLitters}
                  type="number"
                />
              </Form.Group>

              <h6>LITTER</h6>
              <Form.Group className="mb-1 jBetween">
                <label htmlFor="">Number of Kits</label>
                <Form.Control
                  className="fif"
                  name="totalKits"
                  onChange={handleUpdate}
                  value={updateForm.totalKits}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-1 jBetween">
                <label htmlFor="">Number of Kits Alive</label>
                <Form.Control
                  className="fif"
                  name="aliveKits"
                  onChange={handleUpdate}
                  value={updateForm.aliveKits}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-1 jBetween">
                <label htmlFor="">Number of Kits Dead</label>
                <Form.Control
                  className="fif"
                  name="deadKits"
                  onChange={handleUpdate}
                  value={updateForm.deadKits}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-1 jBetween">
                <label htmlFor="">Number Sold</label>
                <Form.Control
                  className="fif"
                  name="soldKits"
                  onChange={handleUpdate}
                  value={updateForm.soldKits}
                  type="number"
                />
              </Form.Group>
              <Form.Group className="mb-1 jBetween">
                <label htmlFor="">Number Butchered</label>
                <Form.Control
                  className="fif"
                  name="butcheredKits"
                  onChange={handleUpdate}
                  value={updateForm.butcheredKits}
                  type="text"
                />
              </Form.Group>

              <div className="formButtonsContainer">
                <button className="formButtons" type="submit">
                  Update
                </button>
                <button
                  className="formButtons"
                  type="button"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </Row>
          </Container>
        </Form>
      </section>
    </div>
  );
};

export default EditAnimal;
