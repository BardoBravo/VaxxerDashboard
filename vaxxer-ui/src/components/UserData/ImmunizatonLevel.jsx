import React, { Component } from 'react';
import userPercentage from '../../images/circular bar.png';

class ImmunizationLevel extends Component {
    render() {
        return (
            <div>
                <img src={userPercentage} alt="Immunization level" style={{width: "100%"}} />
            </div>
        )
    }
}

export default ImmunizationLevel;