import React,{Component} from 'react';
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import Button from '../components/Button'
import Footer from '../components/Footer'
import '../css/login-signup.css';
class Login extends Component{
  state={
LoginUser:{
  email:'',
  password:'',

},
canLogin:false
  }
  render(){
    return (
      <div className="container-parent">
        <Nav />
        <div className="container-fluid login-parent-container">
          <div className="row ml-auto mr-auto login-container">
            <div className="login-img"></div>
            <div className="login-info">
              <p className="sign">Login</p>
              <form className="forms" action="">
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
                <Button myBtnClass="form-btn" btnType=''>Submit</Button>
                {/* <button className="form-btn">Submit</button> */}
              </form>
              <p className="member">
                Not a Member? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
}
}
 
export default Login;

