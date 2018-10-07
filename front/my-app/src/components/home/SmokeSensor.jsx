import React, {Component} from 'react';
import SmokeLogo from "../assets/icons/smoke-icon.svg";

class SmokeSensor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row rectangle">
                    <div className="circle">
                        <img className="logo" src={SmokeLogo}/>
                    </div>

                    <h2 className="title float-left">Smoke</h2>
                    <div className="flex-column">
                        <h6 className="stats float-left" style={{"margin-left": "60px", "margin-top": "22.5px"}}>
                            Interior: {this.props.interior} ppm
                        </h6>
                    </div>

                </div>
            </div>
        )
    }
}

export default SmokeSensor;