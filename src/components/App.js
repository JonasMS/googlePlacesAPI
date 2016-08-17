import React, { Component } from 'react';
import QueryBox from './QueryBox';
import Panel from './Panel';
import {
  SEARCH,
  RESULTS,
  QUERY_IN,
  QUERY_OUT,
} from '../constants';
import { addMarker, removeMarkers } from '../modules/mapsAPI';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      location: { lat: 37.785441, lng: -122.397595 },
      markers: [],
      display: SEARCH,
      bounds: null,
      map: null,
    }

    this.searchNearby = this.searchNearby.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  searchNearby(options, callback) {
    const service = new google.maps.places.PlacesService(this.state.map);
    service.nearbySearch(options, callback);
  }

  handleSearch() {
    if (this.state.search.length) {
      // match panelInput to queryInput
      this.panelInput.value = this.state.search;
      this.setState({display: RESULTS});
      removeMarkers(this);

      // execute search
      // place a marker for each search result
      this.searchNearby({
        location: this.state.location,
        radius: 500,
        name: this.state.search,
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log('results: ', results);
            const markers = results.reduce((collection, result) => {
              collection.push(addMarker(this, result));
              return collection;
            }, []);

            this.setState({markers: results});
            return markers;
          }
          console.log(status);
          return;
      });
    }
  }

  updateSearch(e) {
    const search = e.target.value;
    this.setState({search: search});
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
    console.log('state: ', this.state);
    return (
      <div className="App">
        <div className="mapContainer">
          <div className="map"></div>
        </div>
        <div className={this.state.display === SEARCH ? QUERY_IN : QUERY_OUT }>
          <QueryBox
            updateSearch={this.updateSearch}
            handleSearch={this.handleSearch}
          />
        </div>
        <Panel
          updateSearch={this.updateSearch}
          handleSearch={this.handleSearch}
          closePanel={this.closePanel}
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
