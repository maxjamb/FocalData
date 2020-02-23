import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { dataReducer } from "../state/reducers";

export function Card({ data }) {
  return (
    <div className="content">
      <img src="" />
      <h3>Title: {data.title}</h3>
    </div>
  );
}
export default connect(state => state, actionCreators)(Card);
