import React, { useEffect } from 'react';
import authStore from '../../stores/authStore';
import { Link } from 'react-router-dom';
import './logoutPage.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LogoutPage = () => {
  const store = authStore();
  useEffect(() => {
    store.logout();
  }, [store]);
  return (
    <div fluid className="logoutSection">
      {/* <Row> */}
      <div
        // xs={{ span: 10, offset: 1 }}
        className="logoutContainer"
      >
        <h1 className="font5">Rabbit Records</h1>

        <h3>You are now logged out</h3>

        <Link to="/login">
          <button className="formButtons">Log in</button>
        </Link>
      </div>
      {/* </Row> */}
    </div>
  );
};

export default LogoutPage;
