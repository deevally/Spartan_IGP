import React from "react";
import Nav from "../components/Nav";

import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "../css/Apply.css";

const Apply = () => {
  return (
    <div>
      <Nav Jobs="Jobs" SignUp="Signup" LogIn="Login" />
      <Header
        className="headerBlog"
        headerText="blogHeaderText"
        HeaderText__first="Apply"
        jobDetailsText="HOME / JOB DETAILS"
        jobDetails="jobDetails"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto offset-md-1 my-5">
            <form className="applyJob my-4">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="firstname">FirstName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="firstname"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="lastname">LastName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="lastname"
                  />
                </div>
              </div>

              <div className="form-group">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputCity">State</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">Postal Address</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Cover Letter</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write something about yourself..."
                ></textarea>
              </div>
              <div className="form-group mb-5">
                <label for="file">Example file input</label>
                <input type="file" className="form-control-file" id="file" />
              </div>
              <Button btnType=" btn btn-primary" myBtnClass="apply mb-5">
                Apply
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
