import React, {Component} from 'react';
import VariedSensors from "./VariedSensors";
import HomeLogo from "./HomeLogo";
import GasSensors from "./GasSensors";
import '../../styleSheets/components/home/Sensors.css';

class Landing extends Component {

    state = {
        response: ''
    };

    render() {
        if(this.state.response === '') {
            return 'Loading...' //We could add some nice image when it is loading (although it should take very little time)
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5">
                        <VariedSensors
                            temp_int={this.state.response["temperature"][0]}
                            temp_ext={this.state.response["current_temp"]}
                            hum_int={this.state.response["humidity"][0]}
                            hum_ext={this.state.response["current_hum"]}
                            pressure_ext={this.state.response["pressure"]}
                        />
                    </div>
                    <div className="col-2">
                        <HomeLogo/>
                    </div>
                    <div className="col-5">
                        <GasSensors
                            lpg={this.state.response["LPG"][0]}
                            co={this.state.response["CO"][0]}
                            smoke={this.state.response["smoke"][0]}
                        />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('http://localhost:5000/api/latest');

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
}

export default Landing;