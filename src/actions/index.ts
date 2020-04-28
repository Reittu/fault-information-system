import { Action } from 'redux';
import { ReportDialog, UserDialog, Marker, Tool, Viewport, PayloadAction, Snackbar, User } from '../types';

export const openDrawer = (): Action => ({ type: 'OPEN-DRAWER' });
export const closeDrawer = (): Action => ({ type: 'CLOSE-DRAWER' });
export const showSpinner = (): Action => ({ type: 'SHOW-SPINNER' });
export const hideSpinner = (): Action => ({ type: 'HIDE-SPINNER' });

export const setTool = (payload: Tool): PayloadAction<Tool> => {
    return {
        type: 'TOOL',
        payload
    }
};

export const setViewport = (payload: Viewport): PayloadAction<Viewport> => {
    return {
        type: 'VIEWPORT',
        payload
    }
};

export const setReportDialog = (payload: ReportDialog): PayloadAction<ReportDialog> => {
    return {
        type: 'REPORT-DIALOG',
        payload
    }
};

export const setUserDialog = (payload: UserDialog): PayloadAction<UserDialog> => {
    return {
        type: 'USER-DIALOG',
        payload
    }
};

export const setMarkers = (payload: Marker[]): PayloadAction<Marker[]> => {
    return {
        type: 'MARKERS',
        payload
    }
};

export const setSnackbar = (payload: Snackbar): PayloadAction<Snackbar> => {
    return {
        type: 'SNACKBAR',
        payload
    }
};

export const setUser = (payload: User): PayloadAction<User> => {
    return {
        type: 'USER',
        payload
    }
};