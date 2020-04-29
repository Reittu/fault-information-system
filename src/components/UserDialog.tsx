import React, { useState, useEffect, SyntheticEvent } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { setUserDialog, setUser } from '../actions';
import { RootState } from '../reducers';
import { snackbarMessage } from '../utils/snackbar';
import { passwordPattern, invalidPasswordMessage } from '../utils/validation';
import { usePaperDialogStyles } from '../utils/dialogs';
import PromptDialog from './PromptDialog';
import Auth from '@aws-amplify/auth';

export default function UserDialog() {
  const classes = usePaperDialogStyles();
  const dispatch = useDispatch();
  const userDialog = useSelector((state: RootState) => state.userDialog);
  const user = useSelector((state: RootState) => state.user);

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [forgotUsername, setForgotUsername] = useState('');
  const [promptDialog, setPromptDialog] = useState({ open: false, mode: 'reset' });

  useEffect(() => {
    async function setUserStatus() {
      try {
        const session = await Auth.currentSession();
        console.log(session);
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
        dispatch(setUser(user.username));
      } catch (err) {
        if (err !== 'No current user') snackbarMessage(err.message, 'error', dispatch);
      }
    }
    setUserStatus();
  }, [dispatch]);

  const handleClose = () => dispatch(setUserDialog({ ...userDialog, open: false }));
  const switchToRegister = () => dispatch(setUserDialog({ mode: 'register', open: true }));
  const switchToLogin = () => dispatch(setUserDialog({ mode: 'login', open: true }));
  const switchToForgot = () => dispatch(setUserDialog({ mode: 'forgot', open: true }));
  const switchToLogout = () => dispatch(setUserDialog({ mode: 'logout', open: true }));

  const handleRegister = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const signUpResponse = await Auth.signUp({
        username: registerUsername,
        password: registerPassword,
        attributes: {
          email: registerEmail,
          name: registerName
        }
      });
      snackbarMessage(
        'Successfully signed up. Check your email for verification code.',
        'success',
        dispatch
      );
      console.log(signUpResponse);
      switchToLogin();
    } catch (err) {
      snackbarMessage(err.message, 'error', dispatch);
    }
  };

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(loginUsername, loginPassword);
      console.log(user);
      switchToLogout();
      dispatch(setUser(user.username));
      snackbarMessage('Successfully logged in as ' + user.username, 'success', dispatch);
    } catch (err) {
      if (err.name === 'UserNotConfirmedException') {
        snackbarMessage(
          'Your account needs to be confirmed. Check your email for confirmation code.',
          'info',
          dispatch
        );
        setPromptDialog({ open: true, mode: 'confirm' });
      } else snackbarMessage(err.message, 'error', dispatch);
    }
  };

  const handleForgot = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await Auth.forgotPassword(forgotUsername);
      snackbarMessage('Verification code sent to your email.', 'info', dispatch);
      setPromptDialog({ open: true, mode: 'reset' });
    } catch (err) {
      snackbarMessage(err.message, 'error', dispatch);
    }
  };

  const handleLogout = () => {
    try {
      Auth.signOut();
      console.log('Logged out');
      snackbarMessage('Logged out successfully.', 'success', dispatch);
      dispatch(setUser(null));
      switchToLogin();
    } catch (err) {
      snackbarMessage(err.message, 'error', dispatch);
    }
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
      <form
        id="register-form"
        className={classes.form}
        onSubmit={handleRegister}
        autoComplete="off"
      >
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
          inputProps={{ pattern: passwordPattern, title: invalidPasswordMessage }}
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
          inputProps={{ pattern: passwordPattern, title: invalidPasswordMessage }}
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
        Welcome back, <strong>{user}</strong>!
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
        Reset your password
      </Typography>
      <form id="forgot-form" className={classes.form} onSubmit={handleForgot}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="username"
          label="Username"
          type="username"
          id="forgot-username"
          autoFocus
          value={forgotUsername}
          onChange={(e) => setForgotUsername(e.target.value)}
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
    <Dialog open={userDialog.open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>{renderContent()}</div>
      </Container>
      <PromptDialog
        open={promptDialog.open}
        mode={promptDialog.mode}
        forgotUsername={forgotUsername}
        loginUsername={loginUsername}
        handleClose={() => setPromptDialog({ ...promptDialog, open: false })}
        handleSuccess={switchToLogin}
      />
    </Dialog>
  );
}
