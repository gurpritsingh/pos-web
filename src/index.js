import React from 'react';
import ReactDOM from 'react-dom';
import './globalAssets/style.css';
import './globalAssets/style_responsive.css';
import './globalAssets/bootstrap-grid.css';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router
  } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
