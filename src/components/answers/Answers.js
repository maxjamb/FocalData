import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Answer from "./Answer";
import { getData } from "../../state/actionCreators";
import { MyResponsivePie } from "../charts/pie";

const Answers = props => {
  const [answers, setAnswers] = useState({ answerOptions: [] });
  const [pieData, setPieData] = useState([]);
  const [pieFill, setPieFill] = useState([]);
  useEffect(() => {
    async function getSurveyData() {
      const surveyId = props.match.params.surveyId;
      const questionId = props.match.params.id;
      let answersToQuestion = {};
      if (props.data && props.data.length !== 0) {
        answersToQuestion = props.data[surveyId - 1].questions[questionId - 1];
        setAnswers(answersToQuestion);
      } else {
        const sData = await props.getData();
        console.log(sData);
        answersToQuestion =
          sData.surveys[surveyId - 1].questions[questionId - 1];
        setAnswers(answersToQuestion);
      }
      const pie_data = answersToQuestion.answerOptions.map(option => {
        return {
          id: String(option.answerOption),
          value: option.selectedByRespondents,
          label: option.text
        };
      });
      const pie_fill = answersToQuestion.answerOptions.map(option => {
        return {
          match: {
            id: option.text
          },
          id: "dots"
        };
      });
      setPieData(pie_data);
      setPieFill(pie_fill);
    }
    getSurveyData();
  }, []);

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>{answers.questionTitle}</h4>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {answers.answerOptions.map((answer, index) => (
            <Answer key={answer.answerOption} answer={answer} index={index} />
          ))}
        </div>
        <div style={{ height: "450px", width: "450px" }}>
          <MyResponsivePie data={pieData} file={pieFill} />
        </div>
      </div>
    </div>
  );
};
export default connect(state => state, { getData })(Answers);
