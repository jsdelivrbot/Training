import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine} from 'react-sparklines';
import WeatherChart from '../components/weather_chart'

class WeatherList extends Component {
  // render weather items
  renderWeather(cityData){
    const cityName = cityData.city.name
    const cityTemp = cityData.list.map(weather => weather.main.temp)
    const cityPressure = cityData.list.map(weather => weather.main.pressure)
    const cityHumidity = cityData.list.map(weather => weather.main.humidity)
    // console.log(cityTemp, cityPressure, cityHumidity);
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td><WeatherChart data={cityTemp} color="orange" units="K" /></td>
        <td><WeatherChart data={cityPressure} color="green" units="hPa"/></td>
        <td><WeatherChart data={cityHumidity} color="black" units="%"/></td>
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
            <th>Temperature (Kelvin)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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