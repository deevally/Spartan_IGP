import React, { Fragment } from "react";
import axios from "axios";
import Button from "./Button";
const url = `https://jsonplaceholder.typicode.com/users`;
class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      job_title: "",
      company_name: "",
      job_nature: [],
      location: [],
      salary: [],
      published: [],
      deadline: "",
      jobDesc: "",
      responsibility: "",
      job_req: ""
    };
  }

  updateFormJob = e => {
    e.persist();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  validationLogic = (items)=>{
    Object.keys(items).forEach((item)=>{
        if(items[item].length === 0){
        document.getElementById(item).style.border="1px solid #a83432";
    }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let Data = {
      ...this.state
    };
    let items = {
        job_title:Data.job_title,
        company_name:Data.company_name,
        job_nature:Data.job_nature,
        location:Data.location,
        salary:Data.salary,
        published:Data.published,
        deadline:Data.deadline,
        jobDesc:Data.jobDesc,
        responsibility:Data.responsibility,
        job_req: Data.job_req
    }
    if(items){
        this.validationLogic(items);
    }
}
    // axios
    //   .post(url, Data)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     if ((res.status = 200)) {
    //       console.log("Job created successfully");
    //     }
    //     let jobId = { id: res.data.id };
    //     const newJob = Object.assign({}, res.data.job, jobId);
    //     this.setState({
    //       ...Data
    //     });
    //     // this.setState(prevState => ({
    //     //   Data: [...prevState.Data, newJob]
    //     // }))
    //   })
    //   .catch(error => console.log(error));
  

  render() {
    return (
      <Fragment>
        <section class="jobListView">
          <div class="container">
            <div class="row">
              <div class="col-md-10 mx-auto">
                <form id="addJob" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label for="job-title">Job Title</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.updateFormJob}
                      value={this.state.job_title}
                      id="job_title"
                      
                      name="jobTitle"
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div class="form-group">
                    <label for="job-title">Company Name</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={this.updateFormJob}
                      id="company_name"
                      name="company_name"
                      placeholder="Venture Garden Group"
                    />
                  </div>
                  <div class="form-group">
                    <label for="job-nature">Job Nature</label>
                    <select
                      class="form-control"
                      
                      id="job_nature"
                      name="jobNature"
                    >
                      <option selected disabled>
                        Choose a Job type
                      </option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Intern</option>
                      <option>Remote</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="location">Location</label>
                    <select
                      class="form-control"
                      
                      name="location"
                      id="location"
                    >
                      <option selected disabled>
                        Choose a Location
                      </option>
                      <option>Lagos</option>
                      <option>Abuja </option>
                      <option>PortHarcourt</option>
                      <option>Ibadan</option>
                      <option>Ilorin</option>
                      <option>Crossriver</option>
                      <option>Ondo</option>
                      <option>Kano</option>
                      <option>Jos</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="category">Category</label>
                    <select
                      class="form-control"
                      
                      name="category"
                      id="category"
                    >
                      <option selected disabled>
                        Choose a Category
                      </option>
                      <option>Technology</option>
                      <option>Media & News</option>
                      <option>Medical</option>
                      <option>Business</option>
                      <option>Management</option>
                      <option>Legal</option>
                      <option>Finance</option>
                    </select>
                  </div>
                  <div class="floating-placeholder form-group">
                    <label for="job-title">Salary</label>
                    <input
                      type="text"
                      class="form-control"
                      
                      id="salary"
                      name="salary"
                      placeholder="500k-600k"
                    />
                  </div>
                  <div class="form-group">
                    <label for="job-title">Published on</label>
                    <input
                      type="date"
                      class="form-control"
                      
                      id="published"
                      name="publishedOn"
                      placeholder="Sept. 22, 2019"
                    />
                  </div>
                  <div class="form-group">
                    <label for="job-title">Application Deadline</label>
                    <input
                      type="date"
                      class="form-control"
                      
                      id="deadline"
                      name="applicationDeadline"
                      placeholder="Sept. 22, 2019"
                    />
                  </div>
                  <div class="form-group">
                    <label for="job-summary">Job Summary</label>
                    <textarea
                      class="form-control"
                      id="jobSummary"
                      
                      name="jobSummary"
                      rows="3"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="job-description">Job Description</label>
                    <textarea
                      class="form-control"
                      
                      id="jobDesc"
                      name="jobDescription"
                      rows="3"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="responsibilities">Responsibilities</label>
                    <textarea
                      class="form-control"
                      id="responsibility"
                      name="responsibilities"
                      rows="3"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="job-description">Requirements</label>
                    <textarea
                      class="form-control"
                      
                      id="job_req"
                      name="requirements"
                      rows="3"
                    ></textarea>
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
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default JobForm;
