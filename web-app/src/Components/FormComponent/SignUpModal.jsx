import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'


class SignUpModal extends Component {

    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
      }

    state = {
        email : '',
        password : '',
        confirmpasssword : ''
    }
    render() {
        const{email,password,confirmpasssword} = this.state;
        const{showSignUpModal,SignUp} = this.props;
        return (
            <div>
                <Modal ref={this.wrapper} show={showSignUpModal} onHide={SignUp}>
                    <Modal.Header closeButton>SignUp</Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                            <form onSubmit={this.onFormSubmit} autoComplete="off">
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" value={email} onChange={this.handleFormData} name="email" required className="form-control" aria-describedby="emailHelp" />
                                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" value={password} onChange={this.handleFormData} name="password" required className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" value={confirmpasssword} onChange={this.handleFormData} name="confirmpasssword" required className="form-control"/>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input"/>
                                    <label className="form-check-label">Student</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Create Account</button>
                                <button type="button" ref={this.wrapper} onClick={SignUp} className="btn btn-secondary mx-1" data-dismiss="modal">Close</button>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

    handleFormData = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }
}

export default SignUpModal;