import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { closeDialog, setMarkers } from '../actions';

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
        setSubject(dialogContent.text);
        setDescription(dialogContent.description);
    }
    const handleClose = () => dispatch(closeDialog());

    const handleSubmit = e => {
        e.preventDefault();
        if (editForm.current.reportValidity()) {
            editForm.current.requestSubmit();
            const newMarkers = markers.map((marker, i) =>
                (i === dialogContent.markerIndex)
                    ? { ...marker, properties: { text: subject, description } }
                    : marker
            );
            dispatch(setMarkers(newMarkers));
            handleClose();
        }
    }

    const reviewModeContent = () => (
        <>
            <DialogTitle id="form-dialog-title">{subject}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <p>Latitude: {dialogContent.latitude}</p>
                    <p>Longitude: {dialogContent.longitude}</p>
                    <p>{description}</p>
                </DialogContentText>
            </DialogContent>
        </>
    )

    const nonReviewModeContent = () => (
        <>
            <DialogTitle id="form-dialog-title">Fault Details</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Set a subject text that appears in the map and a more in-depth description of the issue.
                </DialogContentText>
                <form ref={editForm} onSubmit={handleSubmit}>
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
                        required
                    />
                    <input type="submit" style={{ display: 'none' }} />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
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