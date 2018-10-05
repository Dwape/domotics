import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../styleSheets/components/App.css';
import HomeScreen from "./home/HomeScreen";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomeScreen}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;