import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ToolGroup from './ToolGroup';
import { drawerWidth } from '../App.js';

import { useSelector, useDispatch } from 'react-redux';
import { closeDrawer } from '../actions';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
    },
    drawerClose: {
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
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
    const theme = useTheme();

    const drawerIsOpen = useSelector(state => state.drawerIsOpen);
    const dispatch = useDispatch();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: drawerIsOpen,
                [classes.drawerClose]: !drawerIsOpen,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: drawerIsOpen,
                    [classes.drawerClose]: !drawerIsOpen,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={() => dispatch(closeDrawer())}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <ToolGroup />
        </Drawer>

    );
}