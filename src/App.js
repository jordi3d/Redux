import "./App.css";
import { useReducer } from "react";

const INCREMENT = "INCREMENT";
const RESET = "RESET";
function counter(state, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.amount;
    case RESET:
      return 0;
    default:
      return state;
  }
}
function increment(amount) {
  return { type: INCREMENT, amount };
}
function reset() {
  return { type: RESET };
}

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
