import { reverseGeocode } from './fetch';
import { setSnackbar, setMarkers } from '../actions';
import { Marker } from '../types';
import { Dispatch } from 'redux';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export const addNewMarkerLocally = (
  longitude: number,
  latitude: number,
  markers: Marker[],
  dispatch: Dispatch
) => {
  reverseGeocode(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_TOKEN}`
  )
    .then((res) => {
      const { city, address = '---', postcode = '---', region, country } = res;
      if (country && country !== 'Finland') {
        return dispatch(
          setSnackbar({
            message: `This app is currently restricted to Finland only. Marker location: ${region}, ${country}`,
            open: true,
            severity: 'warning'
          })
        );
      }

      if (!city) {
        return dispatch(
          setSnackbar({
            message: 'This location is not near a city with infrastructure.',
            open: true,
            severity: 'warning'
          })
        );
      }

      const newMarker: Marker = {
        address,
        city,
        description: `${address}, ${postcode}, ${city}`,
        id: null,
        latitude,
        longitude,
        postcode,
        reporter: 'guest',
        subject: 'New marker'
      };

      dispatch(setMarkers([...markers, newMarker]));
    })
    .catch((err) =>
      dispatch(
        setSnackbar({
          message: err.message,
          open: true,
          severity: 'error'
        })
      )
    );
};
