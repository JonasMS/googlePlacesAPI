import React from 'react';
import '../styles/QueryBox.css';

const QueryBox = ({ updateSearch, handleSearch }) => (
  <div className="queryBoxContainer">
    <input className="searchInput" onChange={e => { updateSearch(e); }} />
    <button className="search-btn" onClick={() => { handleSearch(); }}>Search</button>
  </div>
);

export default QueryBox;