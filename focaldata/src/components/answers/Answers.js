import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Answer from "./Answer";
import { getData } from "../../state/actionCreators";

const Answers = props => {
  const [answers, setAnswers] = useState({ answers: [] });
  useEffect(() => {
    async function getSurveyData() {
      if (props.data && props.data.length !== 0) {
        setAnswers(props.data[props.match.params.id]);
        console.log(props.data);
        // console.log(data[props.match.params.id]);
      } else {
        const sData = await props.getData();
        console.log(sData);
        setAnswers(sData.surveys[props.match.params.id]);
      }
    }
    getSurveyData();
  }, []);
  const getSurveyData = () => {};
  console.log(props.match.params.id);
  return (
    <div>
      {/* {answers.map(answer => (
        <Answer key={answers.answersId} answer={answer} />
      ))} */}
    </div>
  );
};
export default connect(state => state, { getData })(Answers);
