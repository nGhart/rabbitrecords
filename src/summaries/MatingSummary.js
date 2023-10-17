import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import matingStore from '../stores/matingStore';

const MatingSummary = () => {
  const store = matingStore();

  const [recentMatings, setRecentMatings] = useState([]);
  useEffect(() => {
    store.getMatings();
  }, [store]);
  useEffect(() => {
    const mate = (store.matings || [])
      .filter((item) => item.status === 'Pending')
      .slice(-7);
    setRecentMatings(mate);
  }, [store.matings]);

  // function addDaysToDate(originalDate, daysToAdd) {
  //   const date = new Date(originalDate);
  //   date.setDate(date.getDate() + daysToAdd);
  //   const year = date.getUTCFullYear();
  //   const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  //   const day = String(date.getUTCDate()).padStart(2, '0');
  //   const formattedDate = `${year}-${month}-${day}`;
  //   return formattedDate;
  // }
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
    <div>
      <Container style={{ textAlign: 'center' }}>
        <h3 className="font2">Nesting Dates</h3>
        <Stack gap={2} className="font1">
          {recentMatings &&
            recentMatings.map((item, index) => {
              return (
                <div className="p-2 homeBack around" key={index}>
                  <span>ID: {item.matingDoe}</span>{' '}
                  {/* <span>Nesting In: {addDaysToDate(item.matingDate2, 28)}</span> */}
                  <span>
                    Nesting In: {calculateRemainder(item.matingDate2, 28)} days
                  </span>
                </div>
              );
            })}
        </Stack>
      </Container>
    </div>
  );
};

export default MatingSummary;
