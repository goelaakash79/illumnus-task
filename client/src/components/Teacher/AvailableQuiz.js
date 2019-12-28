import React, { Component } from "react";
import cookie from "react-cookies";
import axios from "axios";
import baseurl from "../../config";

class AvailableQuiz extends Component {
  state = {
    quizzes: []
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
        .get(`${baseurl}quiz`, auth)
        .then(({ data }) => {
        //   console.log(data);
          this.setState({ quizzes: data.data });
          console.log(this.state)
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
          <p style={{ fontSize: 20, margin: 0 }}>See Quizzes</p>
          <div className="section mt-4">
            <table className="table ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Code</th>
                  <th>Title</th>
                  <th>Subject</th>
                  <th>No. of Questions</th>
                  <th>Marks</th>
                  <th>Duration (in mins)</th>
                </tr>
              </thead>
              <tbody>
                {this.state.quizzes.map((quiz, i) => {
                  return (
                    <tr key={i}>
                      <td>{++i}</td>
                      <td><span
                      style={{
                        fontSize: 16,
                        padding: 8,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        background: "#5F2E5B",
                        borderRadius: 4,
                        color: "white",
                        fontWeight: 500
                      }}
                    >{quiz.code}</span></td>
                      <td>{quiz.title}</td>
                      <td>{quiz.subject}</td>
                      <td>{quiz.questions.length}</td>
                      <td>{quiz.marks}</td>
                      <td>{quiz.duration}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AvailableQuiz;
