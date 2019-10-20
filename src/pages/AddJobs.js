import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import "../css/App.css"
import "../css/AddJobs.css"

const url = ``;

const AddJobs = (props) => {
  const [ formJob, setFormJob ] = useState({
    job_title:'',
    company_name:'',
    job_type: [],
    location: [], 
    salary: [],
    published: [],
    deadline: '',
    jobDesc: '',
    responsibility: '',
    job_req: ''
  })

  const updateFormJob = (e)=> {
    setFormJob ({
      ...formJob, [e.target.name]: e.target.value
    })
  }

  const {
  job_title, 
  company_name,
  job_type,
  location, 
  salary,
  published,
  deadline,
  jobDesc,
  responsibility,
  job_req
  } = formJob


  // axios.post(url)
  // .then(res => {
  //   if ((res.status = 200)) {
  //     console.log("Job created successful");
  //   }
  //   let jobId = { id: res.data.id };
  //   const newJob = Object.assign({}, res.data.Data, jobId);
  // });

  return (
    <div>
      <Nav ViewJobs="View_Jobs" AddJobs="AddJobs" />
      <form>
        <input 
          type="text" 
          onChange = {e => updateFormJob(e)}
          value={job_title}
          name="job_title"
          placeholder="Software Developer"
          required />
        <input 
          type="text" 
          onChange = {e => updateFormJob(e)}
          value={company_name}
          name="company_name"
          placeholder="Greenhouse Capital"
          required />
        <select  
          onChange = {e => updateFormJob(e)}
          value={job_type}
          name="job_type"
          required>
            <option>select Here</option>
          </select>
        <select 
          onChange = {e => updateFormJob(e)}
          value={location}
          name="location"
          required />
        <select 
          onChange = {e => updateFormJob(e)}
          value={salary}
          name="salary"
          required />
        <input 
          type="date" 
          onChange = {e => updateFormJob(e)}
          value={published}
          name="published"
          required />
        <input 
          type="date" 
          onChange = {e => updateFormJob(e)}
          value={deadline}
          name="deadline"
          required />
        <textarea 
          type="text" 
          onChange = {e => updateFormJob(e)}
          value={jobDesc}
          name="jobDesc"
          placeholder="Job Description"
          required />
        <textarea 
          type="text" 
          onChange = {e => updateFormJob(e)}
          value={responsibility}
          name="responsibility"
          placeholder="Job Responsibilties"
          required />
        <textarea 
          type="text" 
          onChange = {e => updateFormJob(e)}
          value={job_req}
          name="job_req"
          placeholder="Job Requirements"
          required />
         <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default AddJobs;
