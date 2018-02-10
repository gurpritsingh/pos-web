import React from 'react';
import {
    Route
  } from 'react-router-dom';

import SideMenuBar from './components/sideMenuBar/SideMenuBar';
import Header from './components/Header/Header';
import './App.css';

  
  const App = () => (
   
      <div className="container-fluid">
        <div className="row">

            <Route path="/" component={SideMenuBar}/>
            <Header />
        </div>
      </div>
  )
  

  
  export default App