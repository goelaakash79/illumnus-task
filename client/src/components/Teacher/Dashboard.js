import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";

class Dashboard extends Component {
  handleLogout = e => {
    cookie.remove("token", { path: "/" });
  };

  componentDidMount() {
    const { history } = this.props;

    let token = cookie.load("token");
    if (!token) {
      history.push("/login");
    }
  }

  render() {
    return (
      <div className="fluid-container">
        <div className="container mt-5">
          <h4>illumnus | Quiz Portal Task</h4>
          <hr />

          <h5 className="mb-5">
            Dashboard
            <Link
              to="/login"
              onClick={this.handleLogout}
              className="btn btn-danger"
              style={{ float: "right" }}
            >
              Logout
            </Link>
          </h5>
          <div className="row">
            <div className="col-md-6">
              <div className="about-illumnus jumbotron p-4">
                <h4 style={{ color: "#ffffff", fontWeight: 500 }}>iQuiz</h4>

                <p className="mt-2">
                  Choose from various available questions on the platform, and
                  make the best possible quiz to tack the progress of your
                  students on to go.
                </p>

                <Link to="/create-quiz" className="btn btn-primary">
                  Create New Quiz
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="about-illumnus jumbotron p-4"
                style={{ backgroundColor: "#119C58" }}
              >
                <h4 style={{ color: "#ffffff", fontWeight: 500 }}>iLibrary</h4>

                <p className="mt-2">
                  Please add your questions to the illumnus questions library to
                  prepare your students for the best.
                </p>

                <Link to="/create-question" className="mr-2 btn btn-primary">
                  Create New Question
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="about-illumnus jumbotron p-4"
                style={{ backgroundColor: "#F4BC05" }}
              >
                <h4 style={{ color: "#ffffff", fontWeight: 500 }}>iQLibrary</h4>

                <p className="mt-2">
                  Check the list of available quizzes created by experts in the
                  industry and assign the codes to the students.
                </p>

                <Link to="/quizzes" className="mr-2 btn btn-primary">
                  See Quizzes
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="about-illumnus jumbotron p-4"
                style={{ backgroundColor: "#424242" }}
              >
                <h4 style={{ color: "#ffffff", fontWeight: 500 }}>iTrack</h4>

                <p className="mt-2">
                  Track the progress and results of the quizzes attempted by
                  your students, and analyse their performance.
                </p>

                <Link to="/attempts" className="mr-2 btn btn-primary">
                  Check Results
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
