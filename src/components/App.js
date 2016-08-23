import React, { Component } from 'react';
import Searchbox from './Searchbox';
import Panel from './Panel';
import { SEARCH, RESULTS } from '../constants';
import {
  addMap,
  initMap,
  initAutocomplete,
  addMarker,
  removeMarkers,
  panToPlace
} from '../modules/';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      location: { lat: 37.785441, lng: -122.397595 },
      markers: [],
      places: [],
      display: SEARCH,
      bounds: null,
      map: null,
    }

    this.updateSearch = this.updateSearch.bind(this);
    this.closePanel = this.closePanel.bind(this);
    this.searchbox = null;
  }

  componentDidMount() {
    this.searchbox = document.querySelector('input');

    addMap(document.head, () => {
      const { map, bounds } = initMap(this, document.querySelector('.map'));
      initAutocomplete(this, this.searchbox, map, bounds);
      this.setState({map, bounds});
    });
  }

  updateSearch(e) {
    const search = e.target.value;
    this.setState({search});
  }

  closePanel() {
    this.setState({
      search: '',
      display: SEARCH,
    });
    this.searchbox.value = '';
    removeMarkers(this);
  }

  render() {
    return (
      <div className="App">

        <div className="mapContainer">
          <div className="map"></div>
        </div>

        <Searchbox
          app={this}
          updateSearch={this.updateSearch}
          close={this.closePanel}
          active={!!this.state.search.length}
          alt={this.state.display === RESULTS}
        />

        <Panel app={this} />

      </div>
    );
  }
}

export default App;
