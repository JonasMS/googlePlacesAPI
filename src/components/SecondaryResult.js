import React from 'react';

// thumbnail img on left
// name
// address
// isOpen?

const SecondaryResult = ({place}) => (
  <div className="secondaryResult">
    <img src={place.photos[0].getUrl({maxWidth: 50})} className="thumbnail" alt="result" />
    <div className="secondaryDetails">
      <div>{place.name}</div>
      <div>{place.vicinity}</div>
    </div>
  </div>
);

export default SecondaryResult;