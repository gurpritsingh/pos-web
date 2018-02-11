import React from 'react';

var DashboardContainer = ({ match }) => {
    return (
        <div className="col">
            <h1>{match.params.pathName}</h1>
        </div>
    )
}

export default DashboardContainer;