import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "../components/Button";
import FormErrors from "../components/formErrors";
import "../css/login-signup.css";
import { BaseUrl } from "../utils/baseUrl";
// import Spinner from "../components/Spinner";

const url = `${BaseUrl}/createadmin`;

class Signup extends Component {
  state = {
    loading: false,
    fullname: "",
    email: "",
    password: "",
    formErrors: { fullname: "", email: "", password: "" },
    fullnameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false,
    userExists: {
      status: false,
      message: ""
    },
    submitting: ''
  };

setRedirect = () =>{
    this.setState({
        submitting: 'Signing up...'
    })
}
  handleUserInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { fullname, email, password } = this.state;
    const user = {
      fullname,
      email,
      password
    };
    this.setState({ loading: true });
    try {
      await Axios.post(url, user);
      this.props.history.push("/login");
    } catch (error) {
      this.setState({
        userExists: {
          ...this.state.userExists,
          status: true,
          message: error.response.data
        },
        submitting: ''
      });
    }

    
  };
  validateField(fieldName, value) {
    const { fullnameValid, emailValid, passwordValid, formErrors } = this.state;
    let validationFormErrors = formErrors;
    let validateEmail = emailValid;
    let validatePassword = passwordValid;
    let validateFullname = fullnameValid;

    switch (fieldName) {
      case "email":
        validateEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        validationFormErrors.email = validateEmail ? "" : " is not valid!";
        break;
      case "password":
        validatePassword = value.length >= 6;
        validationFormErrors.password = validatePassword
          ? ""
          : " must be 6 characters or more!";
        break;
      case "fullname":
        validateFullname = value.length >= 6;
        validationFormErrors.fullname = validateFullname
          ? ""
          : " must be 6 characters or more!";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: validationFormErrors,
        fullnameValid: validateFullname,
        emailValid: validateEmail,
        passwordValid: validatePassword
      },
      this.validateForm
    );
  }

  validateForm() {
    const { fullnameValid, emailValid, passwordValid } = this.state;
    this.setState({
      formValid: fullnameValid && emailValid && passwordValid
    });
  }
  errorClass(error) {
    return error.length === 0 ? "" : "alert alert-danger";
  }

  render() {
    const {
      fullname,
      email,
      password,
      formErrors,
      formValid,
      userExists,
      submitting
    } = this.state;
    return (
      <div className="container-parent">
        <Nav Blog="Blog" Jobs="Jobs" />

        <FormErrors formErrors={formErrors} />
        {/* {loading === true ? <Spinner />: false} */}
        <div className="container-fluid login-parent-container">
          {userExists.status && (
            <div className="errordesign">{userExists.message}</div>
          )}

          <div className="row ml-auto mr-auto login-container">
            <div className="login-img"></div>
            <div className="login-info">
              <p className="sign">Signup</p>
              <form className="forms" action="" onSubmit={this.handleSubmit}>
                <label htmlFor="">
                  <i className="fas fa-user"></i>
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className={`fullname form-group ${this.errorClass(
                      formErrors.fullname
                    )}`}
                    type="text"
                    placeholder="Fullname"
                    name="fullname"
                    value={fullname}
                  ></input>
                </label>
                <label htmlFor="">
                  <i className="fas fa-at"></i>
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className={`name ${this.errorClass(formErrors.email)}`}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                  ></input>
                </label>

                <label htmlFor="">
                  <i className="fas fa-lock"></i>
                  <input
                    onChange={event => this.handleUserInput(event)}
                    className={`password ${this.errorClass(
                      formErrors.password
                    )}`}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                  ></input>
                </label>
                <Button
                  onClick={this.setRedirect}
                  myBtnClass="form-btn"
                  btnType=""
                  disabled={!formValid}
                >
                  {submitting === "" ? "Signup" : "Signing up..."}
                </Button>
              </form>
              <p className="member">
                Already a Member? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
