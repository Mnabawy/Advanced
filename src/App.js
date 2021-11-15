import React, { Component } from "react";

import MoviePage from "./context/MoviePage";
import "./App.css";
import UserContext from "./context/UsersContext";
import Login from "./context/Login";
import CartContext from "./context/cartContext";

class App extends Component {
  handleLoggedIn = username => {
    console.log("Getting the user: " + username);
    const user = { name: username };
    this.setState({ currentUser: user });
  };

  state = {
    currentUser: { name: null },
  };

  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
