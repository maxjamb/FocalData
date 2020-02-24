import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Surveys from "./components/Surveys";
import Survey from "./components/Survey";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <>
      <Router>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={Surveys} />
            <Route path="/survey/:id" component={Survey} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
