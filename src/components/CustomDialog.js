import React, { useState, useRef } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { closeDialog, setMarkers } from '../actions';
import { insertReport, updateReport } from '../utils/fetch';

export default function CustomDialog() {
    const dialogIsOpen = useSelector(state => state.dialogIsOpen);
    const dialogContent = useSelector(state => state.dialogContent);
    const tool = useSelector(state => state.tool);
    const markers = useSelector(state => state.markers);
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const editForm = useRef(null);

    const handleSetup = () => {
        setSubject(dialogContent.subject);
        setDescription(dialogContent.description);
    }
    const handleClose = () => dispatch(closeDialog());

    const requestSubmit = () => {
        editForm.current.requestSubmit();
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (editForm.current.reportValidity()) {
            const newMarkers = markers.map((marker, i) => {
                if (i === dialogContent.markerIndex) {
                    const { latitude, longitude, city, postcode, address } = marker;
                    if (marker.id) {
                        updateReport({ id: marker.id, subject, description }, res => {
                            const resultMessage = res.recordsets[0][0].result;
                            if (resultMessage !== 'Success') alert('Failed to update report: ' + resultMessage);
                        });
                    } else {
                        insertReport({ subject, description, latitude, longitude, city, postcode, address }, res => {
                            let newMarkers = [...markers];
                            newMarkers[i].id = Number(res.recordsets[0][0].result);
                            newMarkers[i].subject = subject;
                            newMarkers[i].description = description;
                            dispatch(setMarkers(newMarkers));
                        });
                    }

                    return { ...marker, subject, description };
                } else return marker;
            });
            dispatch(setMarkers(newMarkers));
            handleClose();
        }
    }

    const reviewModeContent = () => (
        <>
            <DialogTitle id="form-dialog-title">{subject}</DialogTitle>
            <DialogContent>
                <Box color="text.secondary" pb="16px">
                    <Box mb="16px">
                        <Typography display="inline">Reported by: </Typography>
                        <Typography display="inline" color="primary">{dialogContent.reporter}</Typography>
                    </Box>
                    <Box mb="16px">
                        <Typography>{dialogContent.address}, {dialogContent.postcode}, {dialogContent.city}</Typography>
                        <Typography>Latitude: {dialogContent.latitude}</Typography>
                        <Typography>Longitude: {dialogContent.longitude}</Typography>
                    </Box>
                    <Typography color="textPrimary">{description}</Typography>
                </Box>
            </DialogContent>
        </>
    )

    const nonReviewModeContent = () => (
        <>
            <DialogTitle id="form-dialog-title">Fault Details</DialogTitle>
            <DialogContent>
                <Box color="text.secondary" mb="16px">
                    <Box mb="8px">
                        <Typography color="textSecondary" display="inline">Reported by: </Typography>
                        <Typography color="primary" display="inline">{dialogContent.reporter}</Typography>
                    </Box>
                    <Typography>Set a subject text that appears in the map and a more in-depth description of the issue.</Typography>
                </Box>
                <form ref={editForm} onSubmit={handleSubmit}>
                    <fieldset disabled={dialogContent.reporter !== 'guest' ? true : false} style={{ all: 'unset' }}>
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
                            rows="2"
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
                <Button onClick={requestSubmit} color="primary" disabled={dialogContent.reporter !== 'guest' ? true : false}>
                    Save
                </Button>
            </DialogActions>
        </>
    )

    return (
        <Dialog onEnter={handleSetup} open={dialogIsOpen} onClose={() => handleClose(false)} aria-labelledby="form-dialog-title">
            {tool === 'review' ? reviewModeContent() : nonReviewModeContent()}
        </Dialog>
    );
}