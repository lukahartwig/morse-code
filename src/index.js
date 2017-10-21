import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  html, body {
      height: 100%;
      font-size: 16px;  
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'PT Mono', monospace;
  }
  
  #root {
      height: 100%;
  }
`;

ReactGA.initialize('UA-108403183-1');

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
