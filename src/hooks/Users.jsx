import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export default function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const { data: users } = await axios.get(url);
    setUsers(users);
  });

  return <div>{users.map(u => <li  key={u.id}>{u.name}</li >)}</div>;
}
