import React from 'react';
import { withFirebase } from '../Firebase';
import Button from '@material-ui/core/Button';

const SignOutButton = ({ firebase }) => (
  <Button onClick={firebase.doSignOut} style={{color:"white"}}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
