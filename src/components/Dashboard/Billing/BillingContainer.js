import React from 'react';
import './billing.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt,faRupeeSign } from '@fortawesome/fontawesome-free-solid';
var billingContainer = ({ match }) => {
    return (
        <div className="container-fluid dashboardContainer">
            <h1>Stock Management</h1>
            <div className="row">
                <div className="col-3">
                    <div className="box">
                        <FontAwesomeIcon icon={faMoneyBillAlt} />
                        <span> <FontAwesomeIcon icon={faRupeeSign} /> 25,000</span>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="box">
                        <FontAwesomeIcon icon={faMoneyBillAlt} />
                        <span> <FontAwesomeIcon icon={faRupeeSign} /> 25,000</span>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default billingContainer;