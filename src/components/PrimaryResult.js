import React from 'react';
// import OpenStatus from './OpenStatus';
import '../styles/PrimaryResult.css';

const PrimaryResult = ({place}) => (
  <div className="primaryResult">
    <div className="image-container">
      <img src={place.info.photos[0].getUrl({maxWidth: 400})} className="primaryPhoto" alt="result" />
    </div>
    <div className="primary-details-container">
      <div className="primaryDetails">

        <div className="details-left">
          <div className="place-name">{place.info.name}</div>
          <div className="place-address">{place.info.vicinity}</div>
        </div>

        <div className="details-right">
          {
            place.info.opening_hours.open_now ?
              <div className='info-open open'>Open</div> :
              <div className="info-open closed">Closed</div>
          }
        </div>

      </div>
    </div>
  </div>
);

export default PrimaryResult;
