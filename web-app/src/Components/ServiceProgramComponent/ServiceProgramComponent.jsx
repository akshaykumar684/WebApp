import React, { Component } from "react";

class ServiceProgramComponent extends Component {
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

  buttonClick = (item) => {
      console.log(item)
  }
}

export default ServiceProgramComponent;
