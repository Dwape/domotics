import React, {Component} from 'react';
import NavBar from "../common/NavBar";
import '../../styleSheets/components/home/HomeScreen.css';
import DataChart from "./DataChart";

class HistoryScreen extends Component {

    render() {
        return (
            <div className="bg-wrapper">
                <div className="bg-full-screen">
                    <NavBar {...this.props}/>
                    <DataChart/>
                </div>
            </div>
        )
    }
}

export default HistoryScreen;