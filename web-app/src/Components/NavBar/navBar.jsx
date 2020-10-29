import React, { Component } from 'react';
import { Link } from "react-router-dom"
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">Akshay</a>
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
                            <Link className="nav-link" to="about">About <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Topics
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">.NET</a>
                                <a className="dropdown-item" href="#">C#</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">WPF</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">Contact Us <span className="sr-only"></span></Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <div className="mx-2">
                        <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#LoginModal">Login</button>
                        <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#signUpModal">SignUp</button>
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