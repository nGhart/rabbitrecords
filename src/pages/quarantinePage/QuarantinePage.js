import React, { useEffect } from 'react';
import AddQuarantine from '../../contents/quarantine/AddQuarantine';
import Quarantines from '../../contents/quarantine/Quarantines';
import quarantineStore from '../../stores/quarantineStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const QuarantinePage = () => {
  const store = quarantineStore();

  useEffect(() => {
    store.getQuarantines();
  }, [store]);
  return (
    <div>
      <Navbar className="headerNav">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="title">Quarantine Records</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AddQuarantine />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ marginTop: '10px' }}>
        <Row>
          <div>
            <Quarantines />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default QuarantinePage;
