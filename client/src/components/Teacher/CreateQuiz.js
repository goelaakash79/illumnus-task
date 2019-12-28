import React, { Component } from "react";
import cookie from "react-cookies";
import axios from "axios";

// import { Link } from "react-router-dom";

class CreateQuiz extends Component {
  state = {
    title: "",
    subject: "",
    duration: "",
    questions: [],
    allQuestions: []
  };
  handleSubmit = e => {
    // let { history } = this.props;
    e.preventDefault();
    let { title, subject, duration } = this.state;
    // const data = { question, answer, options, marks };
    let token = cookie.load("token");
    let auth = {
      headers: {
        "x-auth-token": token
      }
    };
    // axios
    //   .post("http://localhost:8000/api/v1/quiz/create-quiz", data, auth)
    //   .then(({ data }) => {
    //     this.setState({ message: data.message });
    //     if (this.state.message === "question created") {
    //       swal("Question Added", "", "success");
    //       window.location.reload();
    //     }
    //   })
    //   .catch(err => console.log(err));
  };

  handleInputs = e => {
    console.log(e.target.checked);
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state);

    if(e.target.checked && e.target.type === "checkbox") {
      this.state.questions.push(e.target.value);
    }

    //TODO:
    // questions if unchecked toh unko array mai se pop krna hai
    // dashboard pr saare available quiz dekhne ka option + unki api
    console.log(this.state.questions)
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
    axios
      .get("http://localhost:8000/api/v1/quiz/questions", auth)
      .then(({ data }) => {
        this.setState({ allQuestions: data.data.questions });
      })
      .catch(err => console.log(err));
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
