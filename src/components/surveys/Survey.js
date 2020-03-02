import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import Card from "../Card";
import { getData } from "../../state/actionCreators";

export function Survey({ data, getData }) {
  return (
    <div>
      <div className="list">
        {data.map(data => {
          return <myResponsivePie data={Survey} />;
        })}
      </div>
    </div>
  );
}
export default connect(state => state, { getData })(Survey);
