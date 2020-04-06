import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import DeleteIcon from '@material-ui/icons/Delete';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

const useStyles = makeStyles((theme) => ({
    buttonGroup: {
        flexDirection: 'column'
    },
    toggleButton: {
        justifyContent: 'flex-start',
        textTransform: 'none'
    },
    listIcon: {
        minWidth: '56px',
        padding: '0 16px',
        marginRight: '12px'
    }
}));

export default function ToolDrawer(props) {
    const classes = useStyles();

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [alignment, setAlignment] = useState('add');

    const centerGPS = () => {
        if (!navigator.geolocation) {
            alert("Your browser does not support GeoLocation.");
        } else {
            navigator.geolocation.getCurrentPosition(pos => {
                if (pos.coords) {
                    props.setViewport({
                        longitude: pos.coords.longitude,
                        latitude: pos.coords.latitude,
                        zoom: 17,
                        bearing: 0,
                        pitch: 0
                    })
                }
            })
        }

    }

    return (
        <>
            <ToggleButtonGroup className={classes.buttonGroup} size="small" value={alignment} exclusive onChange={handleChange}>
                <ToggleButton className={classes.toggleButton} value="add">
                    <AddLocationIcon className={classes.listIcon} />
                    <Typography variant="body1">Report a new fault</Typography>
                </ToggleButton>
                <ToggleButton className={classes.toggleButton} value="edit">
                    <EditLocationIcon className={classes.listIcon} />
                    <Typography variant="body1">Edit submitted faults</Typography>
                </ToggleButton>
                <ToggleButton className={classes.toggleButton} value="delete">
                    <DeleteIcon className={classes.listIcon} />
                    <Typography variant="body1">Delete faults</Typography>
                </ToggleButton>
                <ToggleButton className={classes.toggleButton} value="help">
                    <NotListedLocationIcon className={classes.listIcon} />
                    <Typography variant="body1">Help</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
            <Button className={classes.toggleButton} onClick={centerGPS}>
                <MyLocationIcon className={classes.listIcon} />
                <Typography variant="body1">Center to your location</Typography>
            </Button>
        </>
    );
}