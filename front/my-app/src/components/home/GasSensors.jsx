import React, {Component} from 'react';
import LPGSensor from "./LPGSensor";
import COSensor from "./COSensor";
import SmokeSensor from "./SmokeSensor";

class GasSensors extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <LPGSensor interior={this.props.lpg}/>
                </div>
                <div className="row">
                    <COSensor interior={this.props.co}/>
                </div>
                <div className="row">
                    <SmokeSensor interior={this.props.smoke}/>
                </div>
            </div>
        )
    }
}

export default GasSensors;