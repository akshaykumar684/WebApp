import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


class GoogleAuth extends Component {
    render() { 
        return (
          <div>
            <GoogleLogin
              clientId="214492078983-7cd86m25a6qs61aqbpnjn7t5v2056lld.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.props.responseGoogle}
              onFailure={this.props.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        );
    }
}
 
export default GoogleAuth;