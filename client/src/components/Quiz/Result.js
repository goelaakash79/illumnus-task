import React, { Component } from "react";

class CandidateForm extends Component {
  render() {
    let { score, name, code, email } = this.props.location.state;
    return (
      <div className="fluid-container">
        <div className="container mt-5">
          <h4>illumnus | Quiz Portal Task</h4>
          <hr />
          <label className="mb-4" style={{ color: "#323232" }}>
            Quiz Code - <b style={{ letterSpacing: 1 }}>{code}</b>
          </label>

          <div className="card about-illumnus p-4">
            <h5 style={{ color: "#fff", fontWeight: 500 }}>Result details</h5>
            <hr
              style={{
                backgroundColor: "#fff",
                opacity: 0.7,
                margin: 0,
                width: "5%"
              }}
              className="mb-4"
            ></hr>
              Name: <b style={{ letterSpacing: 1}}>{name}</b>
              <br></br>
              Email: <b style={{ letterSpacing: 1 }}>{email}</b>
              <br></br>
            <div style={{ fontSize: 24 }}>
              Your Quiz Score is <b style={{ letterSpacing: 1 }}>{score}</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CandidateForm;
