import React, {Component} from 'react';
import NavBar from "../common/NavBar";
import '../../styleSheets/components/home/HomeScreen.css';
import Form from "./Form";

class PreferencesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="bg-wrapper">
                <div className="bg-full-screen">
                    <NavBar {...this.props}/>
                    <Form/>
                </div>
            </div>
        )
    }
}

export default PreferencesScreen;