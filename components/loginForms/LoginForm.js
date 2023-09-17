import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import authStore from '../../stores/authStore';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate('/');
  };
  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={store.updateLoginForm}
            type="email"
            name="email"
            value={store.loginForm.email}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={store.updateLoginForm}
            type="password"
            name="password"
            value={store.loginForm.password}
            placeholder="Password"
          />
        </Form.Group>

        <Button type="submit">Log in</Button>
      </Form>
      <div>
        <h6>Don't have an account</h6>
        <span>
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
