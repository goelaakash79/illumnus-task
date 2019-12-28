import React, { Component } from "react";
import cookie from "react-cookies";
import axios from "axios";
import baseurl from "../../config";

class Attempts extends Component {
  state = {
    attempts: []
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
        .get(`${baseurl}attempts`, auth)
        .then(({ data }) => {
          this.setState({ attempts: data.data });
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
          <p style={{ fontSize: 20, margin: 0 }}>Track Results</p>
          <div className="section mt-4">
            <table className="table ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Quiz Code</th>
                  <th>Time Taken</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.attempts.map((attempt, i) => {
                  return (
                    <tr key={i}>
                      <td>{++i}</td>
                      <td>{attempt.name}</td>
                      <td>{attempt.email}</td>
                      <td>{attempt.code}</td>
                      <td>{attempt.time_taken}</td>
                      <td>{attempt.score}</td>
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

export default Attempts;
