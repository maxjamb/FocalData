import React, { useEffect, useState } from "react";
import Question from "./Question";
import { connect } from "react-redux";
import { getData } from "../../state/actionCreators";

const Questions = props => {
  const [data, setData] = useState({ questions: [] });
  useEffect(() => {
    async function getSurveyData() {
      if (props.data && props.data.length !== 0) {
        setData(props.data[props.match.params.id]);
        console.log(props.data);
      } else {
        const sData = await props.getData();
        console.log(sData);
        setData(sData.surveys[props.match.params.id]);
      }
    }
    getSurveyData();
  }, []);
  const getSurveyData = () => {};
  return (
    <div>
      <div>{data.title}</div>
      {data.questions.map(question => (
        <Question key={question.questionid} question={question} />
      ))}
    </div>
  );
};
export default connect(state => state, { getData })(Questions);
