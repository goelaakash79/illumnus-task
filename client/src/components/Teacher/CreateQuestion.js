import React, { Component } from "react";
import cookie from "react-cookies";
import axios from "axios";
import swal from "sweetalert";

class CreateQuestion extends Component {
  state = {
    question: "",
    answer: "",
    marks: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    message: ""
  };
  
  componentDidMount() {
    const { history } = this.props;
    let token = cookie.load("token");
    if (!token) {
      history.push("/login");
    }
  }

  handleSubmit = e => {
    // let { history } = this.props;
    e.preventDefault();
    let {
      question,
      answer,
      option1,
      option2,
      option3,
      option4,
      marks
    } = this.state;
    let options = [option1, option2, option3, option4];
    const data = { question, answer, options, marks };
    let token = cookie.load("token");
    let auth = {
      headers: {
        "x-auth-token": token
      }
    };
    axios
      .post("http://localhost:8000/api/v1/quiz/add-question", data, auth)
      .then(({ data }) => {
        this.setState({ message: data.message });
        if (this.state.message === "question created") {
          swal("Question Added", "", "success");
          window.location.reload();
        }
      })
      .catch(err => console.log(err));
  };

  handleInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="fluid-container">
        <div className="container mt-5">
          <h4>illumnus | Quiz Portal Task</h4>
          <hr />
          <p style={{ fontSize: 20, margin: 0 }}>Add a new question</p>
          <div className="section mt-4">
            <form onSubmit={this.handleSubmit} method="post">
              <input
                placeholder="enter your question"
                type="text"
                name="question"
                onChange={this.handleInputs}
                className="form-control mb-4"
              />
              <div className="row">
                <div className="col-md-3 col-6">
                  <input
                    placeholder="enter option 1"
                    type="text"
                    name="option1"
                    onChange={this.handleInputs}
                    className="form-control mb-4"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <input
                    placeholder="enter option 2"
                    type="text"
                    name="option2"
                    onChange={this.handleInputs}
                    className="form-control mb-4"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <input
                    placeholder="enter option 3"
                    type="text"
                    name="option3"
                    onChange={this.handleInputs}
                    className="form-control mb-4"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <input
                    placeholder="enter option 4"
                    onChange={this.handleInputs}
                    name="option4"
                    type="text"
                    className="form-control mb-4"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input
                    placeholder="enter correct option number"
                    onChange={this.handleInputs}
                    name="answer"
                    type="number"
                    className="form-control mb-4"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    placeholder="enter question marks"
                    onChange={this.handleInputs}
                    name="marks"
                    type="number"
                    className="form-control mb-4"
                  />
                </div>
              </div>
              <button className="btn btn-primary">Add Question</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateQuestion;
