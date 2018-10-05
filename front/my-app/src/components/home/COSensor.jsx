import React, {Component} from 'react';
import COLogo from "../assets/icons/co-icon.svg";

class COSensor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row rectangle">
                    <div className="circle">
                        <img className="logo" src={COLogo}/>
                    </div>
                    <h2 className="title float-left">CO</h2>
                    <h6 className="float-left">Interior: {this.props.interior} ppm</h6>
                </div>
            </div>
        )
    }
}

export default COSensor;