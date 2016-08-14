import React, { Component } from 'react';
import Gmap from './Gmap';
import { SEARCH, RESULT } from '../constants';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      markers: [],
      display: SEARCH
    }
  }
  render() {
    return (
      <div className="App">
      <Gmap markers={this.state.markers} />
      </div>
    );
  }
}

export default App;
