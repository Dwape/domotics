import React, {Component} from 'react';
import NavBar from "../common/NavBar";
import Landing from "./Landing";
import '../../styleSheets/components/home/HomeScreen.css';

class HomeScreen extends Component {
    render() {
        return (
            <div className="bg-wrapper">
                <div className="bg-full-screen">
                    <NavBar {...this.props}/>
                    <Landing {...this.props}/>
                </div>
            </div>
        )
    }
}

export default HomeScreen;