import React from "react";

export function Answer({ answer }) {
  return (
    <div style={{ margin: "50px 0" }}>
      <div>{answer.text}</div>
      <div>Selected By {answer.selectedByRespondents} Respondents</div>
    </div>
  );
}
export default Answer;
