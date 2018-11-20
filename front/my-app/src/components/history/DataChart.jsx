import React, {Component} from 'react';
//import {Chart} from "frappe-charts";
import { Chart } from 'frappe-charts/dist/frappe-charts.min.esm'
import * as frappe from "frappe-charts";
import '../../styleSheets/components/history/DataChart.css';

class DataChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            fromDate: '2017-11-11 12:00:00',
            toDate: '2019-11-11 12:00:00'
        };
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.createCharts(res))
            //.then(res => this.createChart())
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('http://' + process.env.REACT_APP_ARG + ':5000/api/valuesRange?from=\'' + this.state.fromDate + '\'&to=\'' + this.state.toDate + '\'', {
            credentials: 'include'
        }); //the ip will change all the time

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        /*
        if (this.state.data === undefined) {
            return 'Loading...'
        }
        */
        //className="container-fluid form-centered"
        /*
        <div className="chart-container">
                <div id="chart">
                </div>
            </div>
         */
        return (
            <div id={this.props.type + "-chart"}>
            </div>
        );
    }

    createCharts(result) {
        this.createChart(this.parseValue(result, this.props.type), "#" + this.props.type + "-chart", this.props.title);
    }

    // results arrive in the inverse order, this can be changed here or in the backend.
    parseValue(result, key) {
        //let labels = [result[0]["datetime"], result[1]["datetime"], result[2]["datetime"]];
        let labels = [];
        for (let i=0; i < result.length; i++) {
            labels.push(result[i]["datetime"])
        }

        let values = [];
        for (let i=0; i < result.length; i++) {
            values.push(result[i][key])
        }
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

        //this.createChart(data);
    }

    createChart(data, id, title) {

        /*
        const data = {
            labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
                "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
            ],
            datasets: [
                {
                    name: "Temperature", type: "bar",
                    values: [25, 40, 30, 35, 8, 52, 17, -4]
                }
            ]
        };
        */

        const chart = new Chart(id, {  // or a DOM element,
            // new Chart() in case of ES6 module with above usage
            title: title,
            data: data,
            type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
            height: 250,
            colors: ['#7cd6fd', '#743ee2']
        })
    }
}

export default DataChart