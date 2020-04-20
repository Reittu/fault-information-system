import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbar } from '../actions';
import { RootState } from '../reducers';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackbar() {
  const { message, open, severity } = useSelector((state: RootState) => state.snackbar);
  const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return;
    dispatch(
      setSnackbar({
        message,
        open: false,
        severity
      })
    );
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
