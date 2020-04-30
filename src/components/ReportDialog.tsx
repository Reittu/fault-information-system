import React, { useState, useRef, SyntheticEvent } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { setMarkers, showSpinner, hideSpinner, setReportDialog } from '../actions';
import { insertReport, updateReport } from '../utils/fetch';
import { snackbarMessage } from '../utils/snackbar';
import { Marker } from '../types';
import { RootState } from '../reducers';

export default function ReportDialog() {
  const reportDialog = useSelector((state: RootState) => state.reportDialog);
  const tool = useSelector((state: RootState) => state.tool);
  const markers = useSelector((state: RootState) => state.markers);
  const user = useSelector((state: RootState) => state.user);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const editForm = useRef<HTMLFormElement>(null);

  const isAuthorized =
    reportDialog.reporter === user || reportDialog.reporter === 'guest' ? true : false;

  const handleSetup = () => {
    setSubject(reportDialog.subject);
    setDescription(reportDialog.description);
  };
  const handleClose = () => dispatch(setReportDialog({ ...reportDialog, open: false }));

  const requestSubmit = () => {
    editForm.current?.requestSubmit(); // Validate form and submit
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const newMarkers = markers.map((marker: Marker, i: number) => {
      // Find the marker that initiated the edit dialog
      if (i === reportDialog.markerIndex) {
        const { latitude, longitude, city, postcode, address, reporter, id: dbIndex } = marker;
        dispatch(showSpinner());
        if (dbIndex) {
          // Marker already has an associated database id: wanted action is update
          updateReport({ id: dbIndex, subject, description })
            .then(() => snackbarMessage('Report updated.', 'success', dispatch))
            .catch((err) => snackbarMessage(err.message, 'error', dispatch))
            .finally(() => dispatch(hideSpinner()));
        } else {
          // Marker has no existing database id: wanted action is insert
          insertReport({
            subject,
            description,
            latitude,
            longitude,
            city,
            postcode,
            address,
            reporter,
          })
            .then((result) => {
              let newMarkers = [...markers];
              newMarkers[i].id = Number(result);
              newMarkers[i].subject = subject;
              newMarkers[i].description = description;
              dispatch(setMarkers(newMarkers));
              snackbarMessage('Report posted.', 'success', dispatch);
            })
            .catch((err) => snackbarMessage(err.message, 'error', dispatch))
            .finally(() => dispatch(hideSpinner()));
        }
        return { ...marker, subject, description };
      } else return marker;
    });

    dispatch(setMarkers(newMarkers));
    handleClose();
  };

  const reviewModeContent = () => (
    <>
      <DialogTitle id="form-dialog-title">{subject}</DialogTitle>
      <DialogContent>
        <Box color="text.secondary" pb="16px">
          <Box mb="16px">
            <Typography display="inline">Reported by: </Typography>
            <Typography display="inline" color="primary">
              {' ' + reportDialog.reporter}
            </Typography>
          </Box>
          <Box mb="16px">
            <Typography>
              {reportDialog.address}, {reportDialog.postcode}, {reportDialog.city}
            </Typography>
            <Typography>Latitude: {reportDialog.latitude}</Typography>
            <Typography>Longitude: {reportDialog.longitude}</Typography>
          </Box>
          <Typography color="textPrimary">{description}</Typography>
        </Box>
      </DialogContent>
    </>
  );

  const nonReviewModeContent = () => (
    <>
      <DialogTitle id="form-dialog-title">Fault Details</DialogTitle>
      <DialogContent>
        <Box color="text.secondary" mb="16px">
          <Box mb="8px">
            <Typography color="textSecondary" display="inline">
              Reported by: 
            </Typography>
            <Typography color="primary" display="inline">
              {' ' + reportDialog.reporter}
            </Typography>
          </Box>
          <Typography>
            Set a subject text that appears in the map and a more in-depth description of the issue.
          </Typography>
        </Box>
        <form ref={editForm} onSubmit={handleSubmit}>
          <fieldset disabled={!isAuthorized} style={{ all: 'unset' }}>
            <TextField
              autoFocus
              margin="dense"
              id="subject"
              label="Subject"
              type="text"
              fullWidth
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              inputProps={{ minLength: 3, maxLength: 50 }}
              required
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              inputProps={{ minLength: 5, maxLength: 500 }}
              multiline={true}
              rows="3"
              required
            />
            <input type="submit" style={{ display: 'none' }} />
          </fieldset>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={requestSubmit} color="primary" disabled={!isAuthorized}>
          Save
        </Button>
      </DialogActions>
    </>
  );

  return (
    <Dialog
      onEnter={handleSetup}
      open={reportDialog.open}
      onClose={() => handleClose()}
      aria-labelledby="form-dialog-title"
    >
      {tool === 'review' ? reviewModeContent() : nonReviewModeContent()}
    </Dialog>
  );
}
