import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import AutosuggestWrapper from './AutosuggestWrapper';
import { drawerWidth } from '../App.js';

import { useSelector, useDispatch } from 'react-redux';
import { openDrawer, closeDrawer } from '../actions';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        opacity: .5,
    },
    searchBox: {
        width: '300px',
        '& .MuiFormControl-root': {
            margin: '0 0 0 5px'
        },
        '& .MuiInputBase-root': {
            paddingTop: 0,
            paddingBottom: 0
        },
        '& .MuiInputLabel-outlined': {
            padding: 0,
            color: '#fff',
            transform: 'translate(14px, 12px) scale(1)'
        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(14px, -6px) scale(0.75)'
        },
        '& .MuiTextField': {
            color: '#fff'
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff'
        }
    },
    toolbar: {
        justifyContent: 'space-between'
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();
    const drawerIsOpen = useSelector(state => state.drawerIsOpen);
    const dispatch = useDispatch();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: drawerIsOpen,
            })}
        >
            <Toolbar className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={drawerIsOpen ? () => dispatch(closeDrawer()) : () => dispatch(openDrawer())}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: drawerIsOpen,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>Fault Information System</Typography>
                <div className={classes.searchBox}>
                    <AutosuggestWrapper />
                </div>
            </Toolbar>
        </AppBar>
    );
}