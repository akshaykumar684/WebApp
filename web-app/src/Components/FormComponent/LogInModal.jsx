import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import Google from '../GoogleLoginAuthComponent/GoogleLogin'
class LogInModal extends Component {

    state = {
        email: '',
        password: ''
    }
    render() {
        const { email, password } = this.state;
        const { showLogInModal, Login } = this.props;
        return (
            <div>
                <Modal show={showLogInModal} onHide={Login}>
                    <Modal.Header closeButton> Login</Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                            <form onSubmit={this.submitLoginData} autoComplete="off">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={email} name="email" onChange={this.HandleFormData} required className="form-control" aria-describedby="emailHelp" />
                                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" value={password} name="password" onChange={this.HandleFormData} required className="form-control" />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Student</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <button type="button" onClick={Login} className="btn btn-secondary mx-1">Close</button>
                                <Google responseGoogle={this.props.responseGoogle} />
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

    HandleFormData = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitLoginData = (event) => {
        event.preventDefault();
    }
}

export default LogInModal;