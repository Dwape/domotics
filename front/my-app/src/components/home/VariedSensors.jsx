import React, {Component} from 'react';
import TemperatureSensor from "./TemperatureSensor";
import HumiditySensor from "./HumiditySensor";
import LightSensor from "./LightSensor";

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
                    <LightSensor interior={this.props.light}/>
                </div>
            </div>
        )
    }
}

export default VariedSensors;