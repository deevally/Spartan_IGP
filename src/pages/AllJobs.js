import React, { Component } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../css/Card.css";
import { BaseUrl } from "../utils/baseUrl";
import Axios from "axios";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import JobSidebar from "../components/JobSidebar";
import { Options, Options2,numberWithCommas } from "../components/searchedOptions";

class AllJob extends Component {
  constructor(props) {
    super();
    this.state = {
      Jobs: [],
      allJob: null,
      err: "",
      loading: false,
      searchJob: [],
      SearchForm: {
        location: "",
        type: "",
        title: "",
      },
    };
  }

  getAllJob = data => {
    this.setState({ loading: true });
    let { location, title, type } = data;
    if (location === "" && title === "" && type === "") {
      let url = `${BaseUrl}/jobs?limit=${50}&page=${1}`;
      Axios(url)
        .then(res => {
          this.showJob(res.data);
        })
        .catch(err => {
          if (err.response === undefined) {
            this.setState({
              err: "Check Your Network Connection",
              loading: false
            });
            return;
          }
        });
    }

    if (location || title || type) {
      let SearchObj = {
        JobTitle: data.title,
        JobType: data.type,
        location: data.location
      };
      let url = `${BaseUrl}/searchjob`;

      Axios.post(url, SearchObj)
        .then(res => {
          this.showJob(res.data);
        })
        .catch(err => {
          
          if (err.response === undefined) {
            this.setState({
              err: "Check Your Network Connection",
              loading: false
            });
            return;
          } else {
            if (err.response.status === 404) {
              this.setState({ err: err.response.data, loading: false });
            }
          }
          console.log(err.response);
        });
    }
  };

  componentDidMount() {
    let data = this.props.location.state;
    this.getAllJob(data);

    // this.setState({loading: false });
  }

  handleSubmit = (e) => {
e.preventDefault()
    this.setState({ loading: true });
    const { SearchForm:{location, title, type} } = this.state;
    if (location === "" && title === "" && type === "") {
      let url = `${BaseUrl}/jobs`;
      Axios(url)
        .then(res => {
          this.showJob(res.data);
        })
        .catch(err => {
          if (err.response === undefined) {
            this.setState({
              err: "Check Your Network Connection",
              loading: false
            });
            return;
          }
        });
    }

    if (location || title || type) {
      let SearchObj = {
        JobTitle: title,
        JobType: type,
        location: location
      };
      let url = `${BaseUrl}/searchjob`;

      Axios.post(url, SearchObj)
        .then(res => {
          console.log(res.data);
          this.showJob(res.data);
        })
        .catch(err => {
          
          if (err.response === undefined) {
            this.setState({
              err: "Check Your Network Connection",
              loading: false
            });
            return;
          } else {
            if (err.response.status === 404) {
              this.setState({ err: err.response.data, loading: false });
            }
          }
          console.log(err.response);
        });
    }
  };

 

  showJob = data => {
    this.setState({
      Jobs: data.total ? data.docs : data,
      allJob: data.total,
      loading: false
    });
  };

  gotoJobDetails = JobId => {
    const { history } = this.props;
    history.push(`/jobdetails/${JobId}`);
  };


  
  handleChange = e => {
    const SearchForm = this.state.SearchForm;
    SearchForm[e.target.name] = e.target.value;
    this.setState({ SearchForm });
  };
  render() {
    const { location, type,title } = this.state.SearchForm;

    const { Jobs, loading, err, searchJob } = this.state;
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
        <Nav Blog="Blog" LogIn="Login" SignUp="SignUp" />
        <div className="container-fluid mt-5 pt-5 allJobFormstyle">
        <form className="form-row filterRow p-5 align-items-center allJobformtext">
          <div className=" col-md-1 col-sm-6 font-weight-bolder">
            FIND A JOB
          </div>
          <div className=" col-md-3 col-sm-6 ">
          {/* <AllFilter  titleInput ={title} typeInput ={type}/> */}

          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            className="form-control my-3 searchInput"
            placeholder="Job title, keywords..."
          />
        </div>
          <div className=" col-md-3 col-sm-6">
            <select
              className="form-control searchInput my-3"
              onChange={this.handleChange}
              name="location"
              value={location}
            >
              
              {Options.map((option, i) => (
                <option key={i}>{option}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 col-sm-6">
            <select
              className="form-control form-control-lg my-3 searchInput"
              name="type"
              value={type}
              onChange={this.handleChange}
            >
              
              {Options2.map((option, i) => (
                <option key={i}>{option}</option>
              ))}
            </select>
          </div>
          <Button
            type="submit"
            onClick={this.handleSubmit}
            btnType="btn-primary form-control my-3"
            myBtnClass="myBtnClass"
          >
            Search Job
          </Button>
        </form>
        </div>

        {loading && <Spinner />}
        {err && (
          <div className="container mx-auto text-center mb-5">
            <h1 className="font-weight-bolder mb-5 ml-5 mx-auto pb-5">{err}</h1>
          </div>
        )}
        {Jobs && (
          <div className="container">
            <div className="row single-post my-5 ">
              <div className="details col-md-8 alljobCards mr-3">
                {Jobs.map(Job => (
                  <div key={Job._id}>
                    <Card
                      cardHeader={Job.JobTitle}
                      cardHeaderSub={Job.jobResponsibilities}
                      CardSubText={Job.JobType}
                      CardSubText1 ={Job.location}
                      CardSubText2={numberWithCommas(Job.salary || 3000)}
                      displayNaira={Job.salary ? "" : "displayNaira"}
                      onClick={() => this.gotoJobDetails(Job._id)}
                    />
                  </div>
                ))}
              </div>
              {!err && (
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
              )}
            </div>
          </div>
        )}
        {!err && searchJob == null && (
          <div className="container mx-auto text-center mb-5">
            <h1 className="font-weight-bolder mb-5 ml-5 mx-auto pb-5">
              No Job for this search
            </h1>
          </div>
        )}
       

        <Footer />
      </div>
    );
  }
}

export default AllJob;
