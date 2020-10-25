import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
class RegisterForm  extends Component {

  state = {
    name : '',
    email : '',
    phone : '',
    password : '',
    gender : ''
  }
    render() {
      const {name,email,phone,password,gender} = this.state;
        return (
          <Container>
            <Row>
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
                </form>
              </Col>
            </Row>
          </Container>
        );
    }

    handleFormElementChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      });
    };

    handleFormValue = event => {
      console.log(this.state);
      event.preventDefault();
    };
}
 
export default RegisterForm;