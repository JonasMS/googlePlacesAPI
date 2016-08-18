import React from 'react';
import '../styles/SecondaryResult.css';

// thumbnail img on left
// name
// address
// isOpen?

const SecondaryResult = ({place, handleSecondaryClick, idx}) => (
  <div className="secondaryResult">
    <div
      className="slideoutContainer"
      onClick={() => handleSecondaryClick(idx + 1) }
    >

      <div className="thumbnailContainer">
        <img src={place.photos[0].getUrl({maxHeight: 100})} className="thumbnailImg" alt="result" />
      </div>

      <div className="secondaryDetails">
        <div>{place.name}</div>
        <div>{place.vicinity}</div>
      </div>

    </div>
  </div>
);

export default SecondaryResult;