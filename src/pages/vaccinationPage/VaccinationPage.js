import React, { useEffect } from 'react';
import AddVaccination from '../../contents/vaccination/AddVaccination';
import Vaccinations from '../../contents/vaccination/Vaccinations';
import vaccinationStore from '../../stores/vaccinationStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const VaccinationPage = () => {
  const store = vaccinationStore();

  useEffect(() => {
    store.getVaccinations();
  }, [store]);
  return (
    <div>
      <Navbar className="headerNav">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="title">Disease Prevention Records</h1>{' '}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AddVaccination />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ marginTop: '10px' }}>
        <Row>
          <div>
            <Vaccinations />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default VaccinationPage;
