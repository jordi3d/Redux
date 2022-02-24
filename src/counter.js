const INCREMENT = "INCREMENT";
export function increment(amount) {
  return { type: INCREMENT, amount };
}

const RESET = "RESET";
export function reset() {
  return { type: RESET };
}

export function counter(state, action) {
  console.log(state, action);
  switch (action.type) {
    case INCREMENT:
      return state + action.amount;
    case RESET:
      return 0;
    default:
      return state;
  }
}
