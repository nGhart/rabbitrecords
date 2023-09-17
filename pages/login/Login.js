import LoginForm from '../../components/loginForms/LoginForm';
import './login.scss';

const Login = () => {
  return (
    <div className="startPage">
      <div className="startImage">hi</div>
      <div className="startForm">
        <h1>Log in</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
