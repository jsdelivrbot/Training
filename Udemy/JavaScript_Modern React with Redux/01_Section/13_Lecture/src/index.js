// get React as a JS module
import React from 'react';
// reactDOm
import ReactDOM from 'react-dom'
// import API Key
import getAPIKey from './api_key/api_key'
// api key
const API_KEY = getAPIKey();

// create a new component.  this component should produce some HTML

const App = () => <div>Hello World!</div>;

// take this components generated HTML and put it in the DOM
// React render App
ReactDOM.render(<App />, document.querySelector('.container'));