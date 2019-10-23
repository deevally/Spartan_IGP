// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Nav from "./Nav";
// import Button from "../components/Button";
// import "../css/login-signup.css";
// import FormErrors from "../components/formErrors";
// class Signup extends Component {
//   state = {
//     fullname: "",
//     email: "",
//     password: "",
//     formErrors: { fullname: "", email: "", password: "" },
//     fullnameValid: false,
//     emailValid: false,
//     passwordValid: false,
//     formValid: false
//   };

//   handleUserInput = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({ [name]: value }, () => {
//       this.validateField(name, value);
//     });
//   };

//   validateField(fieldName, value) {
//     const { fullnameValid, emailValid, passwordValid, formErrors } = this.state;
//     let validationFormErrors = formErrors;
//     let validateEmail = emailValid;
//     let validatePassword = passwordValid;
//     let validateFullname = fullnameValid;

//     switch (fieldName) {
//       case "email":
//         validateEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         validationFormErrors.email = validateEmail ? "" : " is invalid";
//         break;
//       case "password":
//             validatePassword = value.length >= 6;
//             validationFormErrors.password = validatePassword ? "" : " is too short";
//             break;
//       case "fullname":
//             validateFullname = value.length >= 6;
//             validationFormErrors.fullname = validateFullname ? "" : " is too short";
//             break;
//       default:
//         break;
//     }

//     this.setState({
//       formErrors: validationFormErrors,
//       fullnameValid: validateFullname,
//       emailValid: validateEmail,
//       passwordValid : validatePassword

//     }, this.validateForm);
//   }

//   validateForm(){
//           const { fullnameValid, emailValid, passwordValid } = this.state;
//       this.setState({ formValid: fullnameValid && emailValid &&  passwordValid});
//   }

//   render() {
//     const { fullname, email, password, formErrors, formValid } = this.state;
//     return (
//       <div className="container-parent">
//         <Nav Blog='Blog'/>

//         <FormErrors formErrors={formErrors} />

//         <div className="container-fluid login-parent-container">
//           <div className="row ml-auto mr-auto login-container">
//             <div className="login-img"></div>
//             <div className="login-info">
//               <p className="sign">Signup</p>
//               <form
//                 className="forms"
//                 action=""
//                 onChange={event => this.handleUserInput(event)}
//               >
//                 <label htmlFor="">
//                   <i class="fas fa-user"></i>
//                   <input
//                     className="fullname"
//                     type="text"
//                     placeholder="Fullname"
//                     name="fullname"
//                     value={fullname}
//                   ></input>
//                 </label>
//                 <label htmlFor="">
//                   <input
//                     className="name"
//                     type="email"
//                     placeholder="Email Address"
//                     name="email"
//                     value={email}
//                   ></input>
//                 </label>
//                 <label htmlFor="">
//                   <input
//                     className="password"
//                     type="password"
//                     placeholder="Password"
//                     name="pasword"
//                     value={password}
//                   ></input>
//                 </label>
//                 <Button myBtnClass="form-btn" btnType="" disabled={formValid}>
//                   Submit
//                 </Button>
//               </form>
//               <p className="member">
//                 Already a Member? <Link to="/signup">Login</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Signup;
