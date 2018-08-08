import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App'

it('Test: Shows Comment Box', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<App />, div);
  
  ReactDOM.unmountComponentAtNode(div)
})