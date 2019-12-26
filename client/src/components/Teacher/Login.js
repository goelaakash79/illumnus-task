import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <div className="fluid-container">
      <div className="container pt-5" style={{ marginTop: 102 }}>
        <div
          className="card p-5 col-md-5 mt-5"
          style={{
            margin: "0 auto",
            border: 0,
            borderRadius: 8,
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)"
          }}
        >
          <h5 className="text-center" style={{ fontWeight: 500 }}>
            <img width="100" alt="illumnus-logo" src={logo} /> | Teacher Login
          </h5>
          <div className="mt-4">
            <input
              placeholder="Enter your email address"
              className="form-control mb-3"
            />
            <input
              placeholder="Enter your password"
              className="form-control mb-3"
            />
            <Link to="/dashboard" className="col-12 btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
