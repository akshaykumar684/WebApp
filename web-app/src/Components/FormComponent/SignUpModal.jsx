import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
class SignUpModal extends Component {
  state = {
    username: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmpasssword: "",
    IsStudent: true,
    IsMentor: false,
    IsMale: true,
    IsFemale:false,
    UserType: 1
  };
  render() {
    const {
      username,
      name,
      email,
      mobile,
      password,
      confirmpasssword,
      IsStudent,
      IsMentor,
      IsMale,
      IsFemale
    } = this.state;
    const { showSignUpModal, SignUp } = this.props;
    return (
      <div>
        <Modal show={showSignUpModal} onHide={SignUp}>
          <Modal.Header closeButton>SignUp</Modal.Header>
          <Modal.Body>
            <div className="modal-body">
              <form onSubmit={this.onFormSubmit} autoComplete="off">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={this.handleFormData}
                    name="username"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={this.handleFormData}
                    name="name"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={this.handleFormData}
                    name="email"
                    required
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                  <small className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="number"
                    value={mobile}
                    onChange={this.handleFormData}
                    name="mobile"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={this.handleFormData}
                    name="password"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmpasssword}
                    onChange={this.handleFormData}
                    name="confirmpasssword"
                    required
                    className="form-control"
                  />
                </div>
                <div
                  className="form-group form-check float-container"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div className="float-child">
                    <input
                      type="checkbox"
                      checked={IsMale}
                      name="IsMale"
                      onChange={this.handleGenderCheckboxData}
                      className="form-check-input"
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="float-child">
                    <input
                      type="checkbox"
                      checked={IsFemale}
                      name="IsFemale"
                      onChange={this.handleGenderCheckboxData}
                      className="form-check-input"
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
                <div
                  className="form-group form-check float-container"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div className="float-child">
                    <input
                      type="checkbox"
                      checked={IsStudent}
                      name="IsStudent"
                      onChange={this.handleCheckboxData}
                      className="form-check-input"
                    />
                    <label className="form-check-label">Student</label>
                  </div>
                  <div className="float-child">
                    <input
                      type="checkbox"
                      checked={IsMentor}
                      name="IsMentor"
                      onChange={this.handleCheckboxData}
                      className="form-check-input"
                    />
                    <label className="form-check-label">Mentor</label>
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <button type="submit" className="btn btn-primary">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  handleFormData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCheckboxData = (event) => {
    if (event.target.name === "IsStudent") {
      this.setState({
        [event.target.name]: event.target.checked,
        IsMentor: !event.target.checked,
      });
    }
    if (event.target.name === "IsMentor") {
      this.setState({
        [event.target.name]: event.target.checked,
        IsStudent: !event.target.checked,
      });
    }
  };

  handleGenderCheckboxData = (event) => {
    if (event.target.name === "IsMale") {
      this.setState({
        [event.target.name]: event.target.checked,
        IsFemale: !event.target.checked,
      });
    }
    if (event.target.name === "IsFemale") {
      this.setState({
        [event.target.name]: event.target.checked,
        IsMale: !event.target.checked,
      });
    }
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    var obj = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      password: this.state.password,
      UserType: this.state.IsStudent ? 1 : 2,
      Gender: this.state.IsMale ? 1 : 2
    };
    
    axios
      .post("http://localhost:5000/Auth/Register", obj)
      .then((response) => {
        console.log(response);
        if (response.data.isSuccess) {
          this.resetAllState();
          this.props.isRegistrationSucessfull(true,response.data.message);
        } else if (!response.data.isSuccess) {
          this.props.isRegistrationSucessfull(false,response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  resetAllState = () => {
    this.setState({
      username: "",
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmpasssword: "",
      IsStudent: false,
      IsMentor: true,
    });
  };
}

export default SignUpModal;
