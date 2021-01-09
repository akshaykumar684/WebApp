import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class DropDownComponent extends Component {
    render() {
        return (
          <div>
            <Dropdown
              options={this.props.dataList}
              onChange={(event) => this.props.dataChange(event,this.props.defaultValue)}
              placeholder={this.props.defaultValue}
            />
          </div>
        );
      }
}

export default DropDownComponent;