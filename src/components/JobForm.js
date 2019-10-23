import React, { Component, Fragment } from "react";
import axios from "axios";
// import Nav from "../components/Nav";`
import Button from "../components/Button";
// import BaseUrl from '../utils/baseUrl';
import {withRouter} from 'react-router-dom'
import Spinner from '../components/Spinner';
import Toast from './Toast';

import "../css/App.css";
import "../css/addJob.css";

// const url = `https://jsonplaceholder.typicode.com/posts`;
const url = `https://vgg-career-portal.herokuapp.com/api/createjob`;

class JobForm extends Component {
  state = {
    fields: {},
    errors: {},
    // loading: false
  };

  updateFormJob = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    console.log( this.state.fields)
  };

  showToast = ()=>{
    let x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){
      x.className = x.className.replace("show", ""); 
    }, 5000);
    // push to a new page;
    // this.props.history.push(this.props.callbackurl)
  }

  handleSubmit = e => {
    this.setState ({ loading: true})
    e.preventDefault({toast:true});
    let Data = {
      ...this.state
    };
    let {fields} = this.state;
    if (this.validateForm()) {
     
      console.log("fields-two", fields)
      axios
        .post(url, fields)
        .then(res => {
          console.log(res);
          console.log(res.data);
          if ((res.status = 201)) {
            console.log("Job created successfully");
            this.setState({
              loading:false,
              fields: fields
            });
            this.showToast();
            
          }
        })
        .catch(error => {
          this.setState({ loading: false });
          console.log(error);
        });
    }else{
      console.log("fields-two", fields)
    }
  };

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
  
    if (!fields["JobTitle"]) {
      formIsValid = false;
      errors["JobTitle"] = "*Enter a job title";
    }
  
    if (typeof fields["JobTitle"] !== "undefined") {
      if (!fields["JobTitle"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["JobTitle"] = "*Enter alphabet characters only";
      }
    }

    if (!fields["companyInformation"]) {
      formIsValid = false;
      errors["companyInformation"] = "*Enter a company info";
    }
    if (typeof fields["companyInformation"] !== "undefined") {
      if (!fields["companyInformation"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["companyInformation"] = "*Enter alphabet characters only";
      }
    }

    if (!fields["JobDescription"]) {
      formIsValid = false;
      errors["JobDescription"] = "*Enter a job description";
    }
    if (typeof fields["JobDescription"] !== "undefined") {
      if (!fields["JobDescription"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["JobDescription"] = "*Enter alphabet characters only";
      }
    }

    if (!fields["jobResponsibilities"]) {
      formIsValid = false;
      errors["jobResponsibilities"] = "*Enter job responsibilities";
    }
    if (typeof fields["jobResponsibilities"] !== "undefined") {
      if (!fields["jobResponsibilities"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["jobResponsibilities"] = "*Enter alphabet characters only";
      }
    }

    // if (!fields["salary"]) {
    //   formIsValid = false;
    //   errors["salary"] = "*Enter the salary range";
    // }
    // if (typeof fields["salary"] !== "undefined") {
    //   if (!fields["salary"].match(/^[a-zA-Z ]*$/)) {
    //     formIsValid = false;
    //     errors["salary"] = "*Enter range only";
    //   }
    // }

    this.setState({
      errors: errors
    });

    return true;
  };

  render() {
    return (
      <div>
        <Fragment>
          <section className="jobListView">
            <div className="container">
              <div className="row">
                <div className="col-md-10 mx-auto">
                <Toast caption="Data Uploaded Successfully!"/>
                  { (this.state.loading === true) ? <Spinner />: 
                  <form id="addJob" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="JobTitle">Job Title</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={this.updateFormJob}
                        value={this.state.fields.JobTitle}
                        name="JobTitle"
                        placeholder="Software Engineer"
                      />
                      <div className="errorMsg">
                        {this.state.errors.JobTitle}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="companyInfo">Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={this.updateFormJob}
                        value={this.state.fields.companyInformation} 
                        name="companyInformation"
                        placeholder="Venture Garden Group"
                      />
                      <div className="errorMsg">
                        {this.state.errors.companyInformation}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="JobType">Job Nature</label>
                      <select
                        className="form-control"
                        value={this.state.fields.JobType}
                        onChange={this.updateFormJob}
                        name="JobType"
                      >
                        <option>Choose a Job type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Internship</option>
                        <option>Remote</option>
                      </select>
                    </div>

                    <div className="floating-placeholder form-group">
                      <label htmlFor="salary">Salary</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.fields.salary}
                        onChange={this.updateFormJob}
                        name="salary"
                        placeholder="500k-600k"
                      />
                      <div className="errorMsg">
                        {this.state.errors.salary}
                      </div>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="Publish">Published on</label>
                        <input
                          type="date"
                          className="form-control"
                          id="published"
                          name="publishedOn"
                          placeholder="Sept. 22, 2019"
                        />
                      </div> */}

                    <div className="form-group">
                      <label htmlFor="JobDescription">Job Description</label>
                      <textarea
                        className="form-control"
                        // id="jobDesc"
                        type="text"
                        onChange={this.updateFormJob}
                        value={this.state.fields.JobDescription}
                        name="JobDescription"
                        rows="3"
                      ></textarea>
                      <div className="errorMsg">
                        {this.state.errors.JobDescription}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="jobResponsibilities">Responsibilities</label>
                      <textarea
                        className="form-control"
                        onChange={this.updateFormJob}
                        value={this.state.fields.jobResponsibilities}
                        name="jobResponsibilities"
                        rows="3"
                      ></textarea>
                      <div className="errorMsg">
                        {this.state.errors.jobResponsibilities}
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      btnType="btn-primary"
                      id="submitJob"
                      Children={"Add Job"}
                    >
                      Add Job
                    </Button>
                  </form>
                }
              </div>
            </div>
          </div>
        </section>
        </Fragment>
      </div>
    );
  }
}

export default withRouter(JobForm);
