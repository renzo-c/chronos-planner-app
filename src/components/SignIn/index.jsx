import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './signInForm';
import { SignUpLink } from '../SignUp';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

export default SignInPage;
