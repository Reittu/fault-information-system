import React from 'react';
import { Marker } from 'react-map-gl';
import MarkerIcon from '@material-ui/icons/Room';
import { useSelector, useDispatch } from 'react-redux';
import { setReportDialog, setMarkers, setSnackbar, showSpinner, hideSpinner } from '../actions';
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
      // TODO: implement authentication (e.g. AWS Cognito)
      if (reporter !== 'guest')
        return dispatch(
          setSnackbar({
            message: 'Not authorized as guest to delete a report posted by admin.',
            open: true,
            severity: 'warning'
          })
        );
      if (window.confirm('Delete this report?')) {
        dispatch(showSpinner())
        deleteReport({ id: dbIndex })
          .then(() => {
            deleteMarkerLocally();
            dispatch(
              setSnackbar({
                message: 'Report deleted.',
                open: true,
                severity: 'success'
              })
            )
          })
          .catch((err) =>
            dispatch(
              setSnackbar({
                message: err.message,
                open: true,
                severity: 'error'
              })
            )
          ).finally(() => dispatch(hideSpinner()))
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
