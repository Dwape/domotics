import React, {Component} from 'react';
//import {Chart} from "frappe-charts";
import { Chart } from 'frappe-charts/dist/frappe-charts.min.esm'
import * as frappe from "frappe-charts";
import '../../styleSheets/components/history/DataChart.css';

class DataChart extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.createChart(res))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('http://' + process.env.REACT_APP_ARG + ':5000/api/valuesRange?from=\'' + this.props.fromDate + '\'&to=\'' + this.props.toDate + '\'', {
            credentials: 'include'
        }); //the ip will change all the time

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div id={this.props.type + "-chart"}>
            </div>
        );
    }

    //result length must be bigger than 1 for the chart to work correctly.
    createChart(result) {
        const chart = new Chart("#" + this.props.type + "-chart", {  // or a DOM element,
            // new Chart() in case of ES6 module with above usage
            title: this.props.title,
            data: this.parseValue(result, this.props.type),
            type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
            height: 250,
            colors: ['#7cd6fd', '#743ee2']
        })
    }

    parseValue(result, key) {
        let values = [];
        let labels = [];

        let lastDate = this.parseDate(result[result.length-1]["datetime"]);
        let accumulator = 0;
        let total = 0;
        for (let i=result.length-1; i >= 0; i--) {
            let currentDate = this.parseDate(result[i]["datetime"]);
            if (currentDate === lastDate) {
                accumulator += result[i][key];
                total++;
            } else {
                labels.push(lastDate);
                values.push(accumulator/total);
                lastDate = currentDate;
                accumulator = result[i][key];
                total = 1;
            }
        }
        labels.push(lastDate);
        values.push(accumulator/total);

        let datasets = [
            {
                name: key, type: "bar",
                values: values
            }
        ];

        return {
            labels,
            datasets
        };
    }

    parseDate(date) {
        switch (this.props.timeGranularity) {
            case "minute":
                return date.slice(0, -3);
            case "hour":
                return date.slice(0, -6);
            case "day":
                return date.slice(0, -9);
            case "month":
                return date.slice(0, -12);
            case "year":
                return date.slice(0, -15);
            default:
                return date;
        }
    }
}

export default DataChart