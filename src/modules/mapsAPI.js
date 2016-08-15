export const addMarker = (context, place) => {
  const { location } = place.geometry;
  const marker = new google.maps.Marker({
    map: context.state.map,
    position: location,
  });
  return marker;
};