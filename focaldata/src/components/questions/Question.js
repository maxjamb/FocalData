import React from "react";
import { NavLink } from "react-router-dom";

export function Question({ question }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <div>{question.questionTitle}</div>
      <div>
        <NavLink to={`/questions/${question.questionId}/answers`}>
          {question.answerOptions.length} options
        </NavLink>
      </div>
    </div>
  );
}
export default Question;
