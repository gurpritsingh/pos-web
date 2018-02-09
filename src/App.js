import React from 'react';
import {
    Route,
    Link
  } from 'react-router-dom';

import SideMenuBar from './components/sideMenuBar/SideMenuBar';
import './App.css';

  
  const App = () => (
   
      <div className="container-fluid">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
  
        <hr/>

        <Route path="/" component={SideMenuBar}/>
      </div>
  )
  

  
  export default App