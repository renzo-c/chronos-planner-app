import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './signUpForm';
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import signUpForm from './signUpForm';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const SignUpLink = () => (
  <p>
    Don&apos;t have an account?
    <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;
export { SignUpForm, SignUpLink };
