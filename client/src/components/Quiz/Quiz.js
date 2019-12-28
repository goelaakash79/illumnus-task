import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Timer from "react-compound-timer";
import axios from "axios";
// import swal from "sweetalert";
import baseurl from "../../config";

class Quiz extends Component {
  state = {
    time_taken: this.props.location.state.data.quiz.duration,
    score: 0,
    name: this.props.location.state.data.name,
    email: this.props.location.state.data.email,
    code: this.props.location.state.data.quiz.code
  };

  handleTimeUp = e => {
    let { history } = this.props;
    let { quiz } = this.props.location.state.data;
    let { name, email } = this.state;

    this.setState({ time_taken: quiz.duration });
    let data = this.state;
    axios
      .post(`${baseurl}quiz/${quiz.code}`, data)
      .then(({ data }) => {
        if (data.message === "quiz attempted") {
          history.push({
            pathname: "/result",
            state: { score: this.state.score, code: quiz.code, email, name }
          });
          // swal(`Quiz Attempted\nYour Score: ${this.state.score}`, "", "success")
        }
      })
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    let { history } = this.props;

    e.preventDefault();
    let { quiz } = this.props.location.state.data;
    let { name, email } = this.state;
    this.setState({ time_taken: 1 });

    let data = this.state;
    axios
      .post(`${baseurl}quiz/${quiz.code}`, data)
      .then(({ data }) => {
        if (data.message === "quiz attempted") {
          history.push({
            pathname: "/result",
            state: { score: this.state.score, code: quiz.code, email, name }
          });
          // swal(`Quiz Attempted\nYour Score: ${this.state.score}`, "", "success")
        }
      })
      .catch(err => console.log(err));
  };

  checkOption = e => {
    let { questions } = this.props.location.state.data.quiz;
    let { score } = this.state;
    questions.forEach(question => {
      if (
        question._id === e.target.name &&
        question.answer === e.target.value
      ) {
        score += question.marks;
        this.setState({ score });
      }
    });
  };

  render() {
    let { data } = this.props.location.state;
    let { name, email, quiz } = data;
    return (
      <div className="fluid-container">
        <div className="container mt-5">
          <h4>illumnus | Quiz Portal Task</h4>
          <hr />
          <label className="mb-4" style={{ color: "#323232" }}>
            Quiz Code - <b style={{ letterSpacing: 1 }}>{quiz.code}</b>
          </label>
          <br />

          <div className="row">
            <div className="col-md-8">
              <div className="card about-illumnus p-4">
                <h5 style={{ color: "#fff", fontWeight: 500 }}>Quiz details</h5>
                <hr
                  style={{
                    backgroundColor: "#fff",
                    opacity: 0.7,
                    margin: 0,
                    width: "5%"
                  }}
                  className="mb-4"
                ></hr>
                <div className="row">
                  <div className="col-md-6 col-12">
                    Name: <b style={{ letterSpacing: 1 }}>{name}</b>
                    <br></br>
                    Title: <b style={{ letterSpacing: 1 }}>{quiz.title}</b>
                    <br></br>
                    Subject: <b style={{ letterSpacing: 1 }}>{quiz.subject}</b>
                  </div>
                  <div className="col-md-6 col-12">
                    Email: <b style={{ letterSpacing: 1 }}>{email}</b>
                    <br></br>
                    Maximum Marks:
                    <b style={{ letterSpacing: 1 }}>{quiz.marks} marks</b>
                    <br></br>
                    Total Duration:
                    <b style={{ letterSpacing: 1 }}>{quiz.duration} minutes</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card duration-meter p-4">
                {/* quiz.duration * 60000 */}
                <Timer
                  initialTime={quiz.duration * 60000}
                  checkpoints={[
                    {
                      time: quiz.duration * 59999,
                      callback: () => console.log("Quiz Started")
                    },
                    {
                      time: 0,
                      callback: this.handleTimeUp
                    }
                  ]}
                  direction="backward"
                >
                  {() => (
                    <React.Fragment>
                      <Timer.Minutes /> mins : <Timer.Seconds /> secs left
                    </React.Fragment>
                  )}
                </Timer>
              </div>
            </div>
          </div>

          <form
            onSubmit={this.handleSubmit}
            method="post"
            className="quiz-section mt-5 mb-5"
          >
            {quiz.questions.map((question, i) => {
              return (
                <div className="question" key={question._id}>
                  <h5>
                    Q.{++i} {question.question}
                    <span
                      style={{
                        fontSize: 16,
                        float: "right",
                        padding: 8,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        background: "#5F2E5B",
                        borderRadius: 4,
                        color: "white",
                        fontWeight: 500
                      }}
                    >
                      Marks {question.marks}
                    </span>
                  </h5>
                  {question.options.map((option, i) => {
                    return (
                      <div key={option} style={{ color: "black" }}>
                        <input
                          className="mr-2"
                          onChange={this.checkOption}
                          type="radio"
                          value={++i}
                          name={question._id}
                        />
                        {option}
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <button className="btn btn-primary">Submit Quiz</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Quiz;
