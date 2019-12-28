import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import baseurl from "../../config";

class CodeForm extends Component {
  state = {
    code: "",
    message: "",
    quiz: {}
  };

  handleSubmit = e => {
    let { history } = this.props;
    e.preventDefault();
    console.log(this.state);
    axios
      .get(`${baseurl}quiz/${this.state.code}`)
      .then(({ data }) => {
        const quiz = data.data.quiz;
        history.push({pathname: "/candidate-details", state: {quiz}})
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="fluid-container">
        <div className="container mt-5">
          <h4>illumnus | Quiz Portal Task</h4>
          <hr />
          <label style={{ color: "#323232" }}>Please enter the quiz code</label>

          <div className="row col-12">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                onChange={this.handleChange}
                name="code"
                className="mb-3 mr-4 form-control quiz-code-input"
              ></input>
              <button className="btn btn-primary">Next</button>
            </form>
            {/* <Link to="/candidate-details" className="col-2 btn btn-primary">
              Next
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CodeForm;
