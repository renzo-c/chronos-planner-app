import React from 'react';
import { withAuthorization } from '../Session';
// import SlideBarMenu from '../../assets/Components/SlideBarMenu/index';
import '../../styles/constantStyle.css';

const Home = () => (
  <div className="bodyHome">
    This is the Home page
    {/* <SlideBarMenu /> */}
  </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);
