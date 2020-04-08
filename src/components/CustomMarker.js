import React from 'react';
import { Marker } from 'react-map-gl';
import MarkerSVG from '../svg/marker';
import { useSelector, useDispatch } from 'react-redux';
import { openDialog, setDialogContent, setMarkers } from '../actions';

function CustomMarker(props) {
    const { latitude, longitude, offsetLeft, offsetTop, text, description, color, markerIndex } = props;
    const tool = useSelector(state => state.tool);
    const markers = useSelector(state => state.markers);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (tool === 'delete' && window.confirm('Delete this marker?')) {
            const newMarkers = markers.filter((marker, i) => i === markerIndex ? false : true);
            dispatch(setMarkers(newMarkers));
        } else {
            dispatch(setDialogContent({ text, description, markerIndex }));
            dispatch(openDialog());
        }
    };
    
    return (
        <Marker latitude={latitude} longitude={longitude} offsetLeft={offsetLeft} offsetTop={offsetTop}>
            <div style={{ color, cursor: 'pointer' }} onClick={handleClick}>
                <MarkerSVG /><span>{text}</span>
            </div>
        </Marker>
    );
}

export default CustomMarker;