import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../styleSheets/components/App.css';
import HomeScreen from "./home/HomeScreen";
import PreferencesScreen from "./preferences/PreferencesScreen";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomeScreen}/>
                    <Route path="/changePreferences" exact component={PreferencesScreen}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;