import React from "react";
import Answers from "./answers";

const Answers = () => {
  const [answers, setAnswers] = useState([]);
  return (
    <div>
      {Answers.map(answers => (
        <answers key={answers.answersId} />
      ))}
    </div>
  );
};
export default Answers;
