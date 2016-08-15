import React from 'react';
import '../styles/QueryBox.css';

const QueryBox = ({ handleSearch }) => (
  <div className="queryBoxContainer">
    <input className="searchInput" />
    <button className="search-btn" onClick={() => { handleSearch(); }}>Search</button>
  </div>
);

export default QueryBox;