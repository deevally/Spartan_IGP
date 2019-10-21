import React from "react";
import { NavLink,Link } from "react-router-dom";
import '../css/App.css';
import imglogo from "../assets/images/logo.png"
import '../css/Nav.css';

const Nav = ({openLoginModal, Jobs, Blog, SignUp, LogOut, LogIn, Post, AddJobs, ViewJobs }) => {

  
  return (
    <div>

      <nav className="navbar navbar-expand-sm navbar-light fixed-top ">
        <div className="container">
          <NavLink to='/'

            className="navbar-brand" >
            <img src={imglogo} alt="" style={{ width: '250px' }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to='/Blog' className="nav-link" >
                  {Blog} <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/'
                  
                 className="nav-link" >
                  {Jobs} <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to='/' 

                  className="nav-link" onClick={openLoginModal} >
                  {LogIn} <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to='/Sign_Up' className="nav-link" >
                  {SignUp} <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/' className="nav-link" >
                  {LogOut} <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/View_Jobs' className="nav-link" >
                  {ViewJobs} <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Add_Jobs' className="nav-link" >
                  {AddJobs} <span className="sr-only">(current)</span>
                </NavLink>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
