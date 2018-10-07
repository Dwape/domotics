import React, {Component} from 'react';
import VariedSensors from "./VariedSensors";
import HomeLogo from "./HomeLogo";
import GasSensors from "./GasSensors";
import '../../styleSheets/components/home/Sensors.css';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: ''
        }
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         response: {
    //             "temperature": "15",
    //             "current_temp": "17",
    //             "humidity": "42",
    //             "current_hum": "45",
    //             "pressure": "12",
    //             "LPG": "4",
    //             "CO": "5",
    //             "smoke": "6"
    //         }
    //     };
    // }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({response: res}))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        //const response = await fetch('http://localhost:5000/api/latest');
        const response = await fetch('http://' + process.env.REACT_APP_ARG + ':5000/api/latest', {
            credentials: 'include'
        }); //the ip will change all the time

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        if (this.state.response === '') {
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
}

export default Landing;