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
                    <DataChart
                        type={"temperature"}
                        title={"Temperature History"}
                        fromDate={"2017-11-11 12:00:00"}
                        toDate={this.getDate()}
                        timeGranularity={"second"}
                    />
                    <DataChart
                        type={"humidity"}
                        title={"Humidity History"}
                        fromDate={"2017-11-11 12:00:00"}
                        toDate={this.getDate()}
                        timeGranularity={"second"}
                    />
                </div>
            </div>
        )
    }

    getDate() {
        const today = new Date();
        const date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + " " + time;
    }
}

export default HistoryScreen;