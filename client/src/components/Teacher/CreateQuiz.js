import React from "react";
// import { Link } from "react-router-dom";

const CreateQuiz = () => {
  return (
    <div className="fluid-container">
      <div className="container mt-5">
        <h4>illumnus | Quiz Portal Task</h4>
        <hr />
        <p style={{ fontSize: 20, margin: 0 }}>Create Quiz</p>
        <div className="section mt-4">
          <input
            placeholder="enter quiz title"
            name="title"
            className="form-control mb-4"
          />

          <div className="row">
            <div className="col-md-6">
              <input
                placeholder="enter subject"
                name="subject"
                className="form-control mb-4"
              />
            </div>
            <div className="col-md-6">
              <input
                placeholder="enter duration (in minutes)"
                name="duration"
                className="form-control mb-4"
              />
            </div>
          </div>

          <label>Choose questions for the quiz</label>
          <div className="questions-section mb-4">
            <table className="table ">
              <thead>
                <tr>
                  <th>Pick</th>
                  <th>Question</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>This is a nice question?</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>This is a nice question?</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
            {/* <input type="checkbox"></input> <i>Question</i>- This is a beautiful
            question? <br/>
            <input type="checkbox"></input> <i>Question</i>- This is a beautiful
            question? <br/>
            <input type="checkbox"></input> <i>Question</i>- This is a beautiful
            question? <br/> */}
          </div>

          <button className="btn btn-primary">Create Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
