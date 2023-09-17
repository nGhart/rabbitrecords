import React from 'react';
import Container from 'react-bootstrap/Container';
import AddTransaction from '../../contents/transaction/AddTransaction';
import Transactions from '../../contents/transaction/Transactions';

const HomePage = () => {
  return (
    <div className="transactionSection" style={{ position: 'relative' }}>
      <Container style={{ marginTop: '50px', position: 'absolute' }}>
        <AddTransaction />
        <Transactions />
      </Container>
    </div>
  );
};

export default HomePage;
