import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  // state = {  }
  render() {
    return (
      // this.refs.map
      <div ref="map"></div>
    );
  }
}

export default GoogleMap;