import './signupForm.scss';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import authStore from '../../stores/authStore';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate('/login');
  };
  return (
    <div>
      <h1>Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Business Name</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="text"
            name="name"
            value={store.signupForm.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="email"
            name="email"
            value={store.signupForm.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="password"
            name="password"
            value={store.signupForm.password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="text"
            name="number1"
            value={store.signupForm.number1}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="text"
            name="number2"
            value={store.signupForm.number2}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Building Address</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="text"
            name="building"
            value={store.signupForm.building}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>P O Box</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="text"
            name="pobox"
            value={store.signupForm.pobox}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Street Name</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="text"
            name="street"
            value={store.signupForm.street}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="text"
            name="city"
            value={store.signupForm.city}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Country</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="text"
            name="country"
            value={store.signupForm.country}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Letterhead</Form.Label>
          <Form.Control
            onChange={store.updateSignupForm}
            type="text"
            name="letterhead"
            value={store.signupForm.letterhead}
          />
        </Form.Group>
        {/* <Form.Group className="position-relative mb-3">
          <Form.Label>Letterhead</Form.Label>
          <Form.Control
            type="file"
            required
            name="file"
            onChange={store.updateSignupForm}
            // isInvalid={!!errors.file}
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {/* {errors.file}
          </Form.Control.Feedback>
        </Form.Group> */}

        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
};

export default SignupForm;
