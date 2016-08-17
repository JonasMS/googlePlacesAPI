import React from 'react';
import QueryBox from './QueryBox';
import PrimaryResult from './PrimaryResult';
import SecondaryResult from './SecondaryResult';
import { RESULTS, PANEL_IN, PANEL_OUT } from '../constants';
import '../styles/Panel.css';

const createSecondaries = results => (
  results.map(place => <SecondaryResult place={place} />)
);

const Panel = ({updateSearch, handleSearch, closePanel, state}) => (
  <div className={`panel ${(state.display === RESULTS) ? PANEL_IN : PANEL_OUT}`} >
    <QueryBox
      updateSearch={updateSearch}
      handleSearch={handleSearch}
    />
    <div className="results">
      {state.markers.length && <PrimaryResult place={state.markers[0]} />}
      {state.markers.length > 1 && createSecondaries(state.markers.slice(1, 5))}
    </div>
  </div>
);

export default Panel;
