import React from 'react';
import SignUpForm from './signUpForm';
import './style.css';

const SignUpPage = () => (
  <>
    <div className="containerSelector">
      <SignUpForm />
    </div>
  </>
);

export default SignUpPage;
export { SignUpForm };
