import { Action } from "redux";
import { DialogContent, Marker, Tool, Viewport, ToolAction, ViewportAction, DialogContentAction, MarkerAction } from "../types";

export const openDrawer = (): Action => ({ type: 'OPEN-DRAWER' });
export const closeDrawer = (): Action => ({ type: 'CLOSE-DRAWER' });
export const openDialog = (): Action => ({ type: 'OPEN-DIALOG' });
export const closeDialog = (): Action => ({ type: 'CLOSE-DIALOG' });

export const setTool = (payload: Tool): ToolAction => {
    return {
        type: 'TOOL',
        payload
    }
};

export const setViewport = (payload: Viewport): ViewportAction => {
    return {
        type: 'VIEWPORT',
        payload
    }
};

export const setDialogContent = (payload: DialogContent): DialogContentAction => {
    return {
        type: 'SET-DIALOG',
        payload
    }
};

export const setMarkers = (payload: Marker[]): MarkerAction => {
    return {
        type: 'SET-MARKERS',
        payload
    }
};