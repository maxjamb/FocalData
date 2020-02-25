import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export function Question({ question, surveyId }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div style={{ margin: "10px 0" }}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h6" component="h3">
            {question.questionTitle}
          </Typography>
          <div>
            <NavLink
              to={`/surveys/${surveyId}/questions/${question.questionId}/answers`}
            >
              <Button size="medium">
                Visualise the {question.answerOptions.length} response types
              </Button>
            </NavLink>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default Question;
