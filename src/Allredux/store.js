import { createStore } from "redux";
import { reduceFn } from "./reducer.js";
// import { addcount,subcount,addtodo} from "./actions.js";

const initialstateFn = {
  counter: 0,
  todo: 0,
};

//store
export const store = createStore(reduceFn, initialstateFn);

//dispatch
// store.dispatch(addcount(1));
// console.log(store.getState());

// store.dispatch(addtodo({id:1,name:"learn react",status:false}));
// console.log(store.getState())

// store.dispatch(subcount(1));
// console.log(store.getState());
