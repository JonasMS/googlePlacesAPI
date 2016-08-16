import React from 'react';
import QueryBox from './QueryBox';
import PrimaryResult from './PrimaryResult';
import { RESULTS, PANEL_IN, PANEL_OUT } from '../constants';
import '../styles/Panel.css';

const Panel = ({updateSearch, handleSearch, closePanel, state}) => (
  <div className={`panel ${(state.display === RESULTS) ? PANEL_IN : PANEL_OUT}`} >
    <div className="closeIcon">
      <i
      className="fa fa-times fa-lg"
      aria-hidden="true"
      onClick={closePanel}
      ></i>
    </div>
    <QueryBox
      updateSearch={updateSearch}
      handleSearch={handleSearch}
    />
    <div className="results">
      {state.markers.length}
      {state.markers.length && <PrimaryResult place={state.markers[0]} />}
    </div>
  </div>
);

export default Panel;
