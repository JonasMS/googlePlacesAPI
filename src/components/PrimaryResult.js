import React from 'react';
// import OpenStatus from './OpenStatus';
import '../styles/PrimaryResult.css';

const PrimaryResult = ({place}) => (
  <div className="primaryResult">
    <img src={place.photos[0].getUrl({maxWidth: 400})} className="primaryPhoto" alt="result" />
    <div className="primaryDetails">
      <p>{place.name}</p>
      <p>{place.vicinity}</p>
    </div>
  </div>
);

export default PrimaryResult;
