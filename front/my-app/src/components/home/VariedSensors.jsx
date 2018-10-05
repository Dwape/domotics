import React, {Component} from 'react';
import TemperatureSensor from "./TemperatureSensor";
import HumiditySensor from "./HumiditySensor";
import LightSensor from "./PressureSensor";

class VariedSensors extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <TemperatureSensor/>
                </div>
                <div className="row" style={{"margin-left": "35px"}}>
                    <HumiditySensor/>
                </div>
                <div className="row" style={{"margin-left": "70px"}}>
                    <LightSensor/>
                </div>
            </div>
        )
    }
}

export default VariedSensors;