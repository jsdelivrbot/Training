import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  // render weather items
  renderWeather(cityData){
    const cityName = cityData.city.name
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
      </tr>
    );
  }
  
  // state = {  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {/* rows are my data */}
          {/* // js var */}
          {
            this.props.weather.map(this.renderWeather)
          }
        </tbody>
      </table>
    );
  }
}

// { weather } = const weather = state.weather
function mapStateToProps({ weather }){
  // weather key is in the reducer...thats why weather
  // return { weather: state.weather (or weather) } --\/ below is same for new param
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);