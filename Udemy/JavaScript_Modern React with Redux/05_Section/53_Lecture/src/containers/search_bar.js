import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // default to empty string
    this.state = { searchTerm: '' };
  
    // bind this
    this.onInputChange = this.onInputChange.bind(this);
  }
  // change Handler
  
  onInputChange(event){
    console.log(event.target.value);
    this.setState( {searchTerm: event.target.value} )
  }
  
  render() {
    return (
      <form className="input-group">
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

export default SearchBar;