import React from 'react';
import { withAuthorization } from '../Session';
// import './style.css';

const Home = () => (
  <>
    <div id="backgroundHome" />
    This is the Home page
  </>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);
