// get React as a JS module
import React from 'react';
// reactDOm
import ReactDOM from 'react-dom'
// import searchBar - needs a file path reference. Don't need .js if it is a .js file.
import SearchBar from './components/search_bar'
// import API Key
import getAPIKey from './api_key/api_key'
// api key
const API_KEY = getAPIKey();

// create a new component.  this component should produce some HTML

const App = () => (
  <div>
    <SearchBar />
  </div>
);

// take this components generated HTML and put it in the DOM
// React render App
ReactDOM.render(<App />, document.querySelector('.container'));