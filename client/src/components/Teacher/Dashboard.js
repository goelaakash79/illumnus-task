import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="fluid-container">
      <div className="container mt-5">
        <h4>illumnus | Quiz Portal Task</h4>
        <hr />

        <h5 className="mb-5">
          Dashboard{" "}
          <button className="btn btn-danger" style={{ float: "right" }}>
            Logout
          </button>
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
              <h4 style={{ color: "#ffffff", fontWeight: 500 }}>iTrack</h4>

              <p className="mt-2">
                Track the progress and results of the quizzes attempted by your
                students, and analyse their performance.
              </p>

              <Link to="#" className="mr-2 btn btn-primary">
                Check Results
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="about-illumnus jumbotron p-4"
              style={{ backgroundColor: "#424242" }}
            >
              <h4 style={{ color: "#ffffff", fontWeight: 500 }}>iHelp</h4>

              <p className="mt-2">
                Feeling stuck? Contact us at doraemon@nick.com or give us a call
                on +91-7781778107
              </p>

              <Link to="#" className="mr-2 btn btn-primary">
                Report a issue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
