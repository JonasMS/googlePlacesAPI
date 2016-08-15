import React from 'react';

export OpenStatus = ({status}) => {
  return status ? ( <p className="openStatus open">Open</p> ) :
    ( <p className="openStatus closed">Closed</p> );
};

export default OpenStatus;