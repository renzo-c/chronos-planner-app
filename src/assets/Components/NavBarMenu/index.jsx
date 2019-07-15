import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import SignOutButton from '../../../components/SignOut';
import style from '../../../styles/NavBarMenu';
import { AuthUserContext } from '../../../components/Session';

const NavBarMenu = () => {
  return (
    <>
      <AuthUserContext.Consumer>
        {authUser => {
          console.log('authUser', authUser);
          return authUser ? <NavBarMenuAuth /> : <NavBarMenuNonAuth />;
        }}
      </AuthUserContext.Consumer>
    </>
  );
};

export default NavBarMenu;

const NavBarMenuNonAuth = () => (
  <AppBar position="static">
    <Toolbar>
      <Link className={style.tabs} to={ROUTES.LANDING}>
        <Button color="inherit">LANDING</Button>
      </Link>
      <div className={style.spaceBetween} />
      <Link className={style.tabs} to={ROUTES.SIGN_IN}>
        <Button color="inherit">SIGN IN</Button>
      </Link>
      <Link className={style.tabs} to={ROUTES.SIGN_UP}>
        <Button color="inherit">SIGN UP</Button>
      </Link>
    </Toolbar>
  </AppBar>
);

const NavBarMenuAuth = () => (
  <AppBar position="static">
    <Toolbar>
      <Link className={style.tabs} to={ROUTES.LANDING}>
        <Button color="inherit">LANDING</Button>
      </Link>
      <Link className={style.tabs} to={ROUTES.HOME}>
        <Button color="inherit">HOME</Button>
      </Link>
      <Link className={style.tabs} to={ROUTES.EMPLOYEE}>
        <Button color="inherit">EMPLOYEE</Button>
      </Link>
      <Link className={style.tabs} to={ROUTES.SCHEDULE}>
        <Button color="inherit">SCHEDULE</Button>
      </Link>
      <Link className={style.tabs} to={ROUTES.ATTENDANCE}>
        <Button color="inherit">ATTENDANCE</Button>
      </Link>
      <div className={style.spaceBetween} />
      <Link className={style.tabs} to={ROUTES.ACCOUNT}>
        <Button color="inherit">ACCOUNT</Button>
      </Link>
      <SignOutButton className={style.tabs} />
    </Toolbar>
  </AppBar>
);
