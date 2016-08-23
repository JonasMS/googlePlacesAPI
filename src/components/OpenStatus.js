import React from 'react';

const OpenStatus = ({status}) => {
  return status ? ( <p className="openStatus open">Open</p> ) :
    ( <p className="openStatus closed">Closed</p> );
};

export default OpenStatus;