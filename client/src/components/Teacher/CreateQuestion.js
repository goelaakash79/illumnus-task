import React from "react";
// import { Link } from "react-router-dom";

const CreateQuestion = () => {
  return (
    <div className="fluid-container">
      <div className="container mt-5">
        <h4>illumnus | Quiz Portal Task</h4>
        <hr />
        <p style={{fontSize: 20, margin:0}}>Add a new question</p>
        <div className="section mt-4">
          <input
            placeholder="enter your question"
            name="question"
            className="form-control mb-4"
          />
          <div className="row">
            <div className="col-md-3 col-6">
              <input
                placeholder="enter option 1"
                name="option1"
                className="form-control mb-4"
              />
            </div>
            <div className="col-md-3 col-6">
              <input
                placeholder="enter option 2"
                name="option2"
                className="form-control mb-4"
              />
            </div>
            <div className="col-md-3 col-6">
              <input
                placeholder="enter option 3"
                name="option3"
                className="form-control mb-4"
              />
            </div>
            <div className="col-md-3 col-6">
              <input
                placeholder="enter option 4"
                name="option4"
                className="form-control mb-4"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input
                placeholder="enter correct option number"
                name="answer"
                className="form-control mb-4"
              />
            </div>
            <div className="col-md-6">
              <input
                placeholder="enter question marks"
                name="marks"
                className="form-control mb-4"
              />
            </div>
          </div>
          <button className="btn btn-primary">Add Question</button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestion;
