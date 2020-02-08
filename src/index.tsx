import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './app/App';
window.onload = function() {
  ReactDom.render(<App />, document.getElementById('root'));
};
