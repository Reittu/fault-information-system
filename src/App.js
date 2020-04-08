import React from 'react';
import CustomAppBar from './components/CustomAppBar';
import ToolDrawer from './components/ToolDrawer';
import MapGL from 'react-map-gl';
import CustomMarker from './components/CustomMarker';
import EditDialog from './components/EditDialog';
import { useSelector, useDispatch } from 'react-redux';
import { setViewport, setMarkers } from './actions';

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
  const markers = useSelector(state => state.markers);
  const viewport = useSelector(state => state.viewport);
  const tool = useSelector(state => state.tool);
  const dispatch = useDispatch();

  const handleViewportChange = (val) => dispatch(setViewport(val));
  const handleClick = (e) => {
    if (tool === 'add') {
      // Prioritize edit over add on existing markers
      if (e.target.tagName !== 'DIV') return;
      const newPoint = {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: e.lngLat
        },
        properties: {
          text: "New marker",
          description: "Placeholder description. " + e.lngLat[0] + ', ' + e.lngLat[1]
        }
      };
      dispatch(setMarkers([...markers, newPoint]));
    }
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <ToolDrawer />
        <CustomAppBar />
        <main className={classes.content}>
          <MapGL
            {...viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onMouseDown={handleClick}
          >
            {React.useCallback(markers.map((p, i) => (
              <CustomMarker
                key={i}
                markerIndex={i}
                longitude={p.geometry.coordinates[0]}
                latitude={p.geometry.coordinates[1]}
                text={p.properties.text}
                description={p.properties.description}
                color="purple"
                offsetTop={-24}
                offsetLeft={-12}
              />
            )), [markers])}

          </MapGL>
          <EditDialog />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
