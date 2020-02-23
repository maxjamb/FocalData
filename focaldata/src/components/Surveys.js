import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Card from "./Card";

export function Surveys({ data }) {
  console.log(data);
  return (
    <div>
      <div className="list">
        {data.map(data => {
          return <Card key={data} data={data} />;
        })}
      </div>
    </div>
  );
}
export default connect(state => state, actionCreators)(Surveys);
