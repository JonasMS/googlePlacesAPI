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
            ref={(map) => {
              console.log(map);
              console.log('getMap: ', props.getMap);
              props.getMap(map);
            }}
            defaultZoom={16}
            defaultCenter={{ lat: 37.785441, lng: -122.397595 }}
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
