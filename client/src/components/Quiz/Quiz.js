import React from "react";
// import { Link } from "react-router-dom";

const Quiz = () => {
  return (
    <div className="fluid-container">
      <div className="container mt-5">
        <h4>illumnus | Quiz Portal Task</h4>
        <hr />
        <label style={{ color: "#323232" }}>Quiz Code - ILLUMNUS-dfea8e</label>

        <br />
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
                  Name:
                  <br></br>
                  Title:
                  <br></br>
                  Subject:
                </div>
                <div className="col-md-6 col-12">
                  Email:
                  <br></br>
                  Total Marks:
                  <br></br>
                  Total Duration:
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card duration-meter p-4">
              {/* <h5>Time Left</h5>
              <hr
                style={{
                  backgroundColor: "#333",
                  opacity: 0.7,
                  margin: 0,
                  width: "10%"
                }}
                className="mb-2"
              /> */}
              <span style={{ fontSize: "32px", color: "#121212" }}>
                02:05 minutes left
              </span>
              {/* ** don't forget to submit your quiz before the time ends */}
            </div>
          </div>
        </div>

        <div class="quiz-section mt-5 mb-5">
          <div className="question">
            <h5>Q.1. Answer this beautiful question?</h5>
            <input type="radio" /> Option 1<br />
            <input type="radio" /> Option 2<br />
            <input type="radio" /> Option 3<br />
            <input type="radio" /> Option 4
          </div>

          <button className="btn btn-primary btn-lg">Submit Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
