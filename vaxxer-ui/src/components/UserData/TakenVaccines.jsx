import React, { Component } from 'react';
import TrackImage from '../../images/tracking_small.jpg';
import CertifyImage from './../../images/certify_small.png';


class TakenVaccines extends Component {
    render() {
        return (
            <div>
                <table width="100%" border="1px solid black">
                    <tr align="center">
                        <th padding= "15px">Name</th>
                        <th padding= "15px">ID</th>
                        <th>Date</th>
                        <th>Tracking</th>
                        <th>Certify</th>
                    </tr>
                    <tr align="center">
                        <td padding= "15px">Diphteria</td>
                        <td padding= "15px">#ABC123</td>
                        <td>12/12/2012</td>
                        <td><img src={TrackImage} alt="track" style={{width: '20%' }} /></td>
                        <td><img src={CertifyImage} alt="track" style={{width: '50%'}}/></td>
                    </tr>
                    <tr align="center">
                        <td padding= "15px">H1N1</td>
                        <td padding= "15px">#ABC124</td>
                        <td>12/12/2013</td>
                        <td><img src={TrackImage} alt="track" style={{width: '20%' }} /></td>
                        <td><img src={CertifyImage} alt="track" style={{width: '50%'}}/></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default TakenVaccines;