import React from 'react';
import QueryBox from './QueryBox';
import PrimaryResult from './PrimaryResult';
import SecondaryResult from './SecondaryResult';
import { RESULTS, PANEL_IN, PANEL_OUT } from '../constants';
import '../styles/Panel.css';

const createSecondaries = (app, results) => (
  results.map((place, key) => <SecondaryResult
      place={place}
      app={app}
      key={key}
      idx={key}
    />
  )
);

const Panel = ({app}) => (
  <div className={`panel ${(app.state.display === RESULTS) ? PANEL_IN : PANEL_OUT}`} >
    <div className="results">
      {
        app.state.places.length ?
          <PrimaryResult place={app.state.places[0]} /> : ''
      }
      {
        app.state.places.length > 1 ?
          createSecondaries(app, app.state.places.slice(1)) : ''
      }
    </div>

  </div>
);

export default Panel;
