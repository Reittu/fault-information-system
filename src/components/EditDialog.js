import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { closeDialog, setMarkers } from '../actions';

export default function EditDialog() {
    const dialogIsOpen = useSelector(state => state.dialogIsOpen);
    const dialogContent = useSelector(state => state.dialogContent);
    const markers = useSelector(state => state.markers);
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSetup = () => {
        setSubject(dialogContent.text);
        setDescription(dialogContent.description);
    }
    const handleClose = (resultOk) => {
        if (resultOk) {
            const newMarkers = markers.map((marker, i) =>
                (i === dialogContent.markerIndex)
                    ? { ...marker, properties: { text: subject, description } }
                    : marker
            );
            dispatch(setMarkers(newMarkers));
        }
        dispatch(closeDialog());
    }

    return (
        <Dialog onEnter={handleSetup} open={dialogIsOpen} onClose={() => handleClose(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Fault Details</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Placeholder text for dialog.
          </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="subject"
                    label="Subject"
                    type="text"
                    fullWidth
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose(false)} color="primary">
                    Cancel
          </Button>
                <Button onClick={() => handleClose(true)} color="primary">
                    Save
          </Button>
            </DialogActions>
        </Dialog>
    );
}