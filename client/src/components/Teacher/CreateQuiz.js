import React, { Component } from "react";
import cookie from "react-cookies";
import axios from "axios";
import swal from "sweetalert";
import baseurl from "../../config";

class CreateQuiz extends Component {
  state = {
    title: "",
    subject: "",
    duration: "",
    questions: [],
    allQuestions: [],
    message: ""
  };

  handleSubmit = e => {
    // let { history } = this.props;
    e.preventDefault();
    let { title, subject, duration, questions } = this.state;
    const data = { questions, title, subject, duration };

    let token = cookie.load("token");
    let auth = {
      headers: {
        "x-auth-token": token
      }
    };
    axios
      .post(`${baseurl}quiz/create-quiz`, data, auth)
      .then(({ data }) => {
        this.setState({ message: data.message });
        if (this.state.message === "quiz created") {
          swal("Quiz Created", "", "success");
          window.location.reload();
        }
      })
      .catch(err => console.log(err));
  };

  handleInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.checked && e.target.type === "checkbox") {
      this.state.questions.push(e.target.value);
    }

    if (!e.target.checked && e.target.type === "checkbox") {
      let index = this.state.questions.indexOf(e.target.value);
      if (index > -1) this.state.questions.splice(index, 1);
    }
  };

  componentDidMount() {
    const { history } = this.props;

    let token = cookie.load("token");
    if (!token) {
      history.push("/login");
    }
    let auth = {
      headers: {
        "x-auth-token": token
      }
    };
    if (token) {
      axios
        .get(`${baseurl}quiz/questions`, auth)
        .then(({ data }) => {
          this.setState({ allQuestions: data.data.questions });
        })
        .catch(err => console.log(err));
    }
  }
  render() {
    return (
      <div className="fluid-container">
        <div className="container mt-5 mb-5">
          <h4>illumnus | Quiz Portal Task</h4>
          <hr />
          <p style={{ fontSize: 20, margin: 0 }}>Create Quiz</p>
          <div className="section mt-4">
            <form onSubmit={this.handleSubmit}>
              <input
                placeholder="enter quiz title"
                name="title"
                type="text"
                onChange={this.handleInputs}
                className="form-control mb-4"
              />

              <div className="row">
                <div className="col-md-6">
                  <input
                    placeholder="enter subject"
                    name="subject"
                    type="text"
                    onChange={this.handleInputs}
                    className="form-control mb-4"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    placeholder="enter duration (in minutes)"
                    name="duration"
                    type="number"
                    onChange={this.handleInputs}
                    className="form-control mb-4"
                  />
                </div>
              </div>

              <label>Choose questions for the quiz</label>
              <div className="questions-section mb-4">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Pick</th>
                      <th>Question</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.allQuestions.map((question, i) => {
                      return (
                        <tr key={question._id}>
                          <td>
                            <input
                              type="checkbox"
                              onChange={this.handleInputs}
                              name="question"
                              value={question._id}
                            ></input>
                          </td>
                          <td>{question.question}</td>
                          <td>{question.marks}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <button className="btn btn-primary">Create Quiz</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateQuiz;
