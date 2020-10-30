import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'

class LogInModal extends Component {

    render() {
        return (
            <div>
                <Modal show={this.props.showLogInModal} onHide={this.props.Login}>
                    <Modal.Header closeButton> Login</Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Student</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <button type="button" className="btn btn-secondary mx-1" data-dismiss="modal">Close</button>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default LogInModal;