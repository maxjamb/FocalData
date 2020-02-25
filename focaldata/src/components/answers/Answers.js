import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Answer from "./Answer";
import { getData } from "../../state/actionCreators";

const Answers = props => {
  const [answers, setAnswers] = useState({ answers: [] });
  useEffect(() => {
    async function getSurveyData() {
      const surveyId = props.match.params.surveyId;
      const questionId = props.match.params.id;
      if (props.data && props.data.length !== 0) {
        setAnswers(props.data[surveyId].questions[questionId]);
        console.log(props.data);
      } else {
        const sData = await props.getData();
        console.log(sData);
        setAnswers(sData.surveys[questionId]);
      }
    }
    getSurveyData();
  }, []);
  const getSurveyData = () => {};
  console.log(props.match.params.id);
  return (
    <div>
      {answers.answerOptions.map(answer => (
        <Answer key={answers.answersId} answer={answer} />
      ))}
    </div>
  );
};
export default connect(state => state, { getData })(Answers);
