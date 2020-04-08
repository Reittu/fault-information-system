import React from 'react';
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

import { useSelector, useDispatch } from 'react-redux';
import { setTool, setViewport } from '../actions';

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

export default function ToolGroup() {
    console.log("Rendered");
    const classes = useStyles();
    const tool = useSelector(state => state.tool);
    const dispatch = useDispatch();

    const handleChange = (e, val) => dispatch(setTool(val));

    const centerGPS = () => {
        if (!navigator.geolocation) {
            alert("Your browser does not support GeoLocation.");
        } else {
            navigator.geolocation.getCurrentPosition(pos => {
                if (pos.coords) {
                    dispatch(setViewport({
                        longitude: pos.coords.longitude,
                        latitude: pos.coords.latitude,
                        zoom: 16,
                        bearing: 0,
                        pitch: 0,
                    }))
                }
            })
        }
    }

    return (
        <>
            <ToggleButtonGroup className={classes.buttonGroup} size="small" value={tool} exclusive onChange={handleChange}>
                <ToggleButton className={classes.toggleButton} value="Report new faults">
                    <AddLocationIcon className={classes.listIcon} />
                    <Typography variant="body1">Report a new fault</Typography>
                </ToggleButton>
                <ToggleButton className={classes.toggleButton} value="edit" title="Edit existing faults">
                    <EditLocationIcon className={classes.listIcon} />
                    <Typography variant="body1">Edit submitted faults</Typography>
                </ToggleButton>
                <ToggleButton className={classes.toggleButton} value="delete" title="Remove faults">
                    <DeleteIcon className={classes.listIcon} />
                    <Typography variant="body1">Delete faults</Typography>
                </ToggleButton>
                <ToggleButton className={classes.toggleButton} value="help" title="How to use">
                    <NotListedLocationIcon className={classes.listIcon} />
                    <Typography variant="body1">Help</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
            <Button className={classes.toggleButton} onClick={centerGPS} title="Center map to your location">
                <MyLocationIcon className={classes.listIcon} />
                <Typography variant="body1">Center to your location</Typography>
            </Button>
        </>
    );
}