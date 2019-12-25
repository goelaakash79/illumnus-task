import React from "react";
import img from "../assets/images/front-image-1.svg";
const Home = () => {
  return (
    <div className="fluid-container">
      <div className="container mt-5">
        <h4>Illumnus | Quiz Portal Task</h4>
        <hr />
        <div className="jumbotron row top-banner mt-4 px-4 pt-5 pb-5">
          <div className="col-md-7">
            <h4>Take a quiz to test your skills</h4>
            <p>
              Just enter the unique code to enter the quiz. Afterwards, enter
              your email and name to get started with the quiz.
            </p>
            <button className="btn btn-primary">Take Quiz</button>
          </div>
          <div className="col-md-5">
            <img width="100%" src={img}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
