import React from 'react';
import { handlePlaceClick } from '../modules/';
import { placeholderImgUrl, thumbnailPhotoOptions } from '../constants';
import '../styles/SecondaryResult.scss';

const SecondaryResult = ({app, place, idx}) => (
    <div className="secondary-result">
      <div
        className="slideout-container"
        onClick={() => handlePlaceClick(app, idx + 1) }
      >

        <div className="thumbnail-container">
          <img
            alt="result"
            src={
              place.info.photos ?
                place.info.photos[0].getUrl(thumbnailPhotoOptions) : placeholderImgUrl
            }
          />
        </div>

        <div className="secondary-details-container">
          <div className="secondary-details">
            <div className="place-name">{place.info.name}</div>
            <div className="place-address">{place.info.vicinity}</div>
          </div>
        </div>

      </div>
    </div>
);

export default SecondaryResult;
