import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import vaccinationStore from '../stores/vaccinationStore';

const VaccinationSummary = () => {
  const store = vaccinationStore();
  const [recentVaccinations, setRecentVaccinations] = useState([]);
  useEffect(() => {
    store.getVaccinations();
  }, [store]);

  useEffect(() => {
    const vacc = (store.vaccinations || [])
      .filter((item) => item.status === 'Pending')
      .slice(-3);
    setRecentVaccinations(vacc);
  }, [store.vaccinations]);

  function calculateRemainder(originalDate, daysToAdd) {
    const date = new Date(originalDate);
    date.setDate(date.getDate() + daysToAdd);
    const today = new Date();
    const differenceInMilliseconds = date - today;
    const remainder = Math.ceil(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    return remainder;
  }
  return (
    <Container>
      <Row>
        <h3 className="font2">Upcoming Vaccinations</h3>
      </Row>
      <Row>
        <Stack className="font1" gap={2}>
          {recentVaccinations &&
            recentVaccinations.map((item) => {
              return (
                <div className="p-2 homeBack around" key={item._id}>
                  <span>{item.medication}</span>{' '}
                  <span>
                    Due In: {calculateRemainder(item.date, item.nextDate)} days
                  </span>
                </div>
              );
            })}
        </Stack>
      </Row>
    </Container>
  );
};

export default VaccinationSummary;
