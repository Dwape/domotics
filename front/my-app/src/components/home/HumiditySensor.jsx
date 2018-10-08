import React, {Component} from 'react';
import HumidityLogo from "../assets/icons/humidity-icon.svg";

class HumiditySensor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div
                    className={(this.props.isOk(this.props.interior, this.props.min, this.props.max) ? "" : "blink") + " row rectangle"}>
                    <div className="circle">
                        <img className="logo" src={HumidityLogo}/>
                    </div>
                    <h2 className="title float-left">Humedad</h2>
                    <h6 className="float-left" style={{"margin-left": "30px", "margin-top": "7.5px"}}>
                        Interior: {this.props.interior} %
                    </h6>
                    <h6 className="float-left" style={{"margin-left": "30px", "margin-top": "7.5px"}}>
                        Exterior: {this.props.exterior} %
                    </h6>
                </div>
            </div>
        )
    }
}

export default HumiditySensor;