import React from "react";

const Home = () => {
  return (
    <div className="fluid-container">
      <div className="container mt-5">
        <h4>illumnus | Quiz Portal Task</h4>
        <hr />

        <div className="jumbotron header mt-4">
          <h3 className="title_home">Welcome to the Quiz Portal</h3>
          <p className="mb-0">
            We always keep you ahead! Learn and Share your experiences with us.
          </p>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-md-7">
            <h4>Take a quiz to test your skills</h4>
            <p>
              Just enter the unique code to enter the quiz. Afterwards, enter
              your email and name to get started with the quiz.
            </p>
            <button className="btn btn-primary mb-5">Attempt Quiz</button>
            <hr/>
            <p>Submitted by<br></br>Aakash Goel - goelaakash79@gmail.com</p>
          </div>
          <div className="col-md-5">
            <div className="about-illumnus jumbotron p-4">
              <h4 style={{ color: "#ffffff" }}>About illumnus</h4>

              <p className="mt-2">
                With the vision of transforming education, illumnus is a startup
                from IIT Bombay &amp; BITS Pilani alumni. The core product is a
                B2B SaaS-based collaborative Learning Management Software (LMS)
                for premier academic institutes: Schools, Colleges, Universities
                and Coaching Institutions.
              </p>

              <a
                href="https://illumnus.com"
                className="btn btn-primary"
              >
                Visit us at illumnus.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
