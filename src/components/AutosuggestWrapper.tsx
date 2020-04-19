import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setViewport } from '../actions';
import { RootState } from '../reducers';
import { GeoJSONFeature, GeoJSONFeatureCollection } from '../types';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
let debounceTimer: number;

const getSuggestions = async (value: string) => {
  const inputValue = value.trim().toLowerCase();
  return inputValue.length < 2 ? [] : queryPlaces(value);
};

async function queryPlaces(query: string) {
  const response = await fetch(
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
      query +
      '.json?access_token=' +
      MAPBOX_TOKEN
  );
  const data: GeoJSONFeatureCollection = await response.json();
  return data.features || [];
}

function AutosuggestWrapper() {
  const [suggestions, setSuggestions] = useState<GeoJSONFeature[]>([]);
  const [value, setValue] = useState('');

  const viewport = useSelector((state: RootState) => state.viewport);
  const dispatch = useDispatch();

  useEffect(() => {
    async function asyncSet() {
      setSuggestions(await getSuggestions(value));
    }
    clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(asyncSet, 300);
  }, [value]);

  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <SearchIcon />
      <Autocomplete
        freeSolo
        style={{ flex: 1 }}
        onInputChange={(event, newValue) => setValue(newValue)}
        options={suggestions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a location..."
            margin="normal"
            variant="outlined"
          />
        )}
        getOptionLabel={(option) => option.place_name}
        renderOption={(option) => {
          return (
            <div
              onClick={() => {
                dispatch(
                  setViewport({
                    ...viewport,
                    longitude: Number(option.center[0]),
                    latitude: Number(option.center[1]),
                    zoom: 16
                  })
                );
              }}
            >
              {option.place_name}
            </div>
          );
        }}
      />
    </div>
  );
}

export default AutosuggestWrapper;
