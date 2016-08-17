import React from 'react';
import QueryBox from './QueryBox';
import PrimaryResult from './PrimaryResult';
import { RESULTS, PANEL_IN, PANEL_OUT } from '../constants';
import '../styles/Panel.css';

const Panel = ({updateSearch, handleSearch, closePanel, state}) => (
  <div className={`panel ${(state.display === RESULTS) ? PANEL_IN : PANEL_OUT}`} >
    <QueryBox
      updateSearch={updateSearch}
      handleSearch={handleSearch}
    />
    <div className="results">
      <div>{state.markers.length && <PrimaryResult place={state.markers[0]} />}</div>
    </div>
  </div>
);

export default Panel;
