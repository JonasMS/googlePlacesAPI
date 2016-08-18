import React from 'react';
// import OpenStatus from './OpenStatus';
import '../styles/PrimaryResult.css';

const PrimaryResult = ({place}) => (
  <div className="primaryResult">
    <img src={place.info.photos[0].getUrl({maxWidth: 400})} className="primaryPhoto" alt="result" />
    <div className="primaryDetails">
      <p>{place.info.name}</p>
      <p>{place.info.vicinity}</p>
    </div>
  </div>
);

export default PrimaryResult;
