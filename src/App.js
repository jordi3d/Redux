import "./App.css";
import { useReducer } from "react";
import { counter, increment, reset } from "./INCREMENT";

function App() {
  const [count, dispatch] = useReducer(counter, 0);

  return (
    <>
      <h1>COUNTER</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}

export default App;
