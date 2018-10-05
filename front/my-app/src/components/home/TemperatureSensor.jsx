import React, {Component} from 'react';
import TemperatureLogo from "../assets/icons/temperature-icon.svg";

class TemperatureSensor extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row rectangle" id="temperature-alert">
                    <div className="circle" id="temperature-alert">
                        <img className="logo" src={TemperatureLogo}/>
                    </div>
                    <h2 className="title float-left">Temperatura</h2>
                    <h6 className="float-left"
                        style={{"padding-left": "15px", "margin-lef": "25px", "margin-top": "7.5px"}}>Interior:
                        11.3</h6>
                    <h6 className="float-left"
                        style={{"padding-left": "15px", "margin-lef": "25px", "margin-top": "7.5px"}}>Exterior:
                        14.5</h6>
                </div>
            </div>
        )
    }
}

export default TemperatureSensor;