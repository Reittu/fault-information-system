import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import AutosuggestWrapper from './AutosuggestWrapper';
import { drawerWidth } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { openDrawer, closeDrawer, setUserDialog } from '../actions';
import { RootState } from '../reducers';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    opacity: 0.5
  },
  searchBox: {
    width: '300px'
  },
  toolbar: {
    justifyContent: 'space-between'
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const drawerIsOpen = useSelector((state: RootState) => state.drawerIsOpen);
  const dispatch = useDispatch();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerIsOpen
      })}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={drawerIsOpen ? () => dispatch(closeDrawer()) : () => dispatch(openDrawer())}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: drawerIsOpen
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Fault Information System
        </Typography>
        <div className={classes.searchBox}>
          <AutosuggestWrapper />
        </div>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={() => dispatch(setUserDialog({ open: true, mode: 'login' }))}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
