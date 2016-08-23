import React from 'react';
// import OpenStatus from './OpenStatus';
import { placeholderImgUrl, primaryPhotoOptions } from '../constants';
import '../styles/PrimaryResult.scss';

const PrimaryResult = ({place}) => (
  <div className="primary-result">
    <div className="image-container">
      <img
        className="primary-photo" alt="result"
        src={
          place.info.photos ?
            place.info.photos[0].getUrl(primaryPhotoOptions) : placeholderImgUrl
        }
      />
    </div>
    <div className="primary-details-container">
      <div className="primary-details">

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
