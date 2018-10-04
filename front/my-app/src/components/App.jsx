import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../styleSheets/components/App.css';
import HomeScreen from "./home/HomeScreen";

class App extends Component {

    state = {
        response: ''
    };

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomeScreen}/>
                </Switch>
            </BrowserRouter>
        )
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('http://localhost:5000/api/latest');

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
}

export default App;