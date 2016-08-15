import React, { Component } from 'react';
import QueryBox from './QueryBox';
import { SEARCH, RESULT } from '../constants';
import { addMarker } from '../modules/mapsAPI';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      location: { lat: 37.785441, lng: -122.397595 },
      markers: [],
      display: SEARCH,
      bounds: null,
      map: null,
    }

    this.searchNearby = this.searchNearby.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.searchInput = null;
  }

  componentDidMount() {
    this.searchInput = document.querySelector('.searchInput');

    // init map
    const map = new google.maps.Map(document.querySelector('.map'), {
      center: this.state.location,
      zoom: 16,
      scrollwheel: true,
    });

    // init autocomplete
    const autocomplete = new google.maps.places.Autocomplete(this.searchInput);
    autocomplete.bindTo('bounds', map);

    // update state on autocomplete invocation
    google.maps.event.addDomListener(autocomplete, 'place_changed', () => {
      this.setState({search: this.searchInput.value});
    });

    this.setState({map: map});
  }

  searchNearby(options, callback) {
    const service = new google.maps.places.PlacesService(this.state.map);
    service.nearbySearch(options, callback);
  }

  handleSearch() {
    this.searchNearby({
      location: this.state.location,
      radius: 500,
      name: this.state.search,
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log('results: ', results);
          let marker;
          return results.reduce((markers, result) => {
            marker = addMarker(this, result);
            markers.push(marker);
            return markers;
          }, []);
        }
        console.log(status);
    });
  }

  updateSearch(e) {
    const search = e.target.value;
    this.setState({search: search});
    console.log(search);
  }

  render() {
    return (
      <div className="App">
        <div className="mapContainer">
          <div className="map"></div>
        </div>
        <QueryBox
          updateSearch={this.updateSearch}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;
