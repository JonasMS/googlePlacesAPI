import React from 'react';
import OpenStatus from './OpenStatus';

const PrimaryResult = ({place}) => (
  <div className="primaryResult">
    <p>{place.name}</p>
    <img src={place.photos[0].getUrl()} className="primaryPhoto" />
    <div className="primaryDetails">
      <p>{place.vicinity}</p>
    </div>
  </div>
);

export default PrimaryResult;
