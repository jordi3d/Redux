const INCREMENT = "INCREMENT";
const RESET = "RESET";
export function counter(state, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.amount;
    case RESET:
      return 0;
    default:
      return state;
  }
}
export function increment(amount) {
  return { type: INCREMENT, amount };
}
export function reset() {
  return { type: RESET };
}
