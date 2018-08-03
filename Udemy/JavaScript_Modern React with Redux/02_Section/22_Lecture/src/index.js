// get React as a JS module
import React, { Component } from 'react';
// reactDOm
import ReactDOM from 'react-dom'
// import searchBar - needs a file path reference. Don't need .js if it is a .js file.
import SearchBar from './components/search_bar'
// import API Key
import getAPIKey from './api_key/api_key'
// api key
const API_KEY = getAPIKey();
// npm youtube api search
import YTSearch from 'youtube-api-search';


// create a new component.  this component should produce some HTML
// from functional to class.  will keep track of the videos on its state....
class App extends Component {
  constructor(props){
    super(props);
    
    this.state = { videos: [] };
    
    // so see data right away
    // fetching data
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      // console.log(data);
      this.setstate({ videos: data })
    })
  }
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// take this components generated HTML and put it in the DOM
// React render App
ReactDOM.render(<App />, document.querySelector('.container'));

// Steps for converting from function component to class component
// 1.  need to make sure to import Component from React (or use React.Component...)
// 2.  redefine the function from const to class
// 3.  extend the function with Component to get its methods
// 4.  add a render method, put your data in there.
// 5.  constructor(if needed, but probably needed, why else would you convert?)