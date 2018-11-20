import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white" href="/">Domotics</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link text-white" href="/">Home <span
                            className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link text-muted" href="/changePreferences">Change preferences</a>
                        <a className="nav-item nav-link text-muted" href="/history">History</a>
                        <a className="nav-item nav-link text-muted" href="#">About</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;