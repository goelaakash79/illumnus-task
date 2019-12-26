import React from "react";
import { Link } from "react-router-dom";

const CodeForm = () => {
  return (
    <div className="fluid-container">
      <div className="container mt-5">
        <h4>illumnus | Quiz Portal Task</h4>
        <hr />
        <label style={{ color: "#323232" }}>
          Please enter the quiz code
        </label>

        <div className="row col-12">
          <input className="col-5 mr-4 form-control quiz-code-input" ></input>
          {/* <button className="col-1 btn btn-outline-info">Next</button> */}
          <Link to="/candidate-details" className="col-2 btn btn-primary">Next</Link>

        </div>
      </div>
    </div>
  );
};

export default CodeForm;
