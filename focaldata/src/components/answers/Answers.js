import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Answer from "./Answer";
import { getData } from "../../state/actionCreators";
import { MyResponsivePie } from "../charts/pie";

const Answers = props => {
  const [answers, setAnswers] = useState({ answerOptions: [] });
  const [pieData, setPieData] = useState([]);
  useEffect(() => {
    async function getSurveyData() {
      const surveyId = props.match.params.surveyId;
      const questionId = props.match.params.id;
      let answersToQuestion = {};
      if (props.data && props.data.length !== 0) {
        answersToQuestion = props.data[surveyId - 1].questions[questionId - 1];
        setAnswers(answersToQuestion);
        console.log(props.data);
      } else {
        const sData = await props.getData();
        console.log(sData);
        answersToQuestion =
          sData.surveys[surveyId - 1].questions[questionId - 1];
        console.log(answersToQuestion);

        setAnswers(answersToQuestion);
      }
      const pie_data = answersToQuestion.answerOptions.map(option => {
        return {
          id: String(option.answerOption),
          value: option.selectedByRespondents,
          label: option.text
        };
      });
      console.log(pie_data);
      console.log(answers);

      setPieData(pie_data);
    }
    getSurveyData();
  }, []);
  const getSurveyData = () => {};

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {answers.answerOptions.map(answer => (
          <Answer key={answer.answerOption} answer={answer} />
        ))}
      </div>
      <div style={{ height: "500px", width: "500px" }}>
        <MyResponsivePie data={pieData} />
      </div>
    </div>
  );
};
export default connect(state => state, { getData })(Answers);
