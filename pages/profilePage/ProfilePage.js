import React, { useEffect } from 'react';
import AddProfile from '../../components/profile/AddProfile';
import Profiles from '../../components/profile/Profiles';
import profileStore from '../../stores/profileStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const ProfilePage = () => {
  const store = profileStore();

  useEffect(() => {
    store.getProfiles();
  }, [store]);

  return (
    <div style={{ width: '100%' }}>
      <Navbar className="headerNav">
        <Container>
          <Navbar.Brand>
            <h1 className="title">Profile</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AddProfile />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Profiles />
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
