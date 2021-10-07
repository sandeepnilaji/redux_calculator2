import {
  ADD_COUNT,
  ADD_TODO,
  SUB_COUNT,
  MUL_COUNT,
  DIV_COUNT,
  INCR_COUNT,
  DECR_COUNT,
} from "./actiontypes.js";

//reducer
export const reduceFn = (state, { type, payload }) => {
  switch (type) {
    case INCR_COUNT:
      return {
        ...state,
        counter: state.counter + payload,
      };
    case DECR_COUNT:
      return {
        ...state,
        counter: state.counter - payload,
      };
    case ADD_COUNT:
      return {
        ...state,
        counter: state.counter + Number(payload),
      };
    case SUB_COUNT:
      return {
        ...state,
        counter: state.counter - payload,
      };
    case MUL_COUNT:
      return {
        ...state,
        counter: state.counter * payload,
      };
    case DIV_COUNT:
      return {
        ...state,
        counter:
          state.counter / payload
            ? state.counter / payload
            : "not Divisible its undefined",
      };
    case ADD_TODO:
      return {
        ...state,
        todo: payload,
      };
    default:
      return { ...state };
  }
};
