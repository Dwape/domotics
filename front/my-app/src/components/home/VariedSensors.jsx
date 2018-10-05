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
                <div className="row">
                    <HumiditySensor interior={this.props.hum_int} exterior={this.props.hum_ext}/>
                </div>
                <div className="row">
                    <PressureSensor exterior={this.props.pressure_ext}/>
                </div>
            </div>
        )
    }
}

export default VariedSensors;