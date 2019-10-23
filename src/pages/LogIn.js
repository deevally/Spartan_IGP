import React, { Component } from "react";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "../components/Button";
import FormErrors from "../components/formErrors";
import "../css/login-signup.css";
import { BaseUrl } from "../utils/baseUrl";

const url = `${BaseUrl}/loginadmin`;
class Login extends Component {
  state = {
    email: "",
    password: "",
    formErrors: { fullname: "", email: "", password: "" },
    emailValid: false,
    passwordValid: false,
    formValid: false,
    Redirect: false
  };

  handleUserInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/Admin" />;
    }
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };

    const loginAdmin = await Axios.post(url, user);

    console.log(loginAdmin.data);

    this.setState({
      Redirect: true
    });
  };
  validateField(fieldName, value) {
    const { emailValid, passwordValid, formErrors } = this.state;
    let validationFormErrors = formErrors;
    let validateEmail = emailValid;
    let validatePassword = passwordValid;

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
      default:
        break;
    }

    this.setState(
      {
        formErrors: validationFormErrors,
        emailValid: validateEmail,
        passwordValid: validatePassword
      },
      this.validateForm
    );
  }

  validateForm() {
    const { emailValid, passwordValid } = this.state;
    this.setState({ formValid: emailValid && passwordValid });
  }
  errorClass(error) {
    return error.length === 0 ? "" : "alert alert-danger";
  }

  render() {
    const { email, password, formErrors, formValid } = this.state;

    return (
      <div className="container-parent">
        {this.renderRedirect()}
        <Nav Blog="Blog" Jobs="Jobs" />
        <FormErrors formErrors={formErrors} />
        <div className="container-fluid login-parent-container">
          <div className="row ml-auto mr-auto login-container">
            <div className="login-img"></div>
            <div className="login-info">
              <p className="log">Login</p>
              <form className="forms" action="" onSubmit={this.handleSubmit}>
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
                  Submit
                </Button>
              </form>
              <p className="member">
                Not a Member? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Login;
