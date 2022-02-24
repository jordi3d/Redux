import "./App.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { counter, increment, reset } from "./counter";
import CounterRedux from "./CounterRedux";
import CounterUserReducer from "./CounterUserReducer";

const store = createStore(counter, 0);
store.dispatch(increment(+1));
store.dispatch(increment(+1));
store.dispatch(increment(+1));
store.dispatch(increment(+1));
console.log("state:", store.getState());
store.dispatch(increment(+1));
console.log("state:", store.getState());
store.dispatch(reset());
console.log("state:", store.getState());
store.dispatch(increment(-1));
console.log("state:", store.getState());

function App() {
  return (
    <Provider store={store}>
      <>
        <CounterRedux />
        <CounterRedux />
        <CounterUserReducer />
        <CounterUserReducer />
      </>
    </Provider>
  );
}

export default App;
