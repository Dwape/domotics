import React, {Component} from 'react';
import LightLogo from "../assets/icons/light-icon.svg";

class LightSensor extends Component {
    render() {
        //we may need to fix light sensor value so that it is higher the more light there is.
        return (
            <div className="container-fluid">
                <div className="row rectangle">
                    <div className="circle">
                        <img className="logo" src={LightLogo}/>
                    </div>
                    <h2 className="title float-left">Light</h2>
                    <h6 className="stats float-left">Interior: {this.props.interior} Lux</h6>
                    <h6 className="stats float-left">Exterior: 14</h6>
                </div>
            </div>
        )
    }
}

export default LightSensor;