import React from 'react';
import './dashboardContainer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLaptop,faCube,faRupeeSign,faArrowUp,faArrowDown } from '@fortawesome/fontawesome-free-solid';
var DashboardContainer = ({ match }) => {
    return (
        <div className="container-fluid dashboardContainer">
            <h4>Welcome, Needz Delivery and Services PVT LTD</h4>
            <div className="row">
                <div className="col-3">
                    <div className="box tag">
                        <FontAwesomeIcon icon={faLaptop} />
                        <span>START BILLING</span>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="box tag">
                        <FontAwesomeIcon icon={faCube} />
                        <span>MANAGE STOCK</span>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <h4>Sales & Gross Maring - Overview</h4>
            <div className="row">
                <div className="col-2">
                    <div className="box">
                        <span className="tagTitle">Today's Sale</span>
                        <span className="tagAmount"><FontAwesomeIcon icon={faRupeeSign} /> 24,600</span>
                        <span className="tagPerc"><FontAwesomeIcon icon={faArrowDown} /> <span className="tagPercVal">13.4%</span></span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="box">
                        <span className="tagTitle">This Month</span>
                        <span className="tagAmount"><FontAwesomeIcon icon={faRupeeSign} /> 28,600</span>
                        <span className="tagPerc"><FontAwesomeIcon icon={faArrowDown} /> <span className="tagPercVal">13.4%</span></span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="box">
                        <span className="tagTitle">3 Month</span>
                        <span className="tagAmount"><FontAwesomeIcon icon={faRupeeSign} /> 29,600</span>
                        <span className="tagPerc"><FontAwesomeIcon icon={faArrowDown} /> <span className="tagPercVal">13.4%</span></span>
                    </div>
                </div>
            </div>
            <h4>Stock Overview</h4>
            <div className="row">
                <div className="col-2">
                    <div className="box">
                        <span className="tagTitle">Total Product</span>
                        <span className="tagAmount">2,000</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="box">
                        <span className="tagTitle">Published</span>
                        <span className="tagAmount">1,000</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="box">
                        <span className="tagTitle">Out of Stock</span>
                        <span className="tagAmount">200</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="box">
                        <span className="tagTitle">Stock Value</span>
                        <span className="tagAmount">25,00,000</span>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default DashboardContainer;