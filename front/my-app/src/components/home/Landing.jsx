import React, {Component} from 'react';
import VariedSensors from "./VariedSensors";
import HomeLogo from "./HomeLogo";
import GasSensors from "./GasSensors";
import '../../styleSheets/components/home/Sensors.css';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: '',
            preferences: ''
        }
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         response: {
    //             "temperature": "15.43",
    //             "current_temp": "24.59",
    //             "humidity": "42.22",
    //             "current_hum": "45.09",
    //             "pressure": "12.34",
    //             "LPG": "41.33",
    //             "CO": "51.44",
    //             "smoke": "66.43"
    //         },
    //         preferences: {
    //             "temp_max": "40.44",
    //             "temp_min": "5.67",
    //             "hum_max": "95.86",
    //             "hum_min": "20.03"
    //         }
    //     };
    // }

    componentDidMount() {
        // Response (stats)
        this.callResponseApi()
            .then(res => this.setState({response: res}))
            .catch(err => console.error(err));

        this.interval = setInterval(() => this.callResponseApi()
            .then(res => this.setState({response: res}))
            .catch(err => console.error(err)), 30000);

        // Preferences
        this.callPreferencesApi()
            .then(pref => this.setState({preferences: pref}))
            .catch(err => console.error(err));

        this.interval = setInterval(() => this.callPreferencesApi()
            .then(pref => this.setState({preferences: pref}))
            .catch(err => console.error(err)), 30000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    callResponseApi = async () => {
        //const response = await fetch('http://localhost:5000/api/latest');
        const response = await fetch('http://' + process.env.REACT_APP_ARG + ':5000/api/latest', {
            credentials: 'include'
        }); //the ip will change all the time

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    callPreferencesApi = async () => {
        const preferences = await fetch('http://' + process.env.REACT_APP_ARG + ':5000/api/getPreferences', {
            credentials: 'include'
        });
        const body = await preferences.json();
        if (preferences.status !== 200) throw Error(body.message);
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
                            tempMax={this.state.preferences["temp_max"]}
                            tempMin={this.state.preferences["temp_min"]}
                            humMax={this.state.preferences["hum_max"]}
                            humMin={this.state.preferences["hum_min"]}
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