import React, { Component } from "react";

class Test extends Component {
  state = {
    loading: true,
    users: [],
  };
  componentDidMount() {
    console.log("Inside Component Did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          loading: false,
          users: json,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <p>loading</p>
        ) : (
          <ul>
            {this.state.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Test;
