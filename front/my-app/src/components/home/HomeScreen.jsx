import React, {Component} from 'react';
import NavBar from "../common/Navbar";
import Landing from "./Landing";
import Footer from "../common/Footer";

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <NavBar {...this.props}/>
                <Landing {...this.props}/>
                <Footer {...this.props}/>
            </div>
        )
    }
}

export default HomeScreen;