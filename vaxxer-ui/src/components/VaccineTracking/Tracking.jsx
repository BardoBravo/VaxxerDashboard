import React, { Component } from 'react';
import trackingImage from '../../images/tracking/us_tracking.png';

class Tracking extends Component {
    render() {
        return (
            <div>
                <img src={{trackingImage}} alt="US_Tracking"/>
            </div>
        )
    }
}