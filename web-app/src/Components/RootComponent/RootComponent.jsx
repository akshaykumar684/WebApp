import React, { Component } from 'react';
//import Form from '../FormComponent/RegisterForm'
import Google from '../GoogleLoginAuthComponent/GoogleLogin'
import NavBar from '../NavBar/navBar'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import './RootComponent.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Route from 'react-router-dom/Route'
class Root extends Component {
  state = {
    username: "",
    password: "",
    gname: "",
    imageUrl: "",
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/"> <Home/> </Route>
          <Route exact path="/home"> <Home/> </Route>
          <Route exact path="/about"> <About /> </Route>
          <Route exact path="/contact"> <Contact /> </Route>
        </div>
      </Router>
    );
  }


  renderForm = () => {
    return (
      <form onSubmit={this.handleLoginForm} className="form-inline" autoComplete="off">
        <div className="input-group navBarStyle">
          <input
            type="text"
            value={this.state.username}
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="username"
            onChange={this.handleFormElementChange}
          />
        </div>
        <div className="input-group navBarControl">
          <input
            type="password"
            value={this.state.password}
            className="form-control navBarControl"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            name="password"
            onChange={this.handleFormElementChange}
          />
        </div>
        <div className="input group prepend navBarControl">
          <button type="submit" className="btn btn-primary">
            Login
            </button>
        </div>
        <div className="input group prepend navBarControl">
          <Google responseGoogle={this.responseGoogle} />
        </div>
      </form>
    );
  }

  handleLoginForm = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleFormElementChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  responseGoogle = (response) => {
    this.setState({
      gname: response.profileObj.givenName,
      imageUrl: response.profileObj.imageUrl,
    });
    console.log(response);
  };

  renderGoogleInfo = () => {
    const { gname, imageUrl } = this.state;
    return (
      <div className="input-group navBarStyle">
        <h5>Welcome {gname}</h5>
        <img src={imageUrl} alt={gname} />
      </div>
    );
  };

  checkReponseFromGoogle = () => {
    if (this.state.gname.length === 0) {
      return false;
    }
    else {
      return true;
    }
  };
}

export default Root;