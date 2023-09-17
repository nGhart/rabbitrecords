import React from 'react';
import SignupForm from './SignupForm';
import './signup.scss';

const SignupPage = () => {
  return (
    <div className="startPage">
      <div className="startImage">hi</div>
      <div className="startForm">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
