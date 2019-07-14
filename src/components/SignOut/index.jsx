import React from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from '@material-ui/core/Button';

const handleSignOut = (firebase, history) => {
  firebase.doSignOut();
  history.push(ROUTES.SIGN_IN);
};

const SignOutButton = ({ firebase, history }) => (
  <Button
    onClick={() => handleSignOut(firebase, history)}
    style={{ color: 'white' }}
  >
    Sign Out
  </Button>
);

export default withRouter(withFirebase(SignOutButton));
