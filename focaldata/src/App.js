import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Surveys from "./components/surveys/Surveys";
import Questions from "./components/questions/Questions";
import Answers from "./components/answers/Answers";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <>
      <Router>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={Surveys} />
            <Route exact path="/surveys/:id" component={Questions} />
            <Route
              path="/surveys/:surveyId/questions/:id/answers"
              component={Answers}
            />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
