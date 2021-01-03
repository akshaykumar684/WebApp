import React, { Component } from "react";
import axios from "../axios/axios";
import history from "../../history"

class ServiceProgramComponent extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className="container-fluid col-sm-3">
        <div class="list-group">
          <button
            type="button"
            class="list-group-item list-group-item-action active"
            aria-current="true">
            {this.props.keyname}
          </button>
          {this.props.item.map((item) => (
            <button
              type="button"
              class="list-group-item list-group-item-action" onClick = {() => this.buttonClick(item)}>
              {item.programTypeNames}
            </button>
          ))}
        </div>
      </div>
    );
  }

  buttonClick = async (item) => {
      await axios.get("Course/" + item.programTypeId)
      .then((response) => {
        this.setState({
          data : response.data.data
        })
      })
      .catch((error) => {
        console.log(error);
      });

      history.push("/grid",this.state.data);

     // history.push({ pathname:"/grid", state: this.state.data});
  }
}

export default ServiceProgramComponent;
