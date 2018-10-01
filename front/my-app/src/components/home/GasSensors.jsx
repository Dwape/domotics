import React, {Component} from 'react';
import LPGSensor from "./LPGSensor";
import COSensor from "./COSensor";
import SmokeSensor from "./SmokeSensor";

class GasSensors extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <LPGSensor/>
                </div>
                <div className="row">
                    <COSensor/>
                </div>
                <div className="row">
                    <SmokeSensor/>
                </div>
            </div>
        )
    }
}

export default GasSensors;