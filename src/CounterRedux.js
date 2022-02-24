import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "./counter";

export default function CounterRedux() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter Redux</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}
