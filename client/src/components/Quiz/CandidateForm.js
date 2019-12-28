import React, { Component } from "react";
// import { Link } from "react-router-dom";

class CandidateForm extends Component {
  state = {
    name: "",
    email: ""
  };

  handleSubmit = e => {
    let { history } = this.props;
    e.preventDefault();
    let { quiz } = this.props.location.state;
    let data = { name: this.state.name, email: this.state.email, quiz };
    history.push({ pathname: "/quiz", state: { data } });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let { quiz } = this.props.location.state;
    return (
      <div className="fluid-container">
        <div className="container mt-5">
          <h4>illumnus | Quiz Portal Task</h4>
          <hr />
          <label className="mb-4" style={{ color: "#323232" }}>
            Quiz Code - <b style={{ letterSpacing: 1 }}>{quiz.code}</b>
          </label>

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
                Title: <b style={{ letterSpacing: 1 }}>{quiz.title}</b>
                <br></br>
                Subject: <b style={{ letterSpacing: 1 }}>{quiz.subject}</b>
              </div>
              <div className="col-md-6 col-12">
                Maximum Marks:{" "}
                <b style={{ letterSpacing: 1 }}>{quiz.marks} marks</b>
                <br></br>
                Total Duration:{" "}
                <b style={{ letterSpacing: 1 }}>{quiz.duration} minutes</b>
              </div>
            </div>

            <h5 style={{ color: "#fff", fontWeight: 500 }}>
              Candidate details
            </h5>
            <hr
              style={{
                backgroundColor: "#fff",
                opacity: 0.7,
                margin: 0,
                width: "5%"
              }}
              className="mb-4"
            ></hr>

            <div>
              <form className="row" onSubmit={this.handleSubmit} method="post">
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control name-input"
                    placeholder="Enter your name"
                    type="text"
                    onChange={this.handleChange}
                    name="name"
                  ></input>
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-4 form-control name-input"
                    placeholder="Enter your email"
                    type="text"
                    onChange={this.handleChange}
                    name="email"
                  ></input>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary">Start the quiz</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CandidateForm;
