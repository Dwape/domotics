import React, {Component} from 'react';
import '../../styleSheets/components/preferences/Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max_temp: undefined,
            min_temp: undefined,
            max_hum: undefined,
            min_hum: undefined
        };

        // super(props);
        // this.state = {
        //     max_temp: 40,
        //     min_temp: 5,
        //     max_hum: 90,
        //     min_hum: 20
        // };

        this.handleMaxTempChange = this.handleMaxTempChange.bind(this);
        this.handleMinTempChange = this.handleMinTempChange.bind(this);
        this.handleMaxHumChange = this.handleMaxHumChange.bind(this);
        this.handleMinHumChange = this.handleMinHumChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({
                max_temp: res["temp_max"],
                min_temp: res["temp_min"],
                max_hum: res["hum_max"],
                min_hum: res["hum_min"]
            }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('http://' + process.env.REACT_APP_ARG + ':5000/api/getPreferences', {
            credentials: 'include'
        }); //the ip will change all the time

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    saveValues = async () => {
        const response = await fetch('http://' + process.env.REACT_APP_ARG + ':5000/api/changePreferences', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                temp_max: this.state.max_temp,
                temp_min: this.state.min_temp,
                hum_max: this.state.max_hum,
                hum_min: this.state.min_hum,
            })
        });

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    handleMaxTempChange(event) {
        this.setState({max_temp: event.target.value});
    }

    handleMinTempChange(event) {
        this.setState({min_temp: event.target.value});
    }

    handleMaxHumChange(event) {
        this.setState({max_hum: event.target.value});
    }

    handleMinHumChange(event) {
        this.setState({min_hum: event.target.value});
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.saveValues()
            .then(res => this.setState({
                max_temp: res["temp_max"],
                min_temp: res["temp_min"],
                max_hum: res["hum_max"],
                min_hum: res["hum_min"]
            }))
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.max_temp === undefined) {
            return 'Loading...'
        }
        return (
            <div className="container-fluid form-centered">
                <div className="row form-container">
                    <form onSubmit={this.handleSubmit}>
                        <h5 className="form-centered  form-title">Change preferences</h5>
                        <label className="form-text">
                            Temperatura Máxima:
                            <input className="form-box" type="text" value={this.state.max_temp}
                                   onChange={this.handleMaxTempChange}/>
                            ºC
                        </label>
                        <label className="form-text">
                            Temperatura Mínima:
                            <input className="form-box" type="text" value={this.state.min_temp}
                                   onChange={this.handleMinTempChange}/>
                            ºC
                        </label>
                        <label className="form-text">
                            Humedad Máxima:
                            <input className="form-box" type="text" value={this.state.max_hum}
                                   onChange={this.handleMaxHumChange}/>
                            %
                        </label>
                        <label className="form-text">
                            Humedad Mínima:
                            <input className="form-box" type="text" value={this.state.min_hum}
                                   onChange={this.handleMinHumChange}/>
                            %
                        </label>
                        <div className="form-centered">
                            <input className="form-button" type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;