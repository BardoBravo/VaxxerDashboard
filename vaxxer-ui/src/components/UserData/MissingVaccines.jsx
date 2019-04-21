import React, { Component } from 'react';

class MissingVaccines extends Component {
    render() {
        return (
            <div>
                <table width="100%" border="1px solid black">
                    <tr align="center">
                        <th padding= "15px">Name</th>
                        <th padding= "15px">Schedule</th>
                        <th>Reference</th>
                    </tr>
                    <tr align="center">
                        <td padding= "15px">Diphteria</td>
                        <td padding= "15px">12/12/2015</td>
                        <td>Link to local health partner</td>                        
                    </tr>
                    <tr align="center">
                        <td padding= "15px">H1N1</td>
                        <td padding= "15px">12/12/2015</td>
                        <td>Link to local health partner</td>                        
                    </tr>
                </table>
            </div>
        )
    }
}

export default MissingVaccines;