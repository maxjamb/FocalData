import * as types from "./actionTypes";

const initState = [];
export function dataReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DATA:
      return [...state, ...payload];

    case types.ADD_DATA:
      return payload;

    case types.DELETE_DATA:
      return payload;

    default:
      return state;
  }
}

const initFormState = {
  name: "",
  age: "",
  height: ""
};
export function inputFormReducer(state = initFormState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.ON_INPUT_CHANGE:
      return { ...state, [payload.name]: payload.value };
    default:
      return state;
  }
}
