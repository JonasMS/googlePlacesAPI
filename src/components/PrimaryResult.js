import React from 'react';
import OpenStatus from './OpenStatus';

const PrimaryResult = (place) => {
  const imgUrl = place.photos[0].getUrl();

  // company name
  // img
  // location (vicinity)
  // open now

  return (
    <p>{place.name}</p>
    <img src={place.photos[0].getUrl()} className="primaryPhoto">
    <div className="primaryDetails">
      <p>{places.vicinity}</p>
      <OpenStatus status={place.opening_hours.open_now} />
    </div>
  );

};
