import React, { useEffect } from 'react';
import AddMed from '../../contents/medication/AddMed';
import Meds from '../../contents/medication/Meds';
import medStore from '../../stores/medStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MedPage = () => {
  const store = medStore();

  useEffect(() => {
    store.getMeds();
  }, [store]);
  return (
    <div>
      <Navbar className="headerNav">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="title">Medication Stock</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AddMed />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="tableContainer">
        <Meds />
      </div>
    </div>
  );
};

export default MedPage;
