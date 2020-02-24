import React from "react";

export function Question({ question }) {
  return (
    <div>
      <div>{question.questionTitle}</div>
      <div>{question.answerOptions.length} options</div>
    </div>
  );
}
export default Question;
