import React, { Component } from "react";
import UserContext from "./UsersContext";

class Login extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        <button onClick={() => this.context.onLoggedIn('mohamed')}>login</button>
      </div>
    );
  }
}

export default Login;