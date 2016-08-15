import React from 'react';
import QueryBox from './QueryBox';
import { RESULTS, PANEL_IN, PANEL_OUT } from '../constants';
import '../styles/Panel.css';

const Panel = ({updateSearch, handleSearch, display}) => (
  <div className={`panel ${(display === RESULTS) ? PANEL_IN : PANEL_OUT}`} >
    <QueryBox
      updateSearch={updateSearch}
      handleSearch={handleSearch}
    />
  </div>
);

export default Panel;
