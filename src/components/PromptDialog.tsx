import React, { useState, SyntheticEvent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Container from '@material-ui/core/Container';
import { usePaperDialogStyles } from '../utils/dialogs';
import { useDispatch } from 'react-redux';
import { passwordPattern, invalidPasswordMessage } from '../utils/validation';
import { snackbarMessage } from '../utils/snackbar';
import { asyncActionLoaderWrapper } from '../utils/loading';
import Auth from '@aws-amplify/auth';

export default function PromptDialog(props: any) {
  const classes = usePaperDialogStyles();
  const dispatch = useDispatch();
  const { open, mode, forgotUsername, loginUsername, handleClose, handleSuccess } = props;
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyEmail = async (e: SyntheticEvent) => {
    e.preventDefault();
    asyncActionLoaderWrapper(
      setIsLoading,
      dispatch,
      async () => {
        await Auth.confirmSignUp(loginUsername, verificationCode);
        snackbarMessage('Successfully confirmed user.', 'success', dispatch);
        handleSuccess();
        handleClose();
      }
    );
  };

  const handleResetPassword = async (e: SyntheticEvent) => {
    e.preventDefault();
    asyncActionLoaderWrapper(
      setIsLoading,
      dispatch,
      async () => {
        await Auth.forgotPasswordSubmit(forgotUsername, verificationCode, newPassword);
        snackbarMessage('Successfully set a new password.', 'success', dispatch);
        handleSuccess();
        handleClose();
      }
    );
  };

  const verifyEmailContent = () => (
    <>
      <Typography component="h1" variant="h5">
        Verify Email
      </Typography>
      <form id="verification-form" className={classes.form} onSubmit={handleVerifyEmail}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="code"
          label="Verification code"
          id="verification-code"
          autoFocus
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={isLoading}
        >
          Send reset confirmation
        </Button>
      </form>
      <Button onClick={handleClose} fullWidth variant="outlined" color="primary">
        Cancel
      </Button>
    </>
  );

  const resetPasswordContent = () => (
    <>
      <Typography component="h1" variant="h5">
        Change password
      </Typography>
      <form id="reset-form" className={classes.form} onSubmit={handleResetPassword}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="code"
          label="Verification code"
          id="verification-code"
          autoFocus
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="New Password"
          type="password"
          id="new-password"
          autoComplete="new-password"
          inputProps={{ pattern: passwordPattern, title: invalidPasswordMessage }}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={isLoading}
        >
          Change password
        </Button>
      </form>
      <Button onClick={handleClose} fullWidth variant="outlined" color="primary">
        Cancel
      </Button>
    </>
  );

  const renderContent = () => {
    if (mode === 'verify') return verifyEmailContent();
    else if (mode === 'reset') return resetPasswordContent();
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <Container component="main" maxWidth="sm">
        <div className={classes.paper}>{renderContent()}</div>
      </Container>
    </Dialog>
  );
}
