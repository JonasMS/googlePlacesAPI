import React from 'react';
import QueryBox from './QueryBox';
import PrimaryResult from './PrimaryResult';
import SecondaryResult from './SecondaryResult';
import { RESULTS, PANEL_IN, PANEL_OUT } from '../constants';
import '../styles/Panel.css';

const createSecondaries = (results, handleSecondaryClick) => (
  results.map((place, key) => <SecondaryResult
      place={place}
      handleSecondaryClick={handleSecondaryClick}
      key={key}
      idx={key}
    />
  )
);

const Panel = ({updateSearch, handleSearch, closePanel, context, state}) => (
  <div className={`panel ${(state.display === RESULTS) ? PANEL_IN : PANEL_OUT}`} >
    <QueryBox
      updateSearch={updateSearch}
      handleSearch={handleSearch}
    />
    <div className="results">
      {state.places.length && <PrimaryResult place={state.places[0]} />}
      {state.places.length > 1 && createSecondaries(state.places.slice(1, 5), context.handleSecondaryClick)}
    </div>
  </div>
);

export default Panel;
