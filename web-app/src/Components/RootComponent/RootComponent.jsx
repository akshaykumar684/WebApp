import React, { Component } from 'react';
import NavBar from '../NavBar/navBar'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Test from '../TestComponent/TestComponent'
import Footer from '../Footer/Footer'
import './RootComponent.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpModal from '../FormComponent/SignUpModal'
import LogInModal from '../FormComponent/LogInModal'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from "../axios/axios";
class Root extends Component {
  state = {
    username: "",
    password: "",
    gname: "",
    imageUrl: "",
    showSignUpModal: false,
    showLogInModal: false,
  };


  componentDidMount() {
    var token = localStorage.getItem("savedToken");
    const config = {
      headers: { Authorization:  token },
    };

    axios.get("Auth/IsAuthenticated",config)
    .then((response) => {
      if(response.data.isAuthenticated)
      {
        this.setState({
          imageUrl:
            "https://lh3.googleusercontent.com/a-/AOh14Gh4g055TrgATh7U4Oa9hJ0VevnjVL6j0Rdw9eXwvQ=s96-c",
        });
      }
    })
    .catch((error) => {
      console.log("error",error);
    })
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar
            SignUp={this.SignUp}
            Login={this.Login}
            imageUrl={this.state.imageUrl}
          />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <SignUpModal
            showSignUpModal={this.state.showSignUpModal}
            SignUp={this.SignUp}
            isRegistrationSucessfull={this.isRegistrationSucessfull}
          />
          <LogInModal
            showLogInModal={this.state.showLogInModal}
            Login={this.Login}
            responseGoogle={this.responseGoogle}
            isLoginSucessfull={this.isLoginSucessfull}
          />
          <Footer />
        </div>
      </Router>
    );
  }

  ///////////////////////SignUp//////////////////////
  SignUp = () => {
    this.setState({ showSignUpModal: !this.state.showSignUpModal });
    // toast.configure();
    // toast.success('Sucessfull');
    // toast.error("Error");
  };

  isRegistrationSucessfull = (isSucess, message) => {
    toast.configure();
    if (isSucess) {
      toast.success("Sucessfull");
      this.SignUp();
    } else {
      toast.error(message);
    }
  };
  ///////////////////////Login///////////////////////////////////
  Login = () => {
    this.setState({ showLogInModal: !this.state.showLogInModal });
  };

  isLoginSucessfull = (isSucess) => {
    toast.configure();
    if (isSucess) {
      toast.success("Login Sucessfull");
      this.setState({
        imageUrl:
          "https://lh3.googleusercontent.com/a-/AOh14Gh4g055TrgATh7U4Oa9hJ0VevnjVL6j0Rdw9eXwvQ=s96-c",
      });
      this.Login();
    } else {
      toast.error("Invalid Credentials");
    }
  };
  //////////////////////////////Google Auth/////////////////////
  responseGoogle = (response) => {
    this.setState({
      gname: response.profileObj.givenName,
      imageUrl: response.profileObj.imageUrl,
      showLogInModal: false,
    });
    console.log(response);
  };

  checkReponseFromGoogle = () => {
    if (this.state.gname.length === 0) {
      return false;
    } else {
      return true;
    }
  };
}

export default Root;