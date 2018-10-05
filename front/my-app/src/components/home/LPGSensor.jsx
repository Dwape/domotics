import React, {Component} from 'react';
import LPGLogo from "../assets/icons/lpg-icon.svg";

class LPGSensor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row rectangle">
                    <div className="circle">
                        <img className="logo" src={LPGLogo}/>
                    </div>
                    <h2 className="title float-left">LPG</h2>
                    <h6 className="stats float-left">Interior: {this.props.interior} ppm</h6>
                    <h6 className="stats float-left">Exterior: 14</h6>
                </div>
            </div>
        )
    }
}

export default LPGSensor;