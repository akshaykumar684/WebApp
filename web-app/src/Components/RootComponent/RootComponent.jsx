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
class Root extends Component {
  state = {
    username: "",
    password: "",
    gname: "",
    imageUrl: "",
    showSignUpModal: false,
    showLogInModal: false
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar SignUp={this.SignUp} Login={this.Login} imageUrl={this.state.imageUrl}/>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/home"> <Home /> </Route>
          <Route exact path="/about"> <About /> </Route>
          <Route exact path="/contact"> <Contact /> </Route>
          <Route exact path="/test"> <Test /> </Route>
          <SignUpModal showSignUpModal={this.state.showSignUpModal} SignUp={this.SignUp} />
          <LogInModal showLogInModal={this.state.showLogInModal} Login={this.Login} responseGoogle={this.responseGoogle}/>
          <Footer />
        </div>
      </Router>
    );
  }

  SignUp = () => {
    this.setState({ showSignUpModal: !this.state.showSignUpModal });
  }

  Login = () => {
    this.setState({ showLogInModal: !this.state.showLogInModal });
  }

  responseGoogle = (response) => {
    this.setState({
      gname: response.profileObj.givenName,
      imageUrl: response.profileObj.imageUrl,
      showLogInModal : false
    });
    console.log(response);
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