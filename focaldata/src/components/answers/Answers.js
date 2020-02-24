import React, { useState } from "react";
import Answer from "./Answer";

const Answers = () => {
  const [answers, setAnswers] = useState([]);
  return (
    <div>
      {answers.map(answer => (
        <Answer key={answers.answersId} answer={answer} />
      ))}
    </div>
  );
};
export default Answers;
