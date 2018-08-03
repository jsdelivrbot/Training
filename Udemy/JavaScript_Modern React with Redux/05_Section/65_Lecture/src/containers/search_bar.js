import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // default to empty string
    this.state = { searchTerm: '' };
  
    // bind this
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  // change Handler
  
  onInputChange(event){
    console.log(event.target.value);
    this.setState( {searchTerm: event.target.value} )
  }
  
  onFormSubmit(event){
    // don't do your default thing
    event.preventDefault();
    this.props.fetchWeather(this.state.searchTerm);
    // clear search input
    this.setState({ searchTerm: '' })
  }
  
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// hook up fetch weather
function mapDispatchToProps(dispatch){
  // make data flow
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);