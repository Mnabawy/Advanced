import React, { Component } from "react";
import CartContext from "./cartContext";
import MovieRow from "./MovieRow";
import UserContext from "./UsersContext";

class MovieList extends Component {
  // to access the context outside the render method
  static contextType = UserContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {UserContext => (
          <div>
            Movie List{" "}
            {UserContext.currentUser ? UserContext.currentUser.name : ""}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
