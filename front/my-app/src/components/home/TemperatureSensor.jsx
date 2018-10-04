import React, {Component} from 'react';
import TemperatureLogo from "../assets/icons/temperature-icon.svg";

class TemperatureSensor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row rectangle">
                    <div className="circle">
                        <img className="logo" src={TemperatureLogo}/>
                    </div>
                    <h2 className="title float-left">Temperatura</h2>
                    <h6 className="stats float-left">Interior: 9</h6>
                    <h6 className="stats float-left">Exterior: 14</h6>
                </div>
            </div>
        )
    }
}

export default TemperatureSensor;