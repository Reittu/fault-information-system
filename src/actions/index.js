
export const openDrawer = () => ({ type: 'OPEN-DRAWER' });
export const closeDrawer = () => ({ type: 'CLOSE-DRAWER' });

export const setTool = (number) => {
    return {
        type: 'TOOL',
        payload: number
    }
};

export const setViewport = (number) => {
    return {
        type: 'VIEWPORT',
        payload: number
    }
};