import React from 'react';
import { Marker } from 'react-map-gl';
import MarkerSVG from '../svg/marker';

function CustomMarker(props) {
    const { latitude, longitude, offsetLeft, offsetTop, text, description, color } = props;
    return (
        <Marker latitude={latitude} longitude={longitude} offsetLeft={offsetLeft} offsetTop={offsetTop}>
            <div style={{ color, cursor: 'pointer' }} onClick={() => alert(`${description}: ${latitude}, ${longitude}`)}>
                <MarkerSVG /><span>{text}</span>
            </div>
        </Marker>
    );
}

export default CustomMarker;