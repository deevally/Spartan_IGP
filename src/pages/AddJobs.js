import React, { Component } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GuardSpinner } from 'react-spinners-kit'

import "../css/App.css";
import "../css/AddJobs.css";

const url = `https://jsonplaceholder.typicode.com/users`;

class AddJobs extends Component {
  state = {
    loading: false,
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

  clearForm=()=>{
    this.setState({
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
    })
  }

  updateFormJob = e => {
    // e.persist();

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  Notify=()=> {
    toast("Job successfully created", {
      position: "bottom-center",
      autoClose: 2000
    });
  }

  handleSubmit = e => {
    this.setState ({ loading: true})
    e.preventDefault();
    const Data = {
      ...this.state
    };
    // console.log(Data)
    axios
      .post(url, Data)
      .then(res => {
        console.log(res);
        console.log(res.data)
        if ((res.status = 201)) {
          this.Notify()
          console.log("Job created successfully");
        }
        let jobId = { id: res.data.id };
        const newJob = Object.assign({}, res.data.job, jobId);

        this.setState ({
          ...Data
        })

        this.clearForm()

    //     // this.setState(prevState => ({
    //     //   Data: [...prevState.Data, newJob]
    //     // }))
      })
     .catch(error => {
      this.setState({loading: false}) 
      console.log(error)});
      
  };

  render() {
    
    return (
      <div>
        <Nav ViewJobs="View_Jobs" AddJobs="AddJobs" />
        {/* <GuardSpinner /> */}
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
          <ToastContainer />
        <Footer />
      </div>
    );
  }
}



export default AddJobs;
