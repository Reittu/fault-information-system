import { Action } from 'redux';
import { DialogContent, Marker, Tool, Viewport, PayloadAction, Snackbar } from '../types';

export const openDrawer = (): Action => ({ type: 'OPEN-DRAWER' });
export const closeDrawer = (): Action => ({ type: 'CLOSE-DRAWER' });
export const openDialog = (): Action => ({ type: 'OPEN-DIALOG' });
export const closeDialog = (): Action => ({ type: 'CLOSE-DIALOG' });
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

export const setDialogContent = (payload: DialogContent): PayloadAction<DialogContent> => {
    return {
        type: 'SET-DIALOG',
        payload
    }
};

export const setMarkers = (payload: Marker[]): PayloadAction<Marker[]> => {
    return {
        type: 'SET-MARKERS',
        payload
    }
};

export const setSnackbar = (payload: Snackbar): PayloadAction<Snackbar> => {
    return {
        type: 'SET-SNACKBAR',
        payload
    }
};