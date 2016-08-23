import { addMarker, removeMarkers, panToPlace, searchNearby } from './mapsAPI';
import { focusSelected } from './utils';
import { RESULTS } from '../constants';

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

export const handleSearch = (app, name = app.state.search) => {
  // match panelInput to queryInput
  // app.panelInput.value = app.state.search; // TODO: remove
  app.setState({display: RESULTS});
  if (app.state.places.length) { removeMarkers(app); }

  // execute search
  // place a marker for each search result
  searchNearby(
    app,
    { name, location: app.state.location, radius: 500 },
    (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('results: ', results);
        const places = results.map(result => ({
                      marker: addMarker(app, result),
                      info: result,
                  }));
        panToPlace(app, places[0].info);
        app.setState({places});
        return;
      }
      throw new Error(status); // TODO: verify that is correct
  });
}
