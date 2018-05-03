import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    // value of input = this.state.term
    this.state = { term: '' }
    // 
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  onInputChange(event){
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }
  
  render(){
    return (
      <form className="input-group">
        {/* change handler on input to change state over time */}
        <input placeholder="Get a Five Day Forecast in your Favorite Cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}