import React from "react";
import {
  addcount,
  mulcount,
  subcount,
  divcount,
  addtodo,
  inccount,
  decrccount,
} from "../Allredux/actions";
// import {addcount} from "../Allredux/actions"
// import { store } from "./Allredux/store";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { store } from "../Allredux/store";
function Input() {
  const counter = useSelector((store) => store.counter);
  const todo = useSelector((store) => store.todo);
  console.log(todo);
  console.log(counter);
  // const [state, setstate] = React.useState();
  const dispatch = useDispatch();
  // console.log(state);
  return (
    <div>
      <div>Value :{counter}</div>
      <button
        onClick={() => {
          dispatch(inccount(1));
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrccount(1));
        }}
      >
        decrement
      </button>
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => dispatch(addtodo(e.target.value))}
        placeholder="enter value of x"
      />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(addcount(todo));
        }}
      >
        add
      </button>

      <button
        onClick={() => {
          dispatch(subcount(todo));
        }}
      >
        sub
      </button>
      <button
        onClick={() => {
          dispatch(mulcount(todo));
        }}
      >
        multi
      </button>
      <button
        onClick={() => {
          dispatch(divcount(todo));
        }}
      >
        divide
      </button>
    </div>
  );
}

export default Input;
