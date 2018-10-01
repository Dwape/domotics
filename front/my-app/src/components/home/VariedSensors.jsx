import React, {Component} from 'react';
import TemperatureSensor from "./TemperatureSensor";
import HumiditySensor from "./HumiditySensor";
import LightSensor from "./LightSensor";

class VariedSensors extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <TemperatureSensor/>
                </div>
                <div className="row">
                    <HumiditySensor/>
                </div>
                <div className="row">
                    <LightSensor/>
                </div>
            </div>
        )
    }
}

export default VariedSensors;