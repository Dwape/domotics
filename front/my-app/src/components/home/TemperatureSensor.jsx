import React, {Component} from 'react';
import TemperatureLogo from "../assets/icons/temperature-icon.svg";

class TemperatureSensor extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row rectangle" id="temperature-alert">
                    <div className="circle" id="temperature-alert">
                        <img className="logo" src={TemperatureLogo}/>
                    </div>
                    <h2 className="title float-left">Temperatura</h2>
                    <h6 className="float-left" style={{"margin-left": "2.5px", "margin-top": "7.5px"}}>
                        Interior: {this.props.interior} ºC
                    </h6>
                    <h6 className="float-left" style={{"margin-left": "2.5px", "margin-top": "7.5px"}}>
                        Exterior: {this.props.exterior} ºC
                    </h6>
                </div>
            </div>
        )
    }
}

export default TemperatureSensor;