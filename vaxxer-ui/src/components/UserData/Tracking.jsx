import React, { Component } from 'react';
import trackingImage from './../../images/tracking/US_tracking.PNG';

class Tracking extends Component {
    render() {
        return (
            <div>
                <img src={trackingImage} alt="US_Tracking"/>
            </div>
        )
    }
}

export default Tracking;