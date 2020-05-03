import { reverseGeocode } from './fetch';
import { setMarkers } from '../actions';
import { snackbarMessage } from './snackbar';
import { Marker, User } from '../types';
import { Dispatch } from 'redux';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export const addNewMarkerLocally = (
  user: User,
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
      if (country && country !== 'Finland')
        return snackbarMessage(
          `This app is currently restricted to Finland only. Marker location: ${region}, ${country}`,
          'warning',
          dispatch
        );

      if (!city)
        return snackbarMessage(
          'This location is not near a city with infrastructure.',
          'warning',
          dispatch
        );

      const newMarker: Marker = {
        address,
        city,
        description: `${address}, ${postcode}, ${city}`,
        id: null,
        latitude,
        longitude,
        postcode,
        reporter: user || 'guest',
        subject: 'New marker'
      };

      dispatch(setMarkers([...markers, newMarker]));
    })
    .catch((err) => snackbarMessage(err.message, 'error', dispatch));
};
