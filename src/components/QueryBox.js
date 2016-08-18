import React from 'react';
import { handleSearch } from '../modules/'
import '../styles/QueryBox.css';

const QueryBox = ({ app, updateSearch }) => (
  <div className="queryBoxContainer">
    <input className="searchInput" onChange={e => { updateSearch(e); }} />
    <div className="searchIcon" onClick={() => handleSearch(app)}>
      <i className="fa fa-search fa-lg" aria-hidden="true"></i>
    </div>
  </div>
);

export default QueryBox;