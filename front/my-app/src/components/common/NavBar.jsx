import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <a href="#"><span className="text-white">Set up parameters</span></a>
                            </div>
                            <div className="row mb-2">
                                <a href="#"><span className="text-white">Check parameters</span></a>
                            </div>
                            <div className="row">
                                <a href="#"><span className="text-white">About</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="row">
                        <div className="col-4">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarToggleExternalContent"
                                    aria-controls="navbarToggleExternalContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                        </div>
                        <div className="col-3">
                            <a className="navbar-brand" href="#">Domotics</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;