import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Employee from '../Employee';
import Schedule from '../Schedule';
import Attendance from '../Attendance';
import * as ROUTES from '../../constants/routes';
import NavBarMenu from '../../assets/Components/NavBarMenu';
import { withAuthentication } from '../Session/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBarMenu />
          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.EMPLOYEE} component={Employee} />
          <Route path={ROUTES.SCHEDULE} component={Schedule} />
          <Route path={ROUTES.ATTENDANCE} component={Attendance} />
        </div>
      </Router>
    );
  }
}

export default withAuthentication(App);
