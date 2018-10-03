import React, {Component} from 'react';
import HomeImage from "../assets/icons/house-icon.svg";
import '../../styleSheets/components/home/HomeLogo.css';

class HomeLogo extends Component {
    render() {
        return (
            <div className="full-screen-div text-center center-content">
                <img className="home-image" src={HomeImage}/>
            </div>
        )
    }
}

export default HomeLogo;