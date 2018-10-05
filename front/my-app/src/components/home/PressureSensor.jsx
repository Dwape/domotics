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
                    <h6 className="float-left"
                        style={{"padding-left": "85px", "margin-lef": "25px", "margin-top": "7.5px"}}>Interior: 9</h6>
                    <h6 className="float-left"
                        style={{"padding-left": "85px", "margin-lef": "25px", "margin-top": "7.5px"}}>Exterior:
                        14.5</h6>
                </div>
            </div>
        )
    }
}

export default PressureSensor;