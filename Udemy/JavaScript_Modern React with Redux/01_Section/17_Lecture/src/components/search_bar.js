// import React from 'react';
// importing Component in this way is the same as const Component = React.Component
import React, { Component } from 'react';

// ===============================
// const SearchBar = () => {
//     return <input />;
// }
// export default SearchBar;
// ===============================^^ Functional Component


// ========================== This is a Class Component
// define class SearchBar and give it access to all the functionality of React.Component.
// class SearchBar extends React.Component {
// simplify the extendes React.Component by importing it on top
class SearchBar extends Component {
  constructor(props){
    super(props);
    // input will be the value of term
    this.state = { term: '' }
  }
  // need a render method on a class based component.
  render() {
    // return <input onChange={this.onInputChange} /> ;
    return <input onChange={event => console.log(event.target.value)} /> ;
  }
  
  // onInputChange(event){
  //   // const inputVal = event.target.value;
  //   // console.log(event.target.value);
  //   console.log(event.target);
  // }
}
// ========================== ^^ Class Component

export default SearchBar;