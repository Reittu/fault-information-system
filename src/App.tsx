import React, { useEffect } from 'react';
import ToolDrawer from './components/ToolDrawer';
import MapGL from 'react-map-gl';
import CustomAppBar from './components/CustomAppBar';
import CustomDialog from './components/CustomDialog';
import CustomMarker from './components/CustomMarker';
import { useSelector, useDispatch } from 'react-redux';
import { setViewport, setMarkers } from './actions';
import { getAllReports, reverseGeocode } from './utils/fetch';

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
  const dispatch = useDispatch();

  useEffect(() => {
    getAllReports().then((reports) => dispatch(setMarkers(reports)));
  }, [dispatch]);

  const handleViewportChange = (viewport: Viewport) => dispatch(setViewport(viewport));
  const handleClick = async (e: any) => {
    if (tool === 'add') {
      // Prioritize edit over add on existing markers
      if (e.target.tagName !== 'DIV') return;

      reverseGeocode(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.lngLat[0]},${e.lngLat[1]}.json?access_token=${MAPBOX_TOKEN}`
      )
        .then((res) => {
          const { city, address = '---', postcode = '---', region, country } = res;
          if (country !== 'Finland')
            return alert(
              `This app is currently restricted to Finland only. Marker location: ${region}, ${country}`
            );

          if (!city) return alert('Marker is not located near a city with infrastructure.');

          const newMarker: Marker = {
            address,
            city,
            description: `${address}, ${postcode}, ${city}`,
            id: null,
            latitude: e.lngLat[1],
            longitude: e.lngLat[0],
            postcode,
            reporter: 'guest',
            subject: 'New marker'
          };

          dispatch(setMarkers([...markers, newMarker]));
        })
        .catch((err) => alert(err));
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
            {React.useMemo(
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
          <CustomDialog />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
