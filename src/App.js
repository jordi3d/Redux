import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { counter } from "./counter";
import CounterRedux from "./CounterRedux";
import CounterUserReducer from "./CounterUserReducer";

const store = createStore(counter, 0);

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
