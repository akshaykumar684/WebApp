import React, { Component } from 'react';
import Google from '../GoogleLoginAuthComponent/GoogleLogin'
class RegisterForm  extends Component {

  state = {
    name : '',
    email : '',
    phone : '',
    password : '',
    gender : '',
    gname : '',
    imageUrl : ''
  }
    render() {
        return (
              
                this.checkReponseFromGoogle() ? 
                this.renderGoogleInfo() :
                this.renderForm()
        );
    }

    renderForm = () => {
      const {name,email,phone,password,gender,} = this.state;
      return (
        <form onSubmit={this.handleFormValue}>
          <div className="form-group input-group">
            <div className="input group prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <input
              type="text"
              value={name}
              onChange={this.handleFormElementChange}
              name="name"
              className="form-control form-control-sm"
              aria-describedby="emailHelp"
              placeholder="Name*"
              required
            />
          </div>

          <div className="form-group input-group">
            <div className="input group prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile-alt"></i>
              </div>
            </div>
            <input
              type="number"
              value={phone}
              onChange={this.handleFormElementChange}
              name="phone"
              className="form-control form-control-sm"
              aria-describedby="emailHelp"
              placeholder="Mobile Number*"
              required
            />
          </div>

          <div className="form-group input-group">
            <div className="input group prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <select
              value={gender}
              onChange={this.handleFormElementChange}
              name="gender"
              className="form-control form-control-sm"
              required
            >
              <option disabled="" defaultValue="">
                Gender*
              </option>
              <option value="M">Male</option>
              <option value="F">FeMale</option>
            </select>
          </div>
          <div className="form-group input-group">
            <div className="input group prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <input
              type="email"
              value={email}
              onChange={this.handleFormElementChange}
              name="email"
              className="form-control form-control-sm"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email Id*"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={this.handleFormElementChange}
              name="password"
              className="form-control form-control-sm"
              id="exampleInputPassword1"
              placeholder="Password*"
              required
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              required
            />
            <label className="form-check-label">
              Accept Terms and Conditions
            </label>
          </div>
          <div className="form-row">
            <div className="form-group input-group col md 6">
              <div className="input group prepend">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
            <div className="form-group input-group col md 6">
              <div className="input group prepend">
                <div className="input group prepend">
                  <Google responseGoogle={this.responseGoogle} />
                </div>
              </div>
            </div>
          </div>
        </form>
      );
    }

    renderGoogleInfo = () => {
      const {gname,imageUrl} = this.state;
      return(
        <div>
                  <h5>Welcome {gname}</h5>
                  <img src={imageUrl} alt={gname} />
                </div>
      );
    }

    responseGoogle = (response) => {

      this.setState({
          gname : response.profileObj.givenName,
          imageUrl : response.profileObj.imageUrl
      });
      console.log(response);
  }

    handleFormElementChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      });
    };

    handleFormValue = event => {
      console.log(this.state.gname.length);
      console.log(this.state.imageUrl.length);
      event.preventDefault();
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
    }
}
 
export default RegisterForm;