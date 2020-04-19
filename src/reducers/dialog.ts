import { Action } from 'redux';
import { DialogContent, PayloadAction } from '../types';

export const dialogStateReducer = (state: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case 'OPEN-DIALOG':
      return true;
    case 'CLOSE-DIALOG':
      return false;
    default:
      return state;
  }
};

const initialState: DialogContent = {
  address: '',
  city: '',
  postcode: '',
  subject: '',
  description: '',
  reporter: '',
  markerIndex: 0,
  latitude: 0,
  longitude: 0
};

export const dialogContentReducer = (
  state = initialState,
  action: PayloadAction<DialogContent>
): DialogContent => {
  switch (action.type) {
    case 'SET-DIALOG':
      return action.payload;
    default:
      return state;
  }
};
