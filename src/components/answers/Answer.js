import React from "react";

export function Answer({ answer, index }) {
  return (
    <div style={{ margin: "40px 0" }}>
      <h5>
        Option {index + 1}: {answer.text}
      </h5>
      <div>Selected By {answer.selectedByRespondents} Respondents</div>
    </div>
  );
}
export default Answer;
