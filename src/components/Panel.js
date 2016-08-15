import React from 'react';
import QueryBox from './QueryBox';

const Panel = ({updateSearch, handleSearch}) => (
  <div className="panel">
    <QueryBox
      updateSearch={updateSearch}
      handleSearch={handleSearch}
    />

  </div>
);

export default Panel;
