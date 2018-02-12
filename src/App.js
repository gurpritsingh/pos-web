import React from 'react';
import {
    Route
  } from 'react-router-dom';

import SideMenuBar from './components/Dashboard/sideMenuBar/SideMenuBar';
import Header from './components/Dashboard/Header/Header';
import DashboardContainer from './components/Dashboard/DashboardContainer/DashboardContainer';
import LoginForm from './components/Login/LoginForm/LoginForm';
import './App.css';

  
  const App = () => (
    <LoginForm/>
    //   <div className="container-fluid">
    //     <div className="row">

    //         <Route path="/" component={SideMenuBar}/>
    //         <div className="col">
    //             <Header />
    //             <Route exact path="/:pathName" component={DashboardContainer} />
    //         </div>
    //     </div>
    //   </div>
  )
  

  
  export default App