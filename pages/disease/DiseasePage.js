import React, { useEffect } from 'react';
import AddDisease from '../../contents/disease/AddDisease';
import Diseases from '../../contents/disease/Diseases';
import diseaseStore from '../../stores/diseaseStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const DiseasePage = () => {
  const store = diseaseStore();

  useEffect(() => {
    store.getDiseases();
  }, [store]);
  return (
    <div>
      <Navbar className="headerNav">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="title">Diseases</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AddDisease />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Diseases />
      </div>
    </div>
  );
};

export default DiseasePage;
