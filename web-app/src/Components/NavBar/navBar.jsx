import React, { Component } from 'react';
import { Link } from "react-router-dom"
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand">Akshay</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="home">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/home" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Topics
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/home">.NET</Link>
                                <Link className="dropdown-item" to="/home">C#</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/home">WPF</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">Contact Us <span className="sr-only"></span></Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 mx-1">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <div className="mx-1">
                        <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#LoginModal" onClick={this.props.Login}>Login</button>
                    </div>
                    <div className="mx-1">
                        <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#signUpModal" onClick={this.props.SignUp}>SignUp</button>

                    </div>
                </div>
            </nav>
        );
    }

    ButtonClick = () => {
        console.log("button clicked");
    }
}

export default NavBar;