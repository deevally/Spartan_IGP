import React, { Component, Fragment } from "react";
import axios from "axios";
// import Nav from "../components/Nav";`
import Button from "../components/Button";
// import BaseUrl from '../utils/baseUrl';
import { withRouter } from "react-router-dom";
import Spinner from "./Spinner";
import Toast from "./Toast";
import "../css/App.css";
import "../css/addJob.css";
const url = `https://vgg-career-portal.herokuapp.com/api/createjob`;
// const url = `https://jsonplaceholder.typicode.com/posts`;
class JobForm extends Component {
  state = {
    fields: {},
    errors: {},
    loading: false,
    canSubmit: true,
    callerror: {}
  };

  updateFormJob = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    console.log(this.state.fields);
  };

  showToast = () => {
    let x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 5000);
  };

  clearFields = () => {
    this.setState({
      fields: {
        JobDescription: "",
        JobTitle: "",
        location: "",
        salary: "",
        jobResponsibilities: "",
        companyInformation: ""
      },
      canCreate: false
    });
  };


  clearFields =() =>{

    this.setState({
      fields:{
        JobDescription :'',
        JobTitle :'',
        salary :'',
        jobResponsibilities:'',
        companyInformation:''
        
      },
      canCreate:false,
    })
  }

  handleSubmit = e => {
    this.setState({ loading: true });
    e.preventDefault({ toast: true });

    let { fields } = this.state;
    if (this.validateForm()) {
      axios
        .post(url, fields)
        .then(res => {
          // console.log(res);
          if ((res.status = 201)) {
            this.setState({
              loading: false,
              fields: fields
            });
            this.showToast();
            this.clearFields();

            setTimeout(() => {
              this.props.history.push(this.props.callbackurl);
            }, 3000);
          }
        })
        .catch(err => {
          this.setState({
            loading: false,
            toast: false,
            callerror: err,
            canCreate: true
          });
        });
    } else {
      this.setState({
        loading: false
      });
      // console.log("fields-two", fields);
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

    this.setState({
      errors: errors
    });
    return formIsValid;
  };

  render() {
    const { callerror, canCreate } = this.state;
    console.log(callerror);

    return (
      <div>
        <Fragment>
          <section className="jobListView">
          
            <div className="container">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <Toast caption="Job Successfully Created!" />
                  {this.state.loading === true ? (
                    <Spinner />
                  ) : (
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
                        <label htmlFor="location">Location</label>
                        <select
                          className="form-control"
                          value={this.state.fields.location}
                          onChange={this.updateFormJob}
                          name="location"
                        >
                          <option>Choose a location</option>
                          <option>Lagos</option>
                          <option>Abuja</option>
                          <option>Imo</option>
                          <option>Delta</option>
                          <option>Edo</option>
                          <option>Ekiti</option>
                          <option>Ogun</option>
                          <option>Ondo</option>
                          <option>Oyo</option>
                        </select>
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
                          placeholder="600,000"
                        />
                        <div className="errorMsg">
                          {this.state.errors.salary}
                        </div>
                      </div>
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
                          placeholder="Write the job description..."
                        ></textarea>
                        <div className="errorMsg">
                          {this.state.errors.JobDescription}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="jobResponsibilities">
                          Responsibilities
                        </label>
                        <textarea
                          className="form-control"
                          onChange={this.updateFormJob}
                          value={this.state.fields.jobResponsibilities}
                          name="jobResponsibilities"
                          rows="3"
                          placeholder=""
                        ></textarea>
                        <div className="errorMsg">
                          {this.state.errors.jobResponsibilities}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        btnType="btn btn-primary"
                        id="submitJob"
                        Children={"Add Job"}
                      >
                        Add Job
                      </Button>
                      {canCreate === true && callerror && (
                        <p className="text-danger text-center font-weight-bolder">
                          {"Check Connect"}
                        </p>
                      )}
                    </form>
                  )}
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
