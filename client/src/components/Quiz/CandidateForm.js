import React from "react";
import { Link } from "react-router-dom";

const CandidateForm = () => {
  return (
    <div className="fluid-container">
      <div className="container mt-5">
        <h4>illumnus | Quiz Portal Task</h4>
        <hr />
        <label style={{ color: "#323232" }}>Quiz Code - ILLUMNUS-dfea8e</label>

        <br />
        <br />

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
          <div className="row mb-4">
            <div className="col-md-6 col-12">
              Title:
              <br></br>
              Subject:
            </div>
            <div className="col-md-6 col-12">
              Total Marks:
              <br></br>
              Total Duration:
            </div>
          </div>

          <h5 style={{ color: "#fff", fontWeight: 500 }}>Candidate details</h5>
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
            <div className="col-md-6">
              <input
                className="mb-3 form-control name-input"
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="col-md-6">
              <input
                className="mb-4 form-control name-input"
                placeholder="Enter your email"
              ></input>
            </div>
            <div className="col-12">
              <Link to="/quiz" className="btn btn-primary">Start the quiz</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateForm;
