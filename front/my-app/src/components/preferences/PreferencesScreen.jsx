import React, {Component} from 'react';
import NavBar from "../common/NavBar";
import '../../styleSheets/components/home/HomeScreen.css';
import Form from "./Form";

class PreferencesScreen extends Component {

    displayMessage() {
        alert("Changes saved successfully!");
    }

    render() {
        return (
            <div className="bg-wrapper">
                <div className="bg-full-screen">
                    <NavBar {...this.props}/>
                    <Form screen={this}/>
                </div>
            </div>
        )
    }
}

export default PreferencesScreen;