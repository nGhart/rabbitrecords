import React, { useEffect } from 'react';
import AddMating from '../../contents/matings/AddMating';
import Matings from '../../contents/matings/Matings';
import matingStore from '../../stores/matingStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const MatingPage = () => {
  const store = matingStore();

  useEffect(() => {
    store.getMatings();
  }, [store]);
  return (
    <div>
      <header className="App-header">
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="title">Matings</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddMating />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container style={{ marginTop: '10px' }}>
        <Row>
          <div>
            <Matings />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MatingPage;
