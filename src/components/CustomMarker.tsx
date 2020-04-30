import React from 'react';
import { Marker } from 'react-map-gl';
import MarkerIcon from '@material-ui/icons/Room';
import { useSelector, useDispatch } from 'react-redux';
import { setReportDialog, setMarkers, showSpinner, hideSpinner } from '../actions';
import { snackbarMessage } from '../utils/snackbar';
import { deleteReport } from '../utils/fetch';
import { RootState } from '../reducers';
import { Marker as IMarker, CustomMarkerProps } from '../types';

function CustomMarker(props: CustomMarkerProps) {
  const {
    address,
    city,
    postcode,
    description,
    latitude,
    longitude,
    offsetLeft,
    offsetTop,
    reporter,
    subject,
    localIndex,
    dbIndex = null
  } = props;

  const tool = useSelector((state: RootState) => state.tool);
  const markers = useSelector((state: RootState) => state.markers);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    function deleteMarkerLocally() {
      const newMarkers = markers.filter((marker: IMarker, i: number) =>
        i === localIndex ? false : true
      );
      dispatch(setMarkers(newMarkers));
    }

    if (tool === 'delete') {
      if (!dbIndex) return deleteMarkerLocally();
      if (reporter !== 'guest' && reporter !== user)
        return snackbarMessage(
          'Not authorized to delete a report posted by verified user.',
          'warning',
          dispatch
        );
      if (window.confirm('Delete this report?')) {
        dispatch(showSpinner());
        deleteReport({ id: dbIndex })
          .then(() => {
            deleteMarkerLocally();
            snackbarMessage(
              'Report deleted.',
              'success',
              dispatch
            );
          })
          .catch((err) =>
          snackbarMessage(
            err.message,
            'error',
            dispatch
          ))
          .finally(() => dispatch(hideSpinner()));
      }
    } else {
      dispatch(
        setReportDialog({
          address: address || '---',
          city: city || '---',
          postcode: postcode || '---',
          subject,
          description,
          reporter,
          markerIndex: localIndex,
          latitude,
          longitude,
          open: true
        })
      );
    }
  };

  return (
    <Marker latitude={latitude} longitude={longitude} offsetLeft={offsetLeft} offsetTop={offsetTop}>
      <div
        style={{ alignItems: 'center', display: 'flex', fontWeight: 'bold', cursor: 'pointer' }}
        onClick={handleClick}
      >
        <MarkerIcon />
        <span>{subject}</span>
      </div>
    </Marker>
  );
}

export default CustomMarker;
