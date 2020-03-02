import React, { useEffect, useState } from "react";
import Question from "./Question";
import { connect } from "react-redux";
import { getData } from "../../state/actionCreators";

const Questions = props => {
  const [data, setData] = useState({ questions: [] });
  useEffect(() => {
    async function getSurveyData() {
      if (props.data && props.data.length !== 0) {
        setData(props.data[props.match.params.id - 1]);
        console.log(props.data);
      } else {
        const sData = await props.getData();
        console.log(sData);
        setData(sData.surveys[props.match.params.id - 1]);
      }
    }
    getSurveyData();
  }, []);
  const getSurveyData = () => {};
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#ff6e5a" }}>{data.title}</h1>
      {data.questions.map(question => (
        <Question
          key={question.questionId}
          question={question}
          surveyId={[props.match.params.id]}
        />
      ))}
    </div>
  );
};
export default connect(state => state, { getData })(Questions);
