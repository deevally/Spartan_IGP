import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import "../css/Card.css";
import "../css/Pagination.css";
import { BaseUrl } from "../utils/baseUrl";
import Axios from "axios";
import Spinner from "../components/Spinner";
import JobSidebar from "../components/JobSidebar";
import Pagination from "../components/Pagination";
import { numberWithCommas } from "../components/searchedOptions";
import JobSummartTable from "../components/JobSummaryTable";
import Button from "../components/Button";

class Client extends Component {
  constructor(props) {
    super();
    this.state = {
      Jobs: [],
      allJob: null,
      err: "",
      loading: false,
      pageOfItems: [],
      allJobLength: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    let url = `${BaseUrl}/jobs?limit=5&page=1`;

    Axios(url)
      .then(res => {
        this.showJob(res.data);
      })
      .catch(err => {
        this.setState({ err, loading: false });
      });
  }

  showJob = data => {
    this.setState({
      allJobLength: data.total,
      Jobs: data.docs,
      allJob: data.total,
      loading: false
    });
  };
  onChangePage(pageOfItems, pager) {
    this.setState({ pageOfItems, pager });
  }

  gotoJobDetails = JobId => {
    const { history } = this.props;
    history.push(`/jobdetails/${JobId}`);
  };

  gotoAllJobs = () => {
    const { history } = this.props;
    let SearchForm = {
      title: "",
      location: "",
      type: ""
    };
    history.push({ pathname: "/allJobs", state: SearchForm });
  };
  render() {
    const {
      Jobs,
      allJob,
      loading,
      err,
      allJobLength,
      pageOfItems
    } = this.state;
    
    let fulltime = 0,
      partTime = 0,
      remote = 0,
      Lagos = 0,
      Abuja = 0,
      Imo = 0,
      Delta = 0,
      Edo = 0,
      Ekiti = 0,
      Ogun = 0,
      Ondo = 0,
      Oyo = 0;

    Jobs.forEach(Job => {
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
    Jobs.forEach(Job => {
      switch (Job.location) {
        case "Lagos":
          Lagos++;
          break;
        case "Abuja":
          Abuja++;
          break;
        case "Imo":
          Imo++;
          break;
        case "Delta":
          Delta++;
          break;
        case "Edo":
          Edo++;
          break;
        case "Ekiti":
          Ekiti++;
          break;
        case "Ogun":
          Ogun++;
          break;
        case "Ondo":
          Ondo++;
          break;
        case "Oyo":
          Oyo++;
          break;
        default:
          break;
      }
    });

    return (
      <div>
        <Nav Blog="Blog" LogIn="Login" SignUp="SignUp" />
        <Header
          className="landingPageHeader"
          headerText="headerText"
          searchForm={<Filter {...this.props} />}
          HeaderText__first="Search your dream job"
          noOfJob={allJobLength || ''}
          
          SubHeaderText={Jobs.length > 0 ?(Jobs!== null ? `Job${allJob > 1 ? "s" : ""} Available` : "") :'Check Your Network '}
          headerBorder="clientsheaderBorder"
        />
        {Jobs && (
          <div className ='container'>
            <div className='row '>
              <div className='col text-center pt-5'>
                  <h1 className='font-weight-bolder'>Trending Jobs</h1>
              </div>

            </div>

          </div>
        )}
        {/* {loading && <Spinner />} */}

        {loading ? <Spinner /> : Jobs && (
          <div className="container">
            <div className="row single-post my-5 ">
              <div className={`details col-md-9`}>
                {Jobs.map(Job => (
                  <div
                    key={Job._id}
                    className={
                      !Job.jobResponsibilities &&
                      !Job.JobTitle &&
                      !Job.JobType &&
                      !Job.salary
                        ? "sidebarShow"
                        : ""
                    }
                  >
                    <Card
                      cardHeader={Job.JobTitle}
                      cardHeaderSub={Job.jobResponsibilities}
                      CardSubText1={Job.location}
                      CardSubText={Job.JobType}
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
                    typeTitle="Job By Type"
                    FullTime={"Full-Time"}
                    FullTimeNumbers={fulltime}
                    PartTime={"Part-Time"}
                    PartTimeNumbers={partTime}
                    Remote={"Remote"}
                    RemoteNumbers={remote}
                  />
                  <JobSidebar
                    typeTitle="Job By Location"
                    table={
                      <JobSummartTable
                        {...this.props}
                        LagosNo={Lagos || ""}
                        OndoNo={Ondo || ""}
                        EdoNo={Edo || ""}
                        AbujaNo={Abuja || ""}
                        EkitiNo={Ekiti || ""}
                        OyoNo={Oyo || ""}
                        DeltaNo={Delta || ""}
                        OgunNo={Ogun || ""}
                        ImoNo={Imo || ""}
                      />
                    }
                  />
                </div>
              )}
            </div>
          </div>
        )}
        {!err && Jobs && (
          <div className="container ml-auto pb-5 text-center">
            <Button
              btnType="btn-primary"
              myBtnClass="viewbutton"
              onClick={this.gotoAllJobs}
            >
              View More Job Openings{" "}
              <i className="fas fa-chevron-right py-2"></i>{" "}
              <i className="fas fa-chevron-right"></i>
            </Button>
          </div>
        )}
        {err && (
          <div className="container mx-auto text-center mb-5">
            <h1 className="font-weight-bolder mb-5 ml-5 mx-auto pb-5">
              Check your Connection
            </h1>
          </div>
        )}

        {!err && <Pagination items={Jobs} onChangePage={this.onChangePage.bind(this)} />}

        <Footer />
      </div>
    );
  }
}

export default Client;
