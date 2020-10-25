import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
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
      const {name,gname,email,phone,password,gender,imageUrl} = this.state;
        return (
          <Container>
            <Row>
              {this.checkReponseFromGoogle() ? (
                <div>
                  <h5>Welcome {gname}</h5>
                  <img src={imageUrl} alt={gname} />
                </div>
              ) : (
                <Col sm={4}>
                <form onSubmit={this.handleFormValue}>
                  <div className="form-group">
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

                  <div className="form-group">
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

                  <div className="form-group">
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
                  <div className="form-group">
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
                    <label className="form-check-label">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                  <Google responseGoogle={this.responseGoogle} />
                </form>
              </Col>
              )} 
              
            </Row>
          </Container>
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