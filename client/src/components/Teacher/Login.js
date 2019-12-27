import React, { Component } from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    const handleSubmit = e => {
      e.preventDefault();
      let data = this.state;
      // console.log(data);
      axios
        .post("http://localhost:8000/api/v1/users/login", data)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    };

    const handleChange = e => {
      let email, password;
      if (e.target.name === "email") {
        email = e.target.value;
        this.setState({
          email
        });
      }
      if (e.target.name === "password") {
        password = e.target.value;
        this.setState({
          password
        });
      }
      // console.log(this.state);
    };

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
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Enter your email address"
                  className="form-control mb-3"
                  onChange={handleChange}
                  name="email"
                  type="email"
                  required
                />
                <input
                  placeholder="Enter your password"
                  className="form-control mb-3"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  required
                />
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                  className="col-12 btn btn-primary"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
