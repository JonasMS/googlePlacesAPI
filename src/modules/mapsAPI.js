export const addMarker = (context, place) => {
  const { location } = place.geometry;
  const marker = new google.maps.Marker({
    map: context.state.map,
    position: location,
  });
  return marker;
};

export const removeMarkers = (context) => {
  context.state.markers.forEach(marker => {
    marker.setMap(null);
  });
  context.setState({markers: []});
};
