import React, { Component } from 'react';
import './Grid.css'
class Grid extends Component {
    componentDidMount() {
      console.log(this.state);
      console.log(this.props);
    }
    render() { 
        return (
          // <div>
          //   <div className="row cbox">
          //     <div className="col-sm-1 dbox">1</div>
          //     <div className="col-sm-1 dbox">2</div>
          //     <div className="col-sm-1 dbox">3</div>
          //     <div className="col-sm-1 dbox">4</div>
          //     <div className="col-sm-1 dbox">5</div>
          //     <div className="col-sm-1 dbox">6</div>
          //     <div className="col-sm-1 dbox">7</div>
          //     <div className="col-sm-1 dbox">8</div>
          //     <div className="col-sm-1 dbox">9</div>
          //     <div className="col-sm-1 dbox">10</div>
          //     <div className="col-sm-1 dbox">11</div>
          //     <div className="col-sm-1 dbox">12</div>
          //   </div>
          //   <div className="row">
          //     <div className="col-sm-3 dbox">1</div>
          //     <div className="col-sm-3 dbox">2</div>
          //     <div className="col-sm-3 dbox">3</div>
          //     <div className="col-sm-3 dbox">4</div>
          //   </div>
          // </div>
          <div style={{display: "flex", flex: 1, minHeight: '600px', backgroundColor: '#aaa'}}>
            <div style={{display: 'flex', flex: 1}}>
              <div>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              </div>
            </div>
            <div style={{display: 'flex', flex: 1}}>
              <p>1</p>
            </div>
            <div style={{display: 'flex', flex: 1}}>
              <p>1</p>
            </div>
            <div style={{display: 'flex', flex: 1}}>
              <p>1</p>
            </div>
          </div>
        );
    }
}
 
export default Grid;