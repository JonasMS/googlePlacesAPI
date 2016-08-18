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

      <div className="secondaryDetails">
        <div>{place.info.name}</div>
        <div>{place.info.vicinity}</div>
      </div>

    </div>
  </div>
);

export default SecondaryResult;