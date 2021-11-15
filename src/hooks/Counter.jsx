import { useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(name);

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>
        {name} clicked {count} times
      </div>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default Counter;
