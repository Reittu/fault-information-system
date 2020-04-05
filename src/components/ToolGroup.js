import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


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

    const [alignment, setAlignment] = React.useState('left');

    return (
        <ToggleButtonGroup className={classes.buttonGroup} size="small" value={alignment} exclusive onChange={handleChange}>
            <ToggleButton className={classes.toggleButton} value="left">
                <FormatAlignLeftIcon className={classes.listIcon} />
                <Typography variant="body1">Example text</Typography>
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="center">
                <FormatAlignCenterIcon className={classes.listIcon} />
                <Typography variant="body1">Example text</Typography>
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="right">
                <FormatAlignRightIcon className={classes.listIcon} />
                <Typography variant="body1">Example text</Typography>
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="justify" disabled>
                <FormatAlignJustifyIcon className={classes.listIcon} />
                <Typography variant="body1">Example text</Typography>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}