import React from "react";
import { NavLink } from "react-router-dom";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export function Card({ data, navigateToQuestions }) {
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
        <AccountCircleIcon />{" "}
        <NavLink to={`/surveys/${data.surveyId}`}>{data.title}</NavLink>
      </p>
      <br />
    </>
  );
}
export default Card;
