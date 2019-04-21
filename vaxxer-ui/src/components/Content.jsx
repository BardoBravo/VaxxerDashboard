import React, { Component } from 'react';
import NavBar from './NavBar';
import ImmunizationLevel from './UserData/ImmunizatonLevel';
import TakenVaccines from './UserData/TakenVaccines';
import MissingVaccines from './UserData/MissingVaccines';


class Content extends Component {
    render() {
        return (
            <div class="container" style={{marginTop:'30px'}}>
                <div class="row">
                    <div class="col-sm-4">
                    <h2>Cláudio Ramos</h2>
                    <h5>Immnunization Level</h5>
                    {/*<div class="fakeimg">Fake Image</div>*/}
                    <ImmunizationLevel />
                    <p>Quite Good!</p>
                    <h3>Useful Links</h3>
                    <p>Relevant news about vaccines and immunnization campaings </p>
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item">
                        <a class="nav-link active" href="#">UNO</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">How to prevent?</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Benefits from vaccines</a>
                        </li>
                    </ul>
                    <hr class="d-sm-none" />
                    </div>
                    <div class="col-sm-8">
                    <h2>Latest taken vaccines</h2>
                    <h5>Look for recent doses</h5>
                    <TakenVaccines />
                    {/*<div class="fakeimg">Fake Image</div>*/}
                    <p>It has been {"<10>"} years since your last vaccine</p>
                    <p>From here you can generate a certificate in order to prove your taken vaccines</p>
                    <br />
                    <h2>Missing Vaccines</h2>
                    <h5>According to official reports, these are the missing vaccines for you:</h5>
                    <MissingVaccines />
                    {/*<div class="fakeimg">Fake Image</div>*/}
                    <p>You are missing {"<2>"} vaccines</p>
                    <p>Please, check with your health department where you can take your missing vaccines</p>
                    </div>
                </div>
                </div>
        )
    }
}

export default Content;