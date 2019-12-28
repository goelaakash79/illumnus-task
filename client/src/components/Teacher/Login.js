import React, { Component } from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import cookie from "react-cookies";
import baseurl from "../../config";

class Login extends Component {
  state = {
    email: "",
    password: "",
    message: ""
  };

  handleSubmit = e => {
    const { history } = this.props;
    e.preventDefault();
    let { email, password } = this.state;
    const expires = new Date();
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
    let data = { email, password };
    axios
      .post(`${baseurl}users/login`, data)
      .then(({ data }) => {
        this.setState({ message: data.message });
        const token = data.data.token;
        if (token) {
          cookie.save("token", token, { path: "/", expires });
          history.push("/dashboard");
          // window.location.reload();
        }
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    const { history } = this.props;

    let token = cookie.load("token");
    if (token) {
      history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="fluid-container">
        <div className="container pt-5" style={{ marginTop: 102 }}>
          <div
            className="card p-5 col-12 col-md-5 mt-5"
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
              <form onSubmit={this.handleSubmit}>
                <input
                  placeholder="Enter your email address"
                  className="form-control mb-3"
                  onChange={this.handleChange}
                  name="email"
                  // value={this.state.email}
                  type="email"
                  required
                />
                <input
                  placeholder="Enter your password"
                  className="form-control mb-3"
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  // value={this.state.password}
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
