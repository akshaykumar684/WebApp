import React, { Component } from 'react';
import Form from '../FormComponent/RegisterForm'
class Root extends Component {
    
    render() { 
        return ( 
            <div>
            <nav class="navbar navbar-dark bg-dark">
              <form class="form-inline">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      @
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input group prepend">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </div>
              </form>
            </nav>
            <div className="form-row">
              <div className="form-group input-group col md 6"></div>
              <div className="form-group input-group col md 6"></div>
              <div className="form-group input-group col md 6">
                <Form />
              </div>
            </div>
          </div>
         );
    }
}
 
export default Root;