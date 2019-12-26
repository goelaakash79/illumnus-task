import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import CodeForm from "./components/Quiz/CodeForm";
import CandidateForm from "./components/Quiz/CandidateForm";
import Quiz from "./components/Quiz/Quiz";

import Login from "./components/Teacher/Login";
import Dashboard from "./components/Teacher/Dashboard";
import CreateQuestion from "./components/Teacher/CreateQuestion";
import CreateQuiz from "./components/Teacher/CreateQuiz";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/enter-quiz-code" component={CodeForm} />
        <Route exact path="/candidate-details" component={CandidateForm} />
        <Route exact path="/quiz" component={Quiz} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/create-question" component={CreateQuestion} />
        <Route exact path="/create-quiz" component={CreateQuiz} />
      </Switch>
    </Router>
  );
}

export default App;
