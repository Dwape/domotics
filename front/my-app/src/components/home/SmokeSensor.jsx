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
                    <h2 className="title float-left">Humo</h2>
                    <h6 className="float-left"
                        style={{"padding-left": "115px", "margin-lef": "25px", "margin-top": "22.5px"}}>Interior: 9</h6>
                </div>
            </div>
        )
    }
}

export default SmokeSensor;