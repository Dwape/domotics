import React, {Component} from 'react';
import TemperatureSensor from "./TemperatureSensor";
import HumiditySensor from "./HumiditySensor";
import PressureSensor from "./PressureSensor";

class VariedSensors extends Component {

    static isCurrentOk(current, min, max) {
        return min <= current && max >= current;
    }

    isOkRef = VariedSensors.isCurrentOk.bind(this);

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <TemperatureSensor interior={this.props.temp_int}
                                       exterior={this.props.temp_ext}
                                       max={this.props.tempMax}
                                       min={this.props.tempMin}
                                       isOk={this.isOkRef}/>
                </div>
                <div className="row" style={{"margin-left": "35px"}}>
                    <HumiditySensor interior={this.props.hum_int}
                                    exterior={this.props.hum_ext}
                                    max={this.props.humMax}
                                    min={this.props.humMin}
                                    isOk={this.isOkRef}/>
                </div>
                <div className="row" style={{"margin-left": "70px"}}>
                    <PressureSensor exterior={this.props.pressure_ext}/>
                </div>
            </div>
        )
    }
}

export default VariedSensors;