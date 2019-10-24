import React, { Component } from "react";
import Button from "../components/Button";
import Nav from "../components/Nav";
import Header from "../components/Header";
import { BaseUrl } from "../utils/baseUrl.js";
import Axios from "axios";

import JobSidebar from "../components/JobSidebar";

import "../css/jobDetails.css";

class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleJob: {},
      Jobs: [],
      allJob: null,
      err: "",
      loading: false
    };
  }

  getSingleJob() {
    const { JobId } = this.props.match.params;
    let url = `${BaseUrl}/job/${JobId}`;
    Axios.get(url)
      .then(res => {
        const singleJob = res.data;
        console.log(singleJob);
        this.setState({ singleJob });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getSingleJob();
  }

  showJob = data => {
    this.setState({
      Jobs: data.docs,
      allJob: data.total,
      loading: false
    });
  };

  render() {
    const value = this.state.singleJob;
    const { Jobs, allJob, loading, err } = this.state;

    let fulltime = 0,
      partTime = 0,
      remote = 0;

    Jobs.map(Job => {
      switch (Job.JobType) {
        case "Full-time":
          fulltime++;
          break;
        case "Part-time":
          partTime++;
          break;
        case "Remote":
          remote++;
          break;
        default:
          break;
      }
    });
    return (
      <div>
        <Nav Jobs="Jobs" SignUp="Signup" LogIn="Login" />
        <Header
          className="headerBlog"
          headerText="blogHeaderText"
          HeaderText__first="Job Details"
          jobDetailsText="HOME / JOB DETAILs"
          jobDetails="jobDetails"
        />

        
        <div class="container mt-5">
          <div class="row fullPage">
            <div class="col-md-9">
              <div class="data">
                <div class="singleJob d-flex flex-row">
                  <div class="details">
                    <div class="jobTitle d-flex flex-column justify-content-between">
                      <div class="titles">
                        <a href="singleJob.html">
                          <h4>{value.JobTitle}</h4>
                        </a>
                        <h6>Premium Labels Limited</h6>
                      </div>

                      <div className="d-md-flex flex-row my-4  align-items-center">
                        <p class="address mr-5">
                          <i class="fas fa-map-marker-alt"></i> Dhaka
                        </p>
                        <p className="mr-5 job-type">
                          <i class="fas fa-suitcase"></i> &nbsp;
                          {value.JobType}
                        </p>
                        <p class="salary mr-5">
                          <i class="far fa-money-bill-alt"></i> &nbsp;
                          {value.salary}
                        </p>
                        <Button
                          btnType=" btn btn-primary"
                          myBtnClass="apply ml-auto"
                        >
                          Apply
                        </Button>
                      </div>
                    </div>

                    <div class="job-details mt-4">
                      <h3>DESCRIPTION</h3>

                      <p class="description">
                        {value.description}
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit ea officia, obcaecati odio, minus maxime
                        incidunt atque, nihil esse expedita repellat dolores
                        voluptatem! Modi nihil rerum, maiores consectetur
                        perspiciatis debitis. Doloremque id non provident odit
                        impedit vero eveniet nemo quos fugiat libero, et el,
                        blanditiis, earum ab nemo ducimus modi doloremque
                        aliquam nam, per, beatae nihil, dicta velit magni
                        repudiandae eum nostrum ducimus! Assumenda, quas!
                        Architecto recusandae velit sed consequatur voluptates.
                        Eaque impedit voluptas deleniti blanditiis possimus
                        earum adipisci, necessitatibus commodi facilis quidem
                        aliquid numquam suscipit voluptatibus quia.
                      </p>
                      <p class="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit ea officia, obcaecati odio, minus maxime
                        incidunt atque, nihil esse expedita repellat dolores
                        voluptatem! Modi nihil rerum, maiores consectetur
                        perspiciatis deemo ducimus modi doloremque aliquam nam,
                        per, beatae nihil, dicta velit magni repudiandae eum
                        nostrum ducimus! Assumenda, quas! Architecto recusandae
                        velit sed consequatur voluptates. Eaque impedit voluptas
                        deleniti blanditiis possimus earum adipisci,
                        necessitatibus commodi facilis quidem aliquid numquam
                        suscipit voluptatibus quia.
                      </p>
                    </div>
                    <div class="job-details mt-4">
                      <h3>REQUIREMENTS</h3>

                      <p class="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit ea officia, obcaecati odio, minus maxime
                        incidunt atque, nihil esse expedita repellat dolores
                        voluptatem! Modi nihil rerum, maiores consectetur
                        perspiciatis debitis. Doloremque id non provident odit
                        impedit vero eveniet nemo quos fugiat libero, et el,
                        blanditiis, earum ab nemo ducimus modi doloremque
                        aliquam nam, per, beatae nihil, dicta velit magni
                        repudiandae eum nostrum ducimus! Assumenda, quas!
                        Architecto recusandae velit sed consequatur voluptates.
                        Eaque impedit voluptas deleniti blanditiis possimus
                        earum adipisci, necessitatibus commodi facilis quidem
                        aliquid numquam suscipit voluptatibus quia.
                      </p>
                      <p class="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit ea officia, obcaecati odio, minus maxime
                        incidunt atque, nihil esse expedita repellat dolores
                        voluptatem! Modi nihil rerum, maiores consectetur
                        perspiciatis deemo ducimus modi doloremque aliquam nam,
                        per, beatae nihil, dicta velit magni repudiandae eum
                        nostrum ducimus! Assumenda, quas! Architecto recusandae
                        velit sed consequatur voluptates. Eaque impedit voluptas
                        deleniti blanditiis possimus earum adipisci,
                        necessitatibus commodi facilis quidem aliquid numquam
                        suscipit voluptatibus quia.
                      </p>
                    </div>
                    <div class="job-details mt-4">
                      <h3>RESPONSIBILITIES</h3>

                      <p class="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit ea officia, obcaecati odio, minus maxime
                        incidunt atque, nihil esse expedita repellat dolores
                        voluptatem! Modi nihil rerum, maiores consectetur
                        perspiciatis debitis. Doloremque id non provident odit
                        impedit vero eveniet nemo quos fugiat libero, et el,
                        blanditiis, earum ab nemo ducimus modi doloremque
                        aliquam nam, per, beatae nihil, dicta velit magni
                        repudiandae eum nostrum ducimus! Assumenda, quas!
                        Architecto recusandae velit sed consequatur voluptates.
                        Eaque impedit voluptas deleniti blanditiis possimus
                        earum adipisci, necessitatibus commodi facilis quidem
                        aliquid numquam suscipit voluptatibus quia.
                      </p>
                      <p class="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit ea officia, obcaecati odio, minus maxime
                        incidunt atque, nihil esse expedita repellat dolores
                        voluptatem! Modi nihil rerum, maiores consectetur
                        perspiciatis deemo ducimus modi doloremque aliquam nam,
                        per, beatae nihil, dicta velit magni repudiandae eum
                        nostrum ducimus! Assumenda, quas! Architecto recusandae
                        velit sed consequatur voluptates. Eaque impedit voluptas
                        deleniti blanditiis possimus earum adipisci,
                        necessitatibus commodi facilis quidem aliquid numquam
                        suscipit voluptatibus quia.
                      </p>
                    </div>
                    <p class="published-on mr-5 d-inline">
                      Published on: Jul., 11, 2019
                    </p>
                    <p class="application-deadline d-inline">
                      Application Deadline: Dec., 11, 2019
                    </p>
                  </div>
                </div>

                <Button btnType=" btn btn-primary" myBtnClass="apply ml-auto">
                  Apply
                </Button>
              </div>
            </div>
            <div className={loading === true ? "sidebarShow" : "col-md-3 "}>
              <JobSidebar
                FullTime={"Full-Time"}
                FullTimeNumbers={fulltime}
                PartTime={"Part-Time"}
                PartTimeNumbers={partTime}
                Remote={"Remote"}
                RemoteNumbers={remote}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDetails;
