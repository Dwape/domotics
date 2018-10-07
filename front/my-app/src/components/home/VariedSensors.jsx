import React, {Component} from 'react';
import TemperatureSensor from "./TemperatureSensor";
import HumiditySensor from "./HumiditySensor";
import PressureSensor from "./PressureSensor";

class VariedSensors extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <TemperatureSensor interior={this.props.temp_int} exterior={this.props.temp_ext}/>
                </div>
                <div className="row" style={{"margin-left": "35px"}}>
                    <HumiditySensor interior={this.props.hum_int} exterior={this.props.hum_ext}/>
                </div>
                <div className="row" style={{"margin-left": "70px"}}>
                    <PressureSensor exterior={this.props.pressure_ext}/>
                </div>
            </div>
        )
    }
}

export default VariedSensors;