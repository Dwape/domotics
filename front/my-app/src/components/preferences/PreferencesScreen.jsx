import React, {Component} from 'react';
import NavBar from "../common/NavBar";
import '../../styleSheets/components/home/HomeScreen.css';
import Form from "./Form";

class PreferencesScreen extends Component {

    static displayTheMessage() {
        alert("Changes saved successfully!");
    }

    displayTheMessageRef = PreferencesScreen.displayTheMessage.bind(this);

    render() {
        return (
            <div className="bg-wrapper">
                <div className="bg-full-screen">
                    <NavBar {...this.props}/>
                    <Form displayMessage={this.displayTheMessageRef}/>
                </div>
            </div>
        )
    }
}

export default PreferencesScreen;