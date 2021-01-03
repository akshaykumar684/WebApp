import React, { Component } from "react";
import axios from "../axios/axios";
import ServiceProgram from '../ServiceProgramComponent/ServiceProgramComponent'
class ServiceOffering extends Component {
  state = {
    serviceData: [],
    isloading: true,
  };

  async componentDidMount() {
    await axios
      .get("Service/GetServiceType")
      .then((response) => {
        if (response.data.isSuccess) {
          let res = response.data.data.map((item) => {
            let serviceTypeName = item.serviceTypeName;
            let value = [];
            for (let i = 0; i < item.programTypes.length; i++) {
              value.push(item.programTypes[i]);
            }
            return {
              serviceName: serviceTypeName,
              programs: value,
            };
          });
          this.setState({
            isloading: false,
            serviceData: res
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
            {this.state.serviceData.map(service => <ServiceProgram keyname={service.serviceName} item = {service.programs}/>)}
          </div>
        )}
      </div>
    );
  }
}

export default ServiceOffering;
