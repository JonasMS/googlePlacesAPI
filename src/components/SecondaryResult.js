import React from 'react';
import '../styles/SecondaryResult.css';
import { handlePlaceClick } from '../modules/';

const SecondaryResult = ({app, place, idx}) => (
  <div className="secondaryResult">
    <div
      className="slideoutContainer"
      onClick={() => handlePlaceClick(app, idx + 1) }
    >

      <div className="thumbnailContainer">
        <img src={place.info.photos[0].getUrl({maxHeight: 100})} className="thumbnailImg" alt="result" />
      </div>
      <div className="secondary-details-container">
        <div className="secondaryDetails">
          <div className="place-name">{place.info.name}</div>
          <div className="place-address">{place.info.vicinity}</div>
        </div>
      </div>

    </div>
  </div>
);

export default SecondaryResult;