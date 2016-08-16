import React from 'react';
import '../styles/QueryBox.css';

const QueryBox = ({ updateSearch, handleSearch }) => (
  <div className="queryBoxContainer">
    <input className="searchInput" onChange={e => { updateSearch(e); }} />
    <div className="searchIcon" onClick={handleSearch}>
      <i className="fa fa-search fa-lg" aria-hidden="true"></i>
    </div>
  </div>
);

export default QueryBox;