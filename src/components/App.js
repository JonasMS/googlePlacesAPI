import React, { Component } from 'react';
import QueryBox from './QueryBox';
import { SEARCH, RESULT } from '../constants';
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
    this.searchInput;
  }

  componentDidMount() {
    console.log(this.searchNearby);
    // init map
    const map = new google.maps.Map(document.querySelector('.map'), {
      center: this.state.location,
      zoom: 16,
      scrollwheel: true,
    });

    // init autocomplete
    const input = document.querySelector('.searchInput');
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    this.searchInput = document.querySelector('input');
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
      name: this.searchInput.value,
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log('results: ', results);
          return;
        }
        console.log(status);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="mapContainer">
          <div className="map"></div>
        </div>
        <QueryBox
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;
