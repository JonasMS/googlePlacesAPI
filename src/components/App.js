import React, { Component } from 'react';
import QueryBox from './QueryBox';
import Panel from './Panel';
import {
  SEARCH,
  RESULTS,
  QUERY_IN,
  QUERY_OUT,
} from '../constants';
import { addMarker, removeMarkers, panToPlace } from '../modules/';
import '../styles/App.css';

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
    this.queryInput = null;
    this.panelInput = null;
  }

  componentDidMount() {
    this.queryInput = document.querySelector('.query_in input');
    this.panelInput = document.querySelector('.panel_out input');

    // init map
    const map = new google.maps.Map(document.querySelector('.map'), {
      center: this.state.location,
      zoom: 16,
      scrollwheel: true,
    });

    // init autocomplete
    [this.queryInput, this.panelInput].forEach(input => {
      let autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);

      // update state on autocomplete invocation
      google.maps.event.addDomListener(autocomplete, 'place_changed', () => {
        this.setState({search: input.value});
      });
    });

    this.setState({map: map});
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
    this.queryInput.value = '';
    removeMarkers(this);
  }

  render() {
    return (
      <div className="App">

        <div className="mapContainer">
          <div className="map"></div>
        </div>

        <div className={this.state.display === SEARCH ? QUERY_IN : QUERY_OUT }>
          <QueryBox
            updateSearch={this.updateSearch}
            app={this}
          />
        </div>

        <Panel app={this} />

      </div>
    );
  }
}

export default App;
