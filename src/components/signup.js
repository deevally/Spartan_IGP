import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Button from "../components/Button";
import "../css/login-signup.css";
const Signup = () => {
  return (
    <div className="container-parent">
      <Nav />
      <div className="container-fluid login-parent-container">
        <div className="row ml-auto mr-auto login-container">
          <div className="login-img"></div>
          <div className="login-info">
            <p className="sign">Signup</p>
            <form className="forms" action="">
              <label htmlFor="">
                <input
                  className="fullname"
                  type="text"
                  placeholder="Fullname"
                ></input>
              </label>
              <label htmlFor="">
                <input
                  className="name"
                  type="text"
                  placeholder="Email Address"
                ></input>
              </label>
              <label htmlFor="">
                <input
                  className="password"
                  type="text"
                  placeholder="Password"
                ></input>
              </label>
              <Button myBtnClass="form-btn" btnType="">
                Submit
              </Button>
            </form>
            <p className="member">
              Already a Member? <Link to="/signup">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
