import axios from "axios";
import * as types from "./actionTypes";

const dataApi = "https://my-json-server.typicode.com/focaldata/demo/db";

export const getData = () => dispatch => {
  axios
    .get(dataApi)
    .then(res => {
      dispatch({ type: types.GET_DATA, payload: res.data });
    })
    .catch(console.log);
};

export function updateInput(e) {
  let { name, value } = e.target;

  return {
    type: types.ON_INPUT_CHANGE,
    payload: { name, value }
  };
}

export const deleteData = id => dispatch => {
  axios
    .delete(dataApi + "/" + id)
    .then(res => {
      dispatch({ type: types.DELETE_DATA, payload: res.data });
    })
    .catch(console.log);
};

export const addDATA = DATA => dispatch => {
  axios
    .post(dataApi, DATA)
    .then(res => {
      dispatch({ type: types.ADD_DATA, payload: res.data });
      console.log(res.data);
    })
    .catch(console.log);
};
