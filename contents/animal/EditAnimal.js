import React from 'react';
import Form from 'react-bootstrap/Form';

const EditAnimal = ({
  updateAnimal,
  handleUpdate,
  updateForm,
  handleCloseModal,
}) => {
  return (
    <div>
      <section className="updateForm">
        <Form
          style={{ display: 'flex', flexWrap: 'wrap' }}
          onSubmit={updateAnimal}
        >
          <fieldset>
            <Form.Group>
              <label htmlFor="">Name</label>
              <input
                name="name"
                onChange={handleUpdate}
                value={updateForm.name}
                type="text"
              />
            </Form.Group>
          </fieldset>
          <fieldset>
            <Form.Group>
              <label htmlFor="">Sex</label>
              <input
                name="sex"
                onChange={handleUpdate}
                value={updateForm.sex}
                type="text"
              />
            </Form.Group>
          </fieldset>
          <fieldset>
            <Form.Group>
              <label htmlFor="">BREED</label>
              <input
                name="breed"
                onChange={handleUpdate}
                value={updateForm.breed}
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
                onChange={handleUpdate}
                value={updateForm.dob}
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
          </fieldset>
          <fieldset>
            <h3>PARENTS</h3>
            <Form.Group>
              <label htmlFor="">Dame</label>
              <input
                name="dame"
                onChange={handleUpdate}
                value={updateForm.dame}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Sire</label>
              <input
                name="sire"
                onChange={handleUpdate}
                value={updateForm.sire}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Granddame</label>
              <input
                name="grandDame"
                onChange={handleUpdate}
                value={updateForm.grandDame}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Grandsire</label>
              <input
                name="grandSire"
                onChange={handleUpdate}
                value={updateForm.grandSire}
                type="text"
              />
            </Form.Group>
          </fieldset>
          <fieldset>
            <label htmlFor="">WEANED AT</label>
            <input
              name="weaning"
              onChange={handleUpdate}
              value={updateForm.weaning}
              type="number"
            />
          </fieldset>
          <fieldset>
            <h3>WEIGHT</h3>
            <Form.Group>
              <label htmlFor="">At Birth</label>
              <input
                name="weightBirth"
                onChange={handleUpdate}
                value={updateForm.weightBirth}
                type="number"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">At Weaning</label>
              <input
                name="weightWean"
                onChange={handleUpdate}
                value={updateForm.weightWean}
                type="number"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">At 8 Weeks</label>
              <input
                name="weight8"
                onChange={handleUpdate}
                value={updateForm.weight8}
                type="number"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Current</label>
              <input
                name="weightCurrent"
                onChange={handleUpdate}
                value={updateForm.weightCurrent}
                type="number"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Sale</label>
              <input
                name="weightSale"
                onChange={handleUpdate}
                value={updateForm.weightSale}
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
                onChange={handleUpdate}
                value={updateForm.firstService}
                type="number"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Number of Services</label>
              <input
                name="totalService"
                onChange={handleUpdate}
                value={updateForm.totalService}
                type="number"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Number of Litters</label>
              <input
                name="totalLitters"
                onChange={handleUpdate}
                value={updateForm.totalLitters}
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
                onChange={handleUpdate}
                value={updateForm.totalKits}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Number of Kits Alive</label>
              <input
                name="aliveKits"
                onChange={handleUpdate}
                value={updateForm.aliveKits}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Number of Kits Dead</label>
              <input
                name="deadKits"
                onChange={handleUpdate}
                value={updateForm.deadKits}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Number Sold</label>
              <input
                name="soldKits"
                onChange={handleUpdate}
                value={updateForm.soldKits}
                type="number"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="">Number Butchered</label>
              <input
                name="butcheredKits"
                onChange={handleUpdate}
                value={updateForm.butcheredKits}
                type="text"
              />
            </Form.Group>
          </fieldset>

          <div>
            <button type="submit">Update</button>
            <button type="button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default EditAnimal;
