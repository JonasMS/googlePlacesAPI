import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

const Gmap = (props) => {
  return (
    <div className="mapContainer">
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
          >
            {props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                />
              );
            })}
          </GoogleMap>
        }
      />
    </div>
  );
}

export default Gmap;
