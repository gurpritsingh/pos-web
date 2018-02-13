import React from 'react';
import {Link} from 'react-router-dom';
import './sideMenuBar.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHome,faUser,faStickyNote,faBook,faComment,faCog,faChartBar,faLifeRing } from '@fortawesome/fontawesome-free-solid';
var SideMenuList = (props) => {
    return props.list.map((link)=> <li key={link.pathName}><Link to={link.path}><FontAwesomeIcon icon={link.icon} /><span>{link.pathName}</span></Link></li>);
}   

var SideMenuBar = ({match}) => {
  let list=[
        {
            pathName: 'Home',
            path: '/',
            icon: faHome
        },
        {
            pathName: 'Customers',
            path: '/customers',
            icon:faUser
        },
        {
            pathName: 'Stock',
            path: '/stock',
            icon:faStickyNote
        },
        {
            pathName: 'Sales',
            path: '/sales',
            icon:faStickyNote
        },
        {
            pathName: 'Vendors',
            path: '/vendors',
            icon:faBook
        },
        {
            pathName: 'Discounts',
            path: '/discounts',
            icon:faComment
        },
        {
            pathName: 'Store Settings',
            path: '/storeSettings',
            icon:faCog
        },
        {
            pathName: 'Reports',
            path: '/reports',
            icon:faChartBar
        },
        {
            pathName: 'Help Center',
            path: '/helpCenter',
            icon:faLifeRing
        }
    ]   

    return (
       
             <div className="left-container" id="mySidenav">
        <ul className="menu">
            <li className="header">
                <a href="/home">
                    POS2ALL
                </a>
            </li>
            <SideMenuList list={list} />
        </ul>
    </div>      
    )
}



export default SideMenuBar;