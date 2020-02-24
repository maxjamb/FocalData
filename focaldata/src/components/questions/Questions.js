import React, { useEffect, useState } from "react";
import Question from "./Question";
import { connect } from "react-redux";
import { getData } from "../../state/actionCreators";

const Questions = props => {
  const [data, setData] = useState({ questions: [] });
  useEffect(() => {
    async function getSurveyData() {
      if (props.data && props.data.length !== 0) {
        setData(data[props.match.params.id]);
      } else {
        const sData = await props.getData();
        console.log(sData);
        setData(sData.surveys);
      }
      console.log(data[props.match.params.id]);
    }
    getSurveyData();
  }, []);
  const getSurveyData = () => {};
  console.log(props.match.params.id);
  return (
    <div>
      {/* <div>{data.title}</div>
      {data.questions.map(question => (
        <Question key={question.questionid} />
      ))} */}
    </div>
  );
};
export default connect(state => state, { getData })(Questions);
