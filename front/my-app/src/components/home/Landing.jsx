import React, {Component} from 'react';
import VariedSensors from "./VariedSensors";
import HomeLogo from "./HomeLogo";
import GasSensors from "./GasSensors";
import '../../styleSheets/components/home/Sensors.css';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5">
                        <VariedSensors/>
                    </div>
                    <div className="col-2">
                        <HomeLogo/>
                    </div>
                    <div className="col-5">
                        <GasSensors/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;