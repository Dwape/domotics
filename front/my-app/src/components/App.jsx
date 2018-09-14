import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeScreen from "./home/HomeScreen";
import SignUpScreen from "./signUp/SignUpScreen";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomeScreen}/>
                    <Route path="/signup" exact component={SignUpScreen}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;