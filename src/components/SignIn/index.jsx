import React from 'react';
// import { Link } from 'react-router-dom';
import SignInForm from './signInForm';
// import { SignUpLink } from '../SignUp';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './style.css';

const MadeBy = () => {
  return (
    <Typography
      variant="body2"
      color="textPrimary"
      align="center"
      className="alignFooter"
    >
      {'Built by  '}
      <Link
        color="primary"
        href="https://www.linkedin.com/in/renzo-navarro-29a83528/"
        target="_blank"
      >
        Renzo Navarro
      </Link>
    </Typography>
  );
};

const SignInPage = () => (
  <>
    <div id="backgroundLogin"> </div>
    <br />
    <SignInForm />
    <MadeBy />
    {/* <SignUpLink /> */}
  </>
);

export default SignInPage;
