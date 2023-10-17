import LoginForm from '../../components/loginForms/LoginForm';
import './login.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Login = () => {
  return (
    <div className="startPage">
      {/* <Row> */}
      <div xs={12} md={8} className="startImage">
        <h1 className="font5">Rabbit Records</h1>
        <span>
          <a href="https://unsplash.com/@shichijiro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Wei Fukuyama
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/Rr9K_FR-0-w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
      <div
        xs={12}
        sm={{ span: 6, offset: 3 }}
        md={4}
        lg={4}
        className="startForm font1"
      >
        <h1 className="font2">Log in</h1>
        <LoginForm />
      </div>
      {/* </Row> */}
    </div>
  );
};

export default Login;
