import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
let debounceTimer;

const getSuggestions = async value => {
    const inputValue = value.trim().toLowerCase();
    return await inputValue.length < 2 ? [] : queryPlaces(value);
};

async function queryPlaces(query) {
    const response = await fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + query + '.json?access_token=' + MAPBOX_TOKEN);
    const data = await response.json();
    return data.features || [];
}

function AutosuggestWrapper(props) {
    const { viewport, setViewport } = props;
    const [suggestions, setSuggestions] = useState([]);
    const [value, setValue] = useState('');
    useEffect(() => {
        async function asyncSet() {
            setSuggestions(await getSuggestions(value));
        }
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(asyncSet, 300);
    }, [value]);

    return (
        <Autocomplete
            freeSolo
            onInputChange={(event, newValue) => setValue(newValue)}
            options={suggestions}
            renderInput={params => (
                <TextField {...params} label="Search for a location..." margin="normal" variant="outlined" />
            )}
            getOptionLabel={option => option.place_name}
            renderOption={option => {
                return (
                    <div onClick={() => {
                        setViewport({
                            ...viewport,
                            longitude: Number(option.center[0]),
                            latitude: Number(option.center[1])
                        })
                    }}>
                        {option.place_name}
                    </div>
                );
            }}

        />
    );
}

export default AutosuggestWrapper;