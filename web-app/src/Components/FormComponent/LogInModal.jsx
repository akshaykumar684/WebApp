import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Google from "../GoogleLoginAuthComponent/GoogleLogin";
import axios from "../axios/axios";
class LogInModal extends Component {
  state = {
    username: "",
    password: "",
  };
  render() {
    const { username, password } = this.state;
    const { showLogInModal, Login } = this.props;
    return (
      <div>
        <Modal show={showLogInModal} onHide={Login}>
          <Modal.Header closeButton> Login</Modal.Header>
          <Modal.Body>
            <div className="modal-body">
              <form onSubmit={this.submitLoginData} autoComplete="off">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    value={username}
                    name="username"
                    onChange={this.HandleFormData}
                    required
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={this.HandleFormData}
                    required
                    className="form-control"
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <Google responseGoogle={this.props.responseGoogle} />
                </div>
               
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  HandleFormData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitLoginData = async (event) => {
    event.preventDefault();

     await axios
      .post("Auth/Login", this.state)
      .then((response) => {
        if (response.data.isSuccess === true) {
          localStorage.setItem("savedToken","Bearer " + response.data.data)
          this.resetAllState();
          this.props.isLoginSucessfull(true);
        } else if (response.data.isSuccess === false) {
          this.props.isLoginSucessfull(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  resetAllState = () => {
    this.setState({
      email: "",
      password: "",
    });
  };
}

export default LogInModal;
