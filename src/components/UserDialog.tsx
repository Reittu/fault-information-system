import React, { useState, SyntheticEvent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDialog } from '../actions';
import { RootState } from '../reducers';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '15px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const handleSetup = () => undefined;

export default function UserDialog() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDialog = useSelector((state: RootState) => state.userDialog);

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');

  // At least one number, lower case, upper case and a special character. Min length 8, max 255.
  const passwordValidator = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$^*.[\]{}()?'"!@#%&/\\,><:;|_~`]).{8,255}/;
  const pwPattern = passwordValidator.toString().slice(1, -1);
  const invalidPwMessage = 'Password should be at least 8 characters long and have at least one lower case, upper case, special character and a number.';

  const handleClose = () => dispatch(setUserDialog({ ...userDialog, open: false }));
  const switchToRegister = () => dispatch(setUserDialog({ mode: 'register', open: true }));
  const switchToLogin = () => dispatch(setUserDialog({ mode: 'login', open: true }));
  const switchToForgot = () => dispatch(setUserDialog({ mode: 'forgot', open: true }));
  const switchToLogout = () => dispatch(setUserDialog({ mode: 'logout', open: true }));

  const handleRegister = (e: SyntheticEvent) => {
    // TODO
    e.preventDefault();
    switchToLogin();
  };

  const handleLogin = (e: SyntheticEvent) => {
    // TODO
    e.preventDefault();
    switchToLogout();
  };

  const handleForgot = (e: SyntheticEvent) => {
    // TODO
    e.preventDefault();
    switchToLogin();
  };

  const handleLogout = () => {
    // TODO
    switchToLogin();
  };

  const renderContent = () => {
    if (userDialog.mode === 'register') return registerContent();
    else if (userDialog.mode === 'login') return loginContent();
    else if (userDialog.mode === 'forgot') return forgotContent();
    else if (userDialog.mode === 'logout') return logoutContent();
  };

  const registerContent = () => (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form id="register-form" className={classes.form} onSubmit={handleRegister} autoComplete="off">
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Full Name"
          name="name"
          id="register-name"
          autoFocus
          autoComplete="name"
          inputProps={{ minLength: 5, maxLength: 70 }}
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Username"
          name="username"
          id="register-username"
          autoComplete="username"
          inputProps={{ minLength: 3, maxLength: 50 }}
          value={registerUsername}
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email Address"
          type="email"
          id="register-email"
          autoComplete="email"
          inputProps={{ minLength: 5, maxLength: 255 }}
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="register-password"
          autoComplete="new-password"
          inputProps={{ pattern: pwPattern, title: invalidPwMessage }}
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
      </form>
      <Button onClick={switchToLogin} fullWidth variant="outlined" color="primary">
        Cancel
      </Button>
      <Grid container justify="flex-end" style={{ marginTop: '16px' }}>
        <Grid item>
          <Link href="#" variant="body2" onClick={switchToLogin}>
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </>
  );

  const loginContent = () => (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form id="login-form" className={classes.form} onSubmit={handleLogin}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="username"
          label="Username"
          id="login-username"
          autoComplete="username"
          autoFocus
          inputProps={{ minLength: 3, maxLength: 50 }}
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="login-password"
          autoComplete="current-password"
          inputProps={{ pattern: pwPattern, title: invalidPwMessage }}
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
      </form>
      <Button onClick={handleClose} fullWidth variant="outlined" color="primary">
        Cancel
      </Button>
      <Grid container style={{ marginTop: '16px' }}>
        <Grid item xs>
          <Link href="#" variant="body2" onClick={switchToForgot}>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2" onClick={switchToRegister}>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </>
  );

  const logoutContent = () => (
    <>
      <Avatar className={classes.avatar}>
        <PermIdentityOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Welcome back, user! (ph)
      </Typography>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleLogout}
      >
        Logout
      </Button>
      <Button onClick={handleClose} fullWidth variant="outlined" color="primary">
        Cancel
      </Button>
    </>
  );

  const forgotContent = () => (
    <>
      <Avatar className={classes.avatar}>
        <LockOpenOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Placeholder for forgot password
      </Typography>
      <form id="forgot-form" className={classes.form} onSubmit={handleForgot}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email Address"
          type="email"
          id="forgot-email"
          autoComplete="email"
          autoFocus
          value={forgotEmail}
          onChange={(e) => setForgotEmail(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Send reset confirmation
        </Button>
      </form>
      <Button onClick={switchToLogin} fullWidth variant="outlined" color="primary">
        Cancel
      </Button>
    </>
  );

  return (
    <Dialog
      onEnter={handleSetup}
      open={userDialog.open}
      onClose={() => handleClose()}
      aria-labelledby="form-dialog-title"
    >
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>{renderContent()}</div>
      </Container>
    </Dialog>
  );
}
