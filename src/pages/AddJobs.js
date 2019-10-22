import React, { Component } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import JobForm from "../components/JobForm";
import "../css/addJob.css";
import Footer from "../components/Footer";
import "../css/App.css";

const url = `https://jsonplaceholder.typicode.com/users`;

class AddJobs extends Component {
  state = {
    id: "",
    job_title: "",
    company_name: "",
    job_type: [],
    location: [],
    salary: [],
    published: [],
    deadline: "",
    jobDesc: "",
    responsibility: "",
    job_req: ""
  };

  updateFormJob = e => {
    // e.persist();

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const Data = {
      ...this.state
    };

    axios
      .post(url, Data)
      .then(res => {
        console.log(res);
        console.log(res.data)
        if ((res.status = 201)) {
          console.log("Job created successfully");
        }
        let jobId = { id: res.data.id };
        const newJob = Object.assign({}, res.data.job, jobId);

        this.setState ({
          ...Data
        })

      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <Nav ViewJobs="View_Jobs" AddJobs="AddJobs" />

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.updateFormJob}
            value={this.state.job_title}
            name="job_title"
            placeholder="Software Developer"
            required
          />
          <input
            type="text"
            onChange={this.updateFormJob}
            value={this.state.company_name}
            name="company_name"
            placeholder="Greenhouse Capital"
            required
          />
          {/* <select
            onChange={this.updateFormJob}
            value={this.state.job_type}
            name="job_type"
            required
          >
            <option>select Here</option>
          </select>
          <select
            onChange={this.updateFormJob}
            value={this.state.location}
            name="location"
            required
          />
          <select
            onChange={this.updateFormJob}
            value={this.state.salary}
            name="salary"
            required
          /> */}
          <input
            type="date"
            onChange={this.updateFormJob}
            value={this.state.published}
            name="published"
            required
          />
          <input
            type="date"
            onChange={this.updateFormJob}
            value={this.state.deadline}
            name="deadline"
            required
          />
          <textarea
            type="text"
            onChange={this.updateFormJob}
            value={this.state.jobDesc}
            name="jobDesc"
            placeholder="Job Description"
            required
          />
          <textarea
            type="text"
            onChange={this.updateFormJob}
            value={this.state.responsibility}
            name="responsibility"
            placeholder="Job Responsibilties"
            required
          />
          <textarea
            type="text"
            onChange={this.updateFormJob}
            value={this.state.job_req}
            name="job_req"
            placeholder="Job Requirements"
            required
          />
          <button type="submit">Submit</button>
        </form>

        <Footer />
      </div>
    );
  }
}



   
