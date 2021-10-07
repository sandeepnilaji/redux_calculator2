//action creator

import {
  ADD_COUNT,
  SUB_COUNT,
  MUL_COUNT,
  DIV_COUNT,
  ADD_TODO,
  INCR_COUNT,
  DECR_COUNT,
} from "./actiontypes.js";

export const addtodo = (data) => {
  return { type: ADD_TODO, payload: data };
};

export const subcount = (data) => {
  return { type: SUB_COUNT, payload: data };
};
export const mulcount = (data) => {
  return { type: MUL_COUNT, payload: data };
};

export const divcount = (data) => {
  return { type: DIV_COUNT, payload: data };
};
export const addcount = (data) => {
  return { type: ADD_COUNT, payload: data };
};
export const inccount = (data) => {
  return { type: INCR_COUNT, payload: data };
};
export const decrccount = (data) => {
  return { type: DECR_COUNT, payload: data };
};
