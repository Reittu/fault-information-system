import React, { useState, useEffect } from 'react';
import { TextField, makeStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setViewport } from '../actions';
import { RootState } from '../reducers';
import { GeoJSONFeature, GeoJSONFeatureCollection } from '../types';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
let debounceTimer: number;

const useStyles = makeStyles(() => ({
  searchIcon: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(50%, -50%)'
  },
  autosuggest: {
    '& .MuiFormControl-root': {
      margin: '0 0 0 5px'
    },
    '& .MuiInputBase-root': {
      paddingTop: 0,
      paddingBottom: 0
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff'
    },
    '& .MuiAutocomplete-inputRoot': {
      paddingLeft: '32px',
      color: '#fff'
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(36px, 12px) scale(1)',
      padding: 0,
      color: '#fff'
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)'
    },
  }
}));

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
  const classes = useStyles();
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
    <>
      <SearchIcon className={classes.searchIcon} />
      <Autocomplete
        className={classes.autosuggest}
        freeSolo
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
    </>
  );
}

export default AutosuggestWrapper;
