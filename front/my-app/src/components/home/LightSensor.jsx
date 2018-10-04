import React, {Component} from 'react';
import LightLogo from "../assets/icons/light-icon.svg";

class LightSensor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row rectangle">
                    <div className="circle">
                        <img className="logo" src={LightLogo}/>
                    </div>
                    <h2 className="title float-left">Luz</h2>
                    <h6 className="stats float-left">Interior: 9</h6>
                    <h6 className="stats float-left">Exterior: 14</h6>
                </div>
            </div>
        )
    }
}

export default LightSensor;