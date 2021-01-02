import React, { Component } from "react";
import "./Service.css";
import axios from "../axios/axios";
class Service extends Component {
  state = {
    serviceData: [],
    isloading: true,
  };

  async componentDidMount() {
    console.log("Indide component did moint");
    await axios
      .get("Service/GetServiceType")
      .then((response) => {
        if (response.data.isSuccess) {
          console.log(response.data.data);
          let res = response.data.data.map((item) => {
            let abc = item.serviceTypeName;
            let value = [];
            for (let i = 0; i < item.programTypes.length; i++) {
              value.push(item.programTypes[i].programTypeNames);
            }
            return {
              serviceName: abc,
              programs: value,
            };
          });
          console.log({ res });
          this.setState({
            serviceData: response.data.data,
            isloading: false,
          });
        }
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        {this.state.isloading ? (
          <h1>Loading</h1>
        ) : (
          <div className="row">
            <div className="col-sm-3 dbox">
              <div>
                <h1>Hello World</h1>
              </div>
            </div>
            <div className="col-sm-3 dbox">2</div>
            <div className="col-sm-3 dbox">3</div>
            <div className="col-sm-3 dbox">4</div>
          </div>
        )}
      </div>
    );
  }
}

export default Service;
