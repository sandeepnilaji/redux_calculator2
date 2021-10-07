import { createStore } from "redux";

// class Store {
//   constructor(reducerFn, initialState) {
//     this.reducer = reducerFn;
//     this.state = initialState;
//   }
//   getState() {
//     return this.state;
//   }
//   dispatch(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }

const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case "Add":
      return {
        ...state,
        counter: state.counter + payload,
      };
    case "Sub":
      return {
        ...state,
        counter: state.counter - payload,
      };
    case "Add_Todo":
      return {
        ...state,
        todos: [...state.todos, { ...payload }],
      };
    default:
      return { ...state };
  }
};
const initialState = {
  counter: 0,
  todos: [],
};
export const store = new createStore(reducerFn, initialState);

console.log(store.getState());

store.dispatch({ type: "Add", payload: 5 });

console.log(store.getState());

store.dispatch({ type: "Sub", payload: 1 });
console.log(store.getState());

store.dispatch({
  type: "Add_Todo",
  payload: {
    id: 2,
    status: false,
    title: "Learn",
  },
});
console.log(store.getState());
