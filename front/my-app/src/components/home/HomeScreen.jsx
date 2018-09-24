import React, {Component} from 'react';
import NavBar from "../common/NavBar";
import Landing from "./Landing";

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <NavBar {...this.props}/>
                <Landing {...this.props}/>
            </div>
        )
    }
}

export default HomeScreen;