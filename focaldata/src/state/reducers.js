import * as types from "./actionTypes";

const initState = [];
export function dataReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DATA:
      return [...state, ...payload];

    default:
      return state;
  }
}
