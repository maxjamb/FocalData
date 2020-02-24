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
