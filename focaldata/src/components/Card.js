import React from "react";
import * as actionCreators from "../state/actionCreators";
import { dataReducer } from "../state/reducers";

import { connect } from "react-redux";
import { useParams } from "react-router";

import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export function Card({ data }) {
  return (
    <>
      <h1>{data.title}</h1>
      <img
        src={"https://picsum.photos/seed/" + data.title + "/1200/600"}
        alt=""
        style={{ width: "100%" }}
      />
      <br />
      <p style={{ fontSize: "25px" }}>
        <ScheduleIcon /> {(data.title || "").slice(0, 10)} <br />
        <LocationOnIcon /> {data.title} <br />
        <AccountCircleIcon /> <a href={"/user/" + data.title}>{data.title}</a>
      </p>
      <p style={{ fontSize: "25px" }}>{data.title}</p>
    </>
  );
}
export default Card;
