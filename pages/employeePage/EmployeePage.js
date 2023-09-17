import React, { useEffect } from 'react';
import AddEmployee from '../../contents/employees/AddEmployee';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Employees from '../../contents/employees/EmployeeList';
import employeeStore from '../../stores/employeeStore';

const EmployeePage = () => {
  const store = employeeStore();
  useEffect(() => {
    store.getEmployees();
  }, [store]);
  return (
    <div>
      <header className="App-header">
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <h1 className="title">Employee Records</h1>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <AddEmployee />
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <Employees />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmployeePage;
