import React, { Component } from "react";
import { Link } from "react-router-dom";
import history from "../../history"
class NavBar extends Component {
  state = {
    search: "",
    showButton: true,
  };
  render() {
    const { search } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="home" className="navbar-brand">
          Akshay
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="home">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact Us <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="test">
                Test Component <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="grid">
                Grid<span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="service">
                Service<span className="sr-only"></span>
              </Link>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0 mx-1"
            onSubmit={this.onFormSubmit}
            autoComplete="off"
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              value={search}
              onChange={this.handleFormData}
              name="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          {this.props.imageUrl.length === 0 ? (
            <div className="mx-1">
              <button
                type="button"
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={this.props.Login}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-success my-2 my-sm-0 mx-1"
                onClick={this.props.SignUp}
              >
                SignUp
              </button>
            </div>
          ) : (
            <div>
              <img
                src={this.props.imageUrl}
                className="bd-placeholder-img rounded-circle"
                width="40"
                height="40"
                alt="..."
              />
              <button
                type="button"
                className="btn btn-outline-success my-2 my-sm-0 mx-1"
                onClick={this.goToHome}
              >
                LogOut
              </button>
            </div>
          )}
        </div>
      </nav>
    );
  }

  handleFormData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  goToHome = () => {
    this.props.Logout();
    history.push("/home");
    localStorage.removeItem("savedToken");
  }
}

export default NavBar;
