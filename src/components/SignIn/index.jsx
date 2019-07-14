import React from 'react';
import SignInForm from './signInForm';
import MadeBy from './madeBy';
import './style.css';

const SignInPage = () => (
  <>
    <div id="backgroundLogin"> </div>
    <br />
    <SignInForm />
    <MadeBy />
  </>
);

export default SignInPage;
export { MadeBy };
