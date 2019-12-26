import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import CodeForm from "./components/Quiz/CodeForm";
import CandidateForm from "./components/Quiz/CandidateForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/enter-quiz-code" component={CodeForm} />
        <Route exact path="/candidate-details" component={CandidateForm} />
      </Switch>
    </Router>
  );
}

export default App;
