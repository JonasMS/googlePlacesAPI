import { panToPlace } from './mapsAPI';
import { focusSelected } from './utils';

// Maps Event Handlers

export const handlePlaceClick = (app, idx) => {
    const { places } = app.state;
    panToPlace(app, places[idx].info);
    app.setState({places: focusSelected(places, idx)});
}

export const handleMarkerClick = (app, marker) => {
  // find idx of given place in state.places array
  const idx = app.state.places.reduce((targetIdx, place, i) => (
   (targetIdx === -1 && place.marker === marker) ? i : targetIdx
  ), -1);
  if (idx > -1) {
    handlePlaceClick(app, idx);
    return;
  }
  throw new Error('marker does not correspond to a place in state');
}
