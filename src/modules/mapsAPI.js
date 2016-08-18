import { handleMarkerClick } from './eventHandlers';

// Maps API Handlers

export const addMarker = (app, place) => {
  const { location } = place.geometry;
  const marker = new google.maps.Marker({
    map: app.state.map,
    animation: google.maps.Animation.DROP,
    position: location,
  });
  marker.addListener('click', () => handleMarkerClick(app, marker));
  return marker;
};

export const removeMarkers = (app) => {
  app.state.markers.forEach(marker => {
    marker.setMap(null);
  });
  app.setState({markers: [], places:[]});
};

export const panToPlace = (app, place) => {
  const { location } = place.geometry;
  app.state.map.panTo({lat: location.lat(), lng: location.lng()});
};



