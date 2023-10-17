import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import animalStore from '../stores/store';

const AnimalSummary = () => {
  const store = animalStore();
  const [weight, setWeight] = useState([]);
  const [doe, setDoe] = useState([]);
  const [buck, setBuck] = useState([]);

  useEffect(() => {
    store.getAnimals();
  }, [store.animals]);

  function getAge(dob) {
    const birthD = new Date(dob);
    const today = new Date();
    const dif = today - birthD;
    const age = Math.floor(dif / (1000 * 60 * 60 * 24 * 7));
    return age;
  }
  useEffect(() => {
    const filterWeight = (store.animals || []).filter(
      (item) => item.status === 'Available' && item.weightCurrent >= 2
    );
    setWeight(filterWeight);
  }, [store.animals]);

  useEffect(() => {
    const filterDoe = (store.animals || []).filter(
      (item) =>
        item.status === 'Available' &&
        item.sex === 'Female' &&
        getAge(item.dob) >= 24
    );
    setDoe(filterDoe);
  }, [store.animals]);

  useEffect(() => {
    const filterBuck = (store.animals || []).filter(
      (item) =>
        item.status === 'Available' &&
        item.sex === 'Male' &&
        getAge(item.dob) >= 28
    );
    setBuck(filterBuck);
  }, [store.animals]);

  return (
    <Container style={{ padding: '2px' }}>
      <h3 className="font2">Animal Summary</h3>

      <Row>
        <Col>
          <h5 className="font1">Above 2kg:</h5>
          <div className="flex" style={{ margin: 'auto' }}>
            <span
              className="homeBack flex"
              style={{
                width: '60px',
                height: '60px',
                fontSize: '20px',
                borderRadius: '50%',
              }}
            >
              {weight.length}
            </span>
          </div>
        </Col>
        <Col>
          <h5 className="font1">Does:</h5>
          <div className="flex" style={{ margin: 'auto' }}>
            <span
              className="homeBack flex"
              style={{
                width: '60px',
                fontSize: '20px',
                height: '60px',
                borderRadius: '50%',
              }}
            >
              {doe.length}
            </span>
          </div>
        </Col>
        <Col>
          <h5 className="font1">Bucks:</h5>
          <div className="flex" style={{ margin: 'auto' }}>
            <span
              className="homeBack flex"
              style={{
                width: '60px',
                fontSize: '20px',
                height: '60px',
                borderRadius: '50%',
              }}
            >
              {buck.length}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AnimalSummary;
