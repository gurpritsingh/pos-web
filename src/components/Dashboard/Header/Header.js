import React from 'react';
import backgroundImage from '../../../globalAssets/images/01.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars,faSearch,faBell,faAngleDown } from '@fortawesome/fontawesome-free-solid';
var Header = () => {
    return (
        <div className="top_box">
            <div className="Field Field--is-search">
                <button type="button" className="Btn SearchBox-submitBtn mobile-menu" onclick="openNav()">
                <FontAwesomeIcon icon={faBars} />
                </button>
                <button type="button" className="Btn SearchBox-submitBtn">
                <FontAwesomeIcon icon={faSearch} />
                </button>

                <input type="search" name="search" placeholder="Search transactions, invoices or help" className="SearchBox-query" />
                <button type="button" className="Btn SearchBox-submitBtn hide-btn" onclick="openNav()">
                <FontAwesomeIcon icon={faBell} />
                </button>
                <button type="button" className="Btn SearchBox-submitBtn hide-btn" onclick="opensubmenu()">
                    <span> Hitashi Garg </span>
                    <FontAwesomeIcon icon={faAngleDown} />
                    <ul className="sub_menu" id="submenu">
                        <li>Status Online</li>
                        <li>Account setting</li>
                        <li>Feedback</li>
                        <li>Logout</li>
                    </ul>
                </button>
                <button type="button" className="Btn SearchBox-submitBtn hide-btn">
                     <img className="user" src={backgroundImage}/>
                </button>

            </div>
            <div className="Field Field--is-search show-btn">
                <button type="button" className="Btn SearchBox-submitBtn" onclick="openNav()">
                    <i className="fas fa-bell"></i>
                </button>
                <button type="button" className="Btn SearchBox-submitBtn" onclick="opensubmenuMobile()">
                    <span> Hitashi Garg </span>
                    <i className="fas fa-angle-down"></i>
                    <ul className="sub_menu" id="submenuMobile">
                        <li>Status Online</li>
                        <li>Account setting</li>
                        <li>Feedback</li>
                        <li>Logout</li>
                    </ul>
                </button>
                <button type="button" className="Btn SearchBox-submitBtn">
                    <img className="user" src="image/01.png"/>
                </button>
            </div>
        </div>
       
    
    )
}


export default Header;