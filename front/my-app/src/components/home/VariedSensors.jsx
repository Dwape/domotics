import React, {Component} from 'react';
import TemperatureSensor from "./TemperatureSensor";
import HumiditySensor from "./HumiditySensor";
import PressureSensor from "./PressureSensor";

class VariedSensors extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <TemperatureSensor interior={this.props.temp_int}
                                       exterior={this.props.temp_ext}
                                       max={this.props.tempMax}
                                       min={this.props.tempMin}
                                       acceptable={this.props.temp_acceptable}/>
                </div>
                <div className="row" style={{"margin-left": "35px"}}>
                    <HumiditySensor interior={this.props.hum_int}
                                    exterior={this.props.hum_ext}
                                    max={this.props.humMax}
                                    min={this.props.humMin}
                                    acceptable={this.props.hum_acceptable}/>
                </div>
                <div className="row" style={{"margin-left": "70px"}}>
                    <PressureSensor exterior={this.props.pressure_ext}/>
                </div>
            </div>
        )
    }
}

export default VariedSensors;