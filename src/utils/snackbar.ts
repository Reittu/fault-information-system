import { Snackbar } from "../types";
import { setSnackbar } from '../actions';
import { Dispatch } from "redux";

export const snackbarMessage = (message: string, severity: Snackbar["severity"], dispatch: Dispatch) => {
    dispatch(setSnackbar({
        message,
        severity,
        open: true,
    }))
};