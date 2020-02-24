import React from "react";
import Question from "./Question";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  return (
    <div>
      {questions.map(question => (
        <Question key={question.questionid} />
      ))}
    </div>
  );
};
export default Questions;
