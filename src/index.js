import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Global style
// eslint-disable-next-line
injectGlobal`
  body {
    background-color: ghostwhite;
    padding: 0;
    margin: 0;

  }
`
