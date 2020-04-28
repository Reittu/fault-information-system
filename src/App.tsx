import React, { useEffect, useMemo } from 'react';
import ToolDrawer from './components/ToolDrawer';
import MapGL from 'react-map-gl';
import CustomAppBar from './components/CustomAppBar';
import ReportDialog from './components/ReportDialog';
import UserDialog from './components/UserDialog';
import CustomMarker from './components/CustomMarker';
import CustomSnackbar from './components/CustomSnackbar';
import { useSelector, useDispatch } from 'react-redux';
import { setViewport, setMarkers, setSnackbar, hideSpinner } from './actions';
import { getAllReports } from './utils/fetch';
import { addNewMarkerLocally } from './utils/markers';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';
import { makeStyles, ThemeOptions } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple, blue } from '@material-ui/core/colors';

import { Marker, Viewport } from './types';
import { RootState } from './reducers';

export const drawerWidth: number = 260;

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const initialTheme: ThemeOptions = {
  palette: {
    primary: purple,
    secondary: blue,
    type: 'light'
  }
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    paddingTop: '56px',
    overflow: 'hidden'
  },
  addToolSelected: {
    '&>div': {
      cursor: 'pointer !important'
    }
  }
}));

function App() {
  const muiTheme = createMuiTheme(initialTheme);
  const classes = useStyles();
  const markers = useSelector((state: RootState) => state.markers);
  const viewport = useSelector((state: RootState) => state.viewport);
  const tool = useSelector((state: RootState) => state.tool);
  const spinner = useSelector((state: RootState) => state.spinner);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllReports()
      .then((reports) => dispatch(setMarkers(reports)))
      .catch((err) =>
        dispatch(
          setSnackbar({
            message: err.message,
            open: true,
            severity: 'warning'
          })
        )
      ).finally(() => dispatch(hideSpinner()));
  }, [dispatch]);

  const handleViewportChange = (viewport: Viewport) => dispatch(setViewport(viewport));
  const handleClick = async (e: any) => {
    if (tool === 'add') {
      // Prioritize edit over add on existing markers
      if (e.target.tagName !== 'DIV') return;
      addNewMarkerLocally(e.lngLat[0], e.lngLat[1], markers, dispatch);
    }
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <ToolDrawer />
        <CustomAppBar />
        <main
          className={
            tool === 'add' ? `${classes.content} ${classes.addToolSelected}` : classes.content
          }
        >
          <MapGL
            {...viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onMouseDown={handleClick}
          >
            {useMemo(
              () =>
                markers.map((m: Marker, i: number) => (
                  <CustomMarker
                    key={i}
                    localIndex={i}
                    address={m.address}
                    city={m.city}
                    postcode={m.postcode}
                    dbIndex={m.id}
                    longitude={m.longitude}
                    latitude={m.latitude}
                    subject={m.subject}
                    description={m.description}
                    reporter={m.reporter}
                    offsetTop={-24}
                    offsetLeft={-12}
                  />
                )),
              [markers]
            )}
          </MapGL>
          {/* Only rerender when component's state via useSelector changes */}
          {useMemo(() => <ReportDialog />, [])}
          {useMemo(() => <UserDialog />, [])}
          {useMemo(() => <CustomSnackbar />, [])}
          {spinner && <CircularProgress color="secondary" style={{position: 'absolute', left: '50%', top: '50%', marginLeft: '-20px', marginTop: '-20px'}} />}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
