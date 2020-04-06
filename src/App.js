import React, { useState } from 'react';
import CustomAppBar from './components/CustomAppBar';
import ToolDrawer from './components/ToolDrawer';
import MapGL from 'react-map-gl';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple, blue } from '@material-ui/core/colors';

export const drawerWidth = 260;

const initialTheme = {
  palette: {
    primary: purple,
    secondary: blue,
    type: 'light'
  },
}

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    paddingTop: '56px',
    overflow: 'hidden'
  },
  '@media (orientation: landscape)': {
    content: {
      paddingTop: '48px'
    }
  },
  '@media (min-width: 600px)': {
    content: {
      paddingTop: '64px'
    }
  }
}));

function App() {
  const muiTheme = createMuiTheme(initialTheme);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [viewport, setViewport] = useState({
    longitude: 26.2,
    latitude: 62.1,
    zoom: 4.9,
    bearing: 0,
    pitch: 0
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <ToolDrawer open={open} handleDrawerClose={handleDrawerClose} setViewport={setViewport} />
        <CustomAppBar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} viewport={viewport} setViewport={setViewport} />
        <main className={classes.content}>
           <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
          </MapGL>      
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
