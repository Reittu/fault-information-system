import { ReportDialog, UserDialog, PayloadAction } from '../types';

const reportDialogInitialState: ReportDialog = {
  open: false,
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

export const reportDialogReducer = (
  state = reportDialogInitialState,
  action: PayloadAction<ReportDialog>
): ReportDialog => {
  switch (action.type) {
    case 'REPORT-DIALOG':
      return action.payload;
    default:
      return state;
  }
};

const userDialogInitialState: UserDialog = {
  open: false,
  mode: 'login'
}

export const userDialogReducer = (
  state = userDialogInitialState,
  action: PayloadAction<UserDialog>
): UserDialog => {
  switch (action.type) {
    case 'USER-DIALOG':
      return action.payload;
    default:
      return state;
  }
};
