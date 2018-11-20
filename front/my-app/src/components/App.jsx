import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../styleSheets/components/App.css';
import HomeScreen from "./home/HomeScreen";
import PreferencesScreen from "./preferences/PreferencesScreen";
import HistoryScreen from "./history/HistoryScreen"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomeScreen}/>
                    <Route path="/changePreferences" exact component={PreferencesScreen}/>
                    <Route path="/history" exact component={HistoryScreen}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;