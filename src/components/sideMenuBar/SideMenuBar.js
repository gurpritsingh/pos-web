import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideMenuBar extends Component {
    render(){
        return (
            <div className="sideMenuBar col col-lg-3">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                    <li><Link to="/stock">Stock</Link></li>
                </ul>            
            </div>
        )
    }
}

export default SideMenuBar;