export const focusSelected = (arr, idx) => {
  const places = arr.slice();
  const temp = places[idx];
  for (let i = idx; i > 0; i--) {
    places[i] = places[i - 1];
  }
  places[0] = temp;
  return places;
};
