import React, { Component } from 'react';
import Form from '../FormComponent/RegisterForm'
import Google from '../GoogleLoginAuthComponent/GoogleLogin'
import './RootComponent.css'

class Root extends Component {
  state = {
    username: "",
    password: "",
    gname: "",
    imageUrl: "",
  };

  render() {
    return (
      <div>
        <div className="cbox">
            {this.checkReponseFromGoogle() ? this.renderGoogleInfo() : this.renderForm()}
        </div>
        <div className="form-row">
          <div className="form-group input-group col md 6"></div>
          <div className="form-group input-group col md 6"></div>
          <div className="form-group input-group col md 6">
           
            {this.checkReponseFromGoogle() ? <h4>Hello</h4>:  <Form />}
          </div>
        </div>
      </div>
    );
  }


  renderForm = () => {
      return (
        <form onSubmit={this.handleLoginForm} className="form-inline" autoComplete="off">
          <div className="input-group navBarStyle">
            <input
              type="text"
              value = {this.state.username}
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name = "username"
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
              name = "password"
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
        [event.target.name] : event.target.value
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
    if (this.state.gname.length === 0)
    {
      return false;
    }
    else
    {
      return true;
    }
  };
}
 
export default Root;