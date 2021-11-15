import React, { useContext } from "react";
import CartContext from "./cartContext";

import UserContext from "./UsersContext";

function MovieRow(props) {
  const user = useContext(UserContext);
  const cart = useContext(CartContext);
  return <div>{user.name}</div>;
}

export default MovieRow;
