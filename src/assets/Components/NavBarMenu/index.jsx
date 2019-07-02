import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import SignOutButton from '../../../components/SignOut';
import '../../../styles/navBarMenu.css';

const NavBarMenu = ({ authUser }) => {
  console.log('authUser', authUser);
  return <>{authUser ? <NavBarMenuAuth /> : <NavBarMenuNonAuth />}</>;
};

export default NavBarMenu;

const NavBarMenuNonAuth = () => (
  <AppBar position="static">
    <Toolbar>
      <Link className="tabs" to={ROUTES.LANDING}>
        <Button color="inherit">LANDING</Button>
      </Link>
      <div className="spaceBetween" />
      <Link className="tabs" to={ROUTES.SIGN_IN}>
        <Button color="inherit">SIGN IN</Button>
      </Link>
      <Link className="tabs" to={ROUTES.SIGN_UP}>
        <Button color="inherit">SIGN UP</Button>
      </Link>
    </Toolbar>
  </AppBar>
);

const NavBarMenuAuth = () => (
  <AppBar position="static">
    <Toolbar>
      <Link className="tabs" to={ROUTES.LANDING}>
        <Button color="inherit">LANDING</Button>
      </Link>
      <Link className="tabs" to={ROUTES.HOME}>
        <Button color="inherit">HOME</Button>
      </Link>
      <Link className="tabs" to={ROUTES.ACCOUNT}>
        <Button color="inherit">ACCOUNT</Button>
      </Link>
      <Link className="tabs" to={ROUTES.EMPLOYEE}>
        <Button color="inherit">EMPLOYEE</Button>
      </Link>
      <div className="spaceBetween" />
      <SignOutButton className="tabs"/>
    </Toolbar>
  </AppBar>
);

