import React from 'react';
import {Link} from 'react-router-dom';
import './sideMenuBar.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
var SideMenuList = (props) => {
    return props.list.map((link)=> <li key={link.pathName}><Link to={link.path}><FontAwesomeIcon icon={link.icon} /><span>{link.pathName}</span></Link></li>);
}   

var SideMenuBar = ({match}) => {
  let list=[
        {
            pathName: 'Home',
            path: '/',
            icon:''
        },
        {
            pathName: 'Customers',
            path: '/customers',
            icon:''
        },
        {
            pathName: 'Stock',
            path: '/stock',
            icon:''
        },
        {
            pathName: 'Orders',
            path: '/orders',
            icon:''
        },
        {
            pathName: 'Products',
            path: '/customers',
            icon:''
        },
        {
            pathName: 'Sales',
            path: '/sales',
            icon:''
        }
    ]   

    return (
        <div>
             <div class="left-container" id="mySidenav">
        <ul class="menu">
            <li class="header">
                <a href="javascript:">
                    POS2ALL
                </a>
            </li>

            <SideMenuList list={list} />
            <li class="active">
                <a href="javascript:">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="javascript:">
                    <i class="fas fa-user"></i>
                    <span>Customers</span>
                </a>
            </li>
            <li>
                <a href="javascript:">
                    <i class="fas fa-sticky-note"></i>
                    <span>Stock</span>
                </a>
            </li>
            <li>
                <a href="javascript:">
                    <i class="fas fa-sticky-note"></i>
                    <span>Sales</span>
                </a>
            </li>
            <li>
                <a href="javascript:">
                    <i class="fas fa-book"></i>
                    <span>Vendors</span>
                </a>
            </li>
            <li>
                <a href="javascript:">
                    <i class="fas fa-comments"></i>
                    <span>Discounts</span>
                </a>
            </li>
            <li>
                <a href="javascript:">
                    <i class="fas fa-cogs"></i>
                    <span>Store Settings</span>
                </a>
            </li>
            <li>
                <a href="javascript:">
                    <i class="fas fa-chart-bar"></i>
                    <span>Reports</span>
                </a>
            </li>
            <li>
                <a href="javascript:">
                    <i class="fab fa-centercode"></i>
                    <span>Help Center</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="right-container">
        <div class="top_box">
            <div class="Field Field--is-search">
                <button type="button" class="Btn SearchBox-submitBtn mobile-menu" onclick="openNav()">
                    <i class="fas fa-bars"></i>
                </button>
                <button type="button" class="Btn SearchBox-submitBtn">
                    <i class="fas fa-search"></i>
                </button>

                <input type="search" name="search" placeholder="Search transactions, invoices or help" class="SearchBox-query" />
                <button type="button" class="Btn SearchBox-submitBtn hide-btn" onclick="openNav()">
                    <i class="fas fa-bell"></i>
                </button>
                <button type="button" class="Btn SearchBox-submitBtn hide-btn" onclick="opensubmenu()">
                    <span> Hitashi Garg </span>
                    <i class="fas fa-angle-down"></i>
                    <ul class="sub_menu" id="submenu">
                        <li>Status Online</li>
                        <li>Account setting</li>
                        <li>Feedback</li>
                        <li>Logout</li>
                    </ul>
                </button>
                <button type="button" class="Btn SearchBox-submitBtn hide-btn">
                    <img class="user" src="image/01.png"/>
                </button>

            </div>
            <div class="Field Field--is-search show-btn">
                <button type="button" class="Btn SearchBox-submitBtn" onclick="openNav()">
                    <i class="fas fa-bell"></i>
                </button>
                <button type="button" class="Btn SearchBox-submitBtn" onclick="opensubmenuMobile()">
                    <span> Hitashi Garg </span>
                    <i class="fas fa-angle-down"></i>
                    <ul class="sub_menu" id="submenuMobile">
                        <li>Status Online</li>
                        <li>Account setting</li>
                        <li>Feedback</li>
                        <li>Logout</li>
                    </ul>
                </button>
                <button type="button" class="Btn SearchBox-submitBtn">
                    <img class="user" src="image/01.png"/>
                </button>
            </div>
        </div>
    </div>
            </div>
      
    )
}



export default SideMenuBar;