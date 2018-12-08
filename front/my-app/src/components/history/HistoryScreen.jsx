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
                        fromDate={this.getPreviousDate()}
                        toDate={this.getDate()}
                        timeGranularity={"minute"}
                    />
                    <DataChart
                        type={"humidity"}
                        title={"Humidity History"}
                        fromDate={this.getPreviousDate()}
                        toDate={this.getDate()}
                        timeGranularity={"minute"}
                    />
                </div>
            </div>
        )
    }

    getDate() {
        const today = new Date();
        today.setHours(today.getHours() -3);
        //const date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
        //const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //console.log(date);
        //console.log(time);
        //console.log(today.toISOString().slice(0, -5).replace("T", " "));
        //return date + " " + time;
        console.log(today.toISOString().slice(0, -5).replace("T", " ")); //REMOVE
        return today.toISOString().slice(0, -5).replace("T", " ");
    }

    getPreviousDate() {
        const today = new Date();
        today.setHours(today.getHours() -3);
        const previousDate = new Date(today);
        previousDate.setMinutes(today.getMinutes() - 10);
        console.log(previousDate.toISOString().slice(0, -5).replace("T", " ")); //REMOVE
        return previousDate.toISOString().slice(0, -5).replace("T", " ");
        //return new Date(today.valueOf() - 60000 * 10);
    }
}

export default HistoryScreen;