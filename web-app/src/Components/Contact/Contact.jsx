import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container my-4">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
              <h4 className="my-0 font-weight-normal">Call Us</h4>
            </div>
            <div className="card-body">
              <h6>966361431/7022625203 | 24×7</h6>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <h4 className="my-0 font-weight-normal">Email</h4>
            </div>
            <div className="card-body">
              <h6>info@mysocialcapital.in</h6>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <i className="fa fa-building fa-2x" aria-hidden="true"></i>
              <h4 className="my-0 font-weight-normal">Offices</h4>
            </div>
            <div className="card-body">
              <h6>307, Meenaakshi Paradise Hosapalya Main Road 560068</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
