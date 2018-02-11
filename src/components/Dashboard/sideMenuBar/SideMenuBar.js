import React from 'react';
import {Link} from 'react-router-dom';
import './sideMenuBar.css';

var SideMenuList = (props) => {
    return props.list.map((link)=> <li key={link.pathName}><Link to={link.path}>{link.pathName}</Link></li>);
}   

var SideMenuBar = ({match}) => {
  let list=[
        {
            pathName: 'Home',
            path: '/'
        },
        {
            pathName: 'Customers',
            path: '/customers'
        },
        {
            pathName: 'Stock',
            path: '/stock'
        },
        {
            pathName: 'Orders',
            path: '/orders'
        },
        {
            pathName: 'Products',
            path: '/customers'
        },
        {
            pathName: 'Sales',
            path: '/sales'
        }
    ]   

    return (
        <div className="sideMenuBar col-lg-3">
            <SideMenuList list={list} />
        </div>
    )
}



export default SideMenuBar;