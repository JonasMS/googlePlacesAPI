import React from 'react';
import '../styles/SecondaryResult.css';
import { handlePlaceClick } from '../modules/mapsAPI';

// thumbnail img on left
// name
// address
// isOpen?

const SecondaryResult = ({context, place, idx}) => (
  <div className="secondaryResult">
    <div
      className="slideoutContainer"
      onClick={() => handlePlaceClick(context, idx + 1) }
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