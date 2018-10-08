import React, {Component} from 'react';
import SmokeSensor from "./SmokeSensor";
import COSensor from "./COSensor";
import LPGSensor from "./LPGSensor";

class GasSensors extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{"margin-left": "70px"}}>
                    <SmokeSensor interior={this.props.smoke} acceptable={this.props.smoke_acceptable}/>
                </div>
                <div className="row" style={{"margin-left": "35px"}}>
                    <COSensor interior={this.props.co} acceptable={this.props.co_acceptable}/>
                </div>
                <div className="row">
                    <LPGSensor interior={this.props.lpg} acceptable={this.props.lpg_acceptable}/>
                </div>
            </div>
        )
    }
}

export default GasSensors;