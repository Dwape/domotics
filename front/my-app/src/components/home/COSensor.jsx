import React, {Component} from 'react';
import COLogo from "../assets/icons/temperature-icon.svg";

class COSensor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row rectangle">
                    <div className="circle">
                        <img className="logo" src={COLogo}/>
                    </div>
                    <h2 className="title float-left">CO</h2>
                    <h6 className="stats float-left">Interior: {this.props.interior} ppm</h6>
                    <h6 className="stats float-left">Exterior: 14</h6>
                </div>
            </div>
        )
    }
}

export default COSensor;