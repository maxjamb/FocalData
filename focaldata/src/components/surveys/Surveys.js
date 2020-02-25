import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import Card from "../Card";
import { getData } from "../../state/actionCreators";

export function Surveys({ data, getData }) {
  useEffect(() => {
    getData();
  }, []);
  console.log(getData);
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
export default connect(state => state, { getData })(Surveys);
