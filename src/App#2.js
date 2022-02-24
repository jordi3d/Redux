import "./App.css";
import { useReducer } from "react";

function App() {
  const [count, dispatch] = useReducer((state, amount) => state + amount, 0);

  return (
    <>
      <h1>COUNTER</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(+1)}>+1</button>
      <button onClick={() => dispatch(-1)}>-1</button>
    </>
  );
}

export default App;
