
export const openDrawer = () => ({ type: 'OPEN-DRAWER' });
export const closeDrawer = () => ({ type: 'CLOSE-DRAWER' });
export const openDialog = () => ({ type: 'OPEN-DIALOG' });
export const closeDialog = () => ({ type: 'CLOSE-DIALOG' });

export const setTool = (payload) => {
    return {
        type: 'TOOL',
        payload
    }
};

export const setViewport = (payload) => {
    return {
        type: 'VIEWPORT',
        payload
    }
};

export const setDialogContent = (payload) => {
    return {
        type: 'SET-DIALOG',
        payload
    }
};

export const setMarkers = (payload) => {
    return {
        type: 'SET-MARKERS',
        payload
    }
};