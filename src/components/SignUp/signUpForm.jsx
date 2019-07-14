import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MaterialLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import Firebase, { withFirebase } from '../Firebase';
import PropTypes from 'prop-types';
import * as ROUTES from '../../constants/routes';

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(' + require('../../assets/images/sign-up-background.jpg') + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  marginForGrid: {
    marginTop: '0.4em',
  },
  footer: {
    backgroundColor: "rgba(0,0,0,0.1)"
  }
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  static propTypes = {
    firebase: PropTypes.instanceOf(Firebase).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const { firebase, history } = this.props;
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          className={classes.marginForGrid}
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} onSubmit={this.onSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Full Name"
                name="username"
                value={username}
                onChange={this.onChange}
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={this.onChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="passwordOne"
                label="Password"
                type="password"
                id="password"
                value={passwordOne}
                onChange={this.onChange}
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="passwordTwo"
                label="Confirm Password"
                type="password"
                id="password2"
                value={passwordTwo}
                onChange={this.onChange}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isInvalid}
              >
                Sign Up
              </Button>
              {error && <p>{error.message}</p>}

              <Grid container>
                <Grid item xs>
                  <MaterialLink href="#" variant="body2">
                    Forgot password?
                  </MaterialLink>
                </Grid>
                <Grid item>
                  <MaterialLink
                    component={Link}
                    to={ROUTES.SIGN_IN}
                    variant="body2"
                  >
                    Already have an account? Sign In
                  </MaterialLink>
                </Grid>
              </Grid>
              <Box mt={5} />
              <Typography
                variant="body2"
                color="textPrimary"
                align="center"
                className={classes.footer}
              >
                {'Built by  '}
                <MaterialLink
                  color="primary"
                  href="https://www.linkedin.com/in/renzo-navarro-29a83528/"
                  target="_blank"
                >
                  Renzo Navarro
                </MaterialLink>
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withFirebase(withStyles(styles)(SignUpForm)));
