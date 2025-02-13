import { useReducer } from "react";

const reducer = (state: number, action: "increment" | "decrement") => {
  return action === "increment" ? state + 1 : state - 1;
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
    </div>
  );
};

export default Counter;