import React from 'react';
import ReactDOM from 'react-dom';
import './globalcss/bootstrap-reboot.css';
import './globalcss/bootstrap-grid.css';
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
