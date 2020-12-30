import React, { Component } from "react";

class Contact extends Component {
  componentDidMount()
  {
    // var token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI4IiwidW5pcXVlX25hbWUiOiJha3NoYXlrdW1hciIsIm5iZiI6MTYwOTI2Nzc4OCwiZXhwIjoxNjA5MzU0MTg4LCJpYXQiOjE2MDkyNjc3ODh9.izxGB8s6URDlME_yFs2hm5KNsq9-WVqEhA5NoywLmt4MDKAj9mO_r5sUslcOx8BU0WUDRczq4ZGiF0HC25neVQ'
    // const instance = axios.create({
    //   baseURL: 'localhost:5000/Auth',
    //   timeout: 1000,
    //   headers: {'Authorization': 'Bearer '+token}
    // });
    
    // instance.get('IsAuthenticated')
    // .then(response => {
    //     return response.data;
    // })
    // console.log("before");
    // axios
    //   .get("localhost:5000/Auth/IsAuthenticated")
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
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
