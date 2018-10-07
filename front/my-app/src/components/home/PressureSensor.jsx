import React, {Component} from 'react';
import PressureLogo from "../assets/icons/pressure-icon.svg";

class PressureSensor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row rectangle">
                    <div className="circle">
                        <img className="logo" src={PressureLogo}/>
                    </div>
                    <h2 className="title float-left">Presión</h2>
                    <h6 className="float-left" style={{"margin-left": "95px", "margin-top": "22.5px"}}>
                        Exterior: {this.props.exterior}
                    </h6>
                </div>
            </div>
        )
    }
}

export default PressureSensor;