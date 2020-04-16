import React from 'react';
import { Marker } from 'react-map-gl';
import MarkerIcon from '@material-ui/icons/Room';
import { useSelector, useDispatch } from 'react-redux';
import { openDialog, setDialogContent, setMarkers } from '../actions';
import { deleteReport } from '../utils/fetch';

function CustomMarker(props) {
    const { address, city, postcode, description, latitude, longitude, offsetLeft, offsetTop, reporter, subject, markerIndex, dbIndex } = props;
    const tool = useSelector(state => state.tool);
    const markers = useSelector(state => state.markers);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (tool === 'delete') {

            function updateMarkersLocally() {
                const newMarkers = markers.filter((marker, i) => i === markerIndex ? false : true);
                dispatch(setMarkers(newMarkers));
            }

            if (!dbIndex) return updateMarkersLocally();
            if (reporter !== 'guest') return alert('Not authorized as guest to delete a report posted by admin.');
            if (window.confirm('Delete this marker?')) {
                deleteReport({ id: dbIndex }, res => {
                    const resultMessage = res.recordsets[0][0].result;
                    if (resultMessage === 'Success') {
                        updateMarkersLocally();
                    } else {
                        alert('Failed to delete this report: ' + resultMessage);
                    }
                });
            }

        } else {
            dispatch(setDialogContent({ address, city, postcode, subject, description, reporter, markerIndex, latitude, longitude }));
            dispatch(openDialog());
        }
    };

    return (
        <Marker latitude={latitude} longitude={longitude} offsetLeft={offsetLeft} offsetTop={offsetTop}>
            <div style={{ alignItems: 'center', display: 'flex', fontWeight: 'bold', cursor: 'pointer' }} onClick={handleClick}>
                <MarkerIcon /><span>{subject}</span>
            </div>
        </Marker>
    );
}

export default CustomMarker;