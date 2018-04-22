// get React as a JS module
import React from 'react';
// reactDOm
import ReactDOM from 'react-dom'

// create a new component.  this component should produce some HTML

const App = function(){
    return <div>Hi!</div>
}

// take this components generated HTML and put it in the DOM
// React render App
ReactDOM.render(App);