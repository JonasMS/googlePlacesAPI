import React from 'react';
import { handleSearch } from '../modules/'
import '../styles/Searchbox.scss';

const QueryBox = ({ app, updateSearch, close, active, alt }) => (
  <div className="searchbox">
      <input
        className={`input-search ${active ? 'search-active' : ''}`}
        onChange={e => updateSearch(e) }
      />
      <div className={`icon icon-app icon-search ${active ? '' : 'icon-disabled'}`}>
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
      </div>
      <div className="divider"></div>

      {
        alt ?
        <div className={'icon icon-close'} onClick={() => close() }>
          <i className="fa fa-times fa-2x" aria-hidden="true"></i>
        </div>
        :
        <button
          className='btn'
          disabled={active ? '' : 'disabled'}
          onClick={() => handleSearch(app)}
        >
          Search
        </button>
      }
  </div>
);

export default QueryBox;
