import React, { Component } from 'react';
import './Grid.css'
class Grid extends Component {
    state = {  }
    render() { 
        return (
          <div className="container cbox">
            <div className="row">
              <div className="col-sm-1 dbox">1</div>
              <div className="col-sm-1 dbox">2</div>
              <div className="col-sm-1 dbox">3</div>
              <div className="col-sm-1 dbox">4</div>
              <div className="col-sm-1 dbox">5</div>
              <div className="col-sm-1 dbox">6</div>
              <div className="col-sm-1 dbox">7</div>
              <div className="col-sm-1 dbox">8</div>
              <div className="col-sm-1 dbox">9</div>
              <div className="col-sm-1 dbox">10</div>
              <div className="col-sm-1 dbox">11</div>
              <div className="col-sm-1 dbox">12</div>
            </div>
            <div className="row">
              <div className="col-sm-4 dbox">1</div>
              <div className="col-sm-4 dbox">2</div>
              <div className="col-sm-4 dbox">3</div>
            </div>
          </div>
        );
    }
}
 
export default Grid;