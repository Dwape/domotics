import React, {Component} from 'react';
import VariedSensors from "./VariedSensors";
import HomeLogo from "./HomeLogo";
import GasSensors from "./GasSensors";

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="col-4">
                    <VariedSensors/>
                </div>
                <div className="col-4">
                    <HomeLogo/>
                </div>
                <div className="col-4">
                    <GasSensors/>
                </div>
            </div>
        )
    }
}

export default Landing;