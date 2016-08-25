import { handleMarkerClick } from './eventHandlers';

// Maps API Handlers

export const addMap = (node, callback) => {
  const googleKey = process.env.GOOGLE_API_ID;
  const map_js = document.createElement('script');
  map_js.type = 'text/javascript';
  map_js.src = `https://maps.googleapis.com/maps/api/js?key=${googleKey}&libraries=places`;
  map_js.onload = callback;
  node.appendChild(map_js);
};

export const initMap = (app, node) => (
  new google.maps.Map(
    node,
    {
      center: app.state.location,
      zoom: 16,
      scrollwheel: true,
    }
  )
);

export const initAutocomplete = (app, inputNode, map) => {
  let autocomplete = new google.maps.places.Autocomplete(inputNode);
  autocomplete.bindTo('bounds', map);

  // update state on autocomplete selection
  google.maps.event.addDomListener(autocomplete, 'place_changed', () => {
    app.setState({search: inputNode.value});
  });

  // update search bounds and location on bounds (viewport) change
  google.maps.event.addDomListener(map, 'bounds_changed', () => {
    const loc = map.getBounds().getCenter();
    app.setState({location: { lat: loc.lat(), lng: loc.lng() }});
    autocomplete.bindTo('bounds', map);

  });
};

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
  app.state.places.forEach(place => {
    place.marker.setMap(null);
  });
  app.setState({markers: [], places:[]});
};

export const panToPlace = (app, place) => {
  const { location } = place.geometry;
  app.state.map.panTo({lat: location.lat(), lng: location.lng()});
};

export const searchNearby = (app, options, callback) => {
    const service = new google.maps.places.PlacesService(app.state.map);
    service.nearbySearch(options, callback);
}
