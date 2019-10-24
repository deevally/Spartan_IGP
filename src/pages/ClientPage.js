import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import "../css/Card.css";
import { BaseUrl } from "../utils/baseUrl";
import Axios from "axios";
import Spinner from "../components/Spinner";
import JobSidebar from "../components/JobSidebar";

let Search = <Filter />;

class Client extends Component {
  constructor(props) {
    super();
    this.state = {
      Jobs: [],
      allJob: null,
      err: "",
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    let url = `${BaseUrl}/jobs`;
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
      Jobs: data.docs,
      allJob: data.total,
      loading: false
    });
  };

  gotoJobDetails = JobId => {
    const { history } = this.props;
    history.push(`/jobdetails/${JobId}`);
    console.log(history);
  };

  render() {
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
        <Nav Blog="Blog" LogIn="Login" SignUp="SignUp" />
        <Header
          className="landingPageHeader"
          headerText="headerText"
          searchForm={Search}
          HeaderText__first="Search for your dream job"
          noOfJob={allJob}
          SubHeaderText={
            allJob !== null
              ? `Job${allJob > 1 ? "s" : ""} offers available`
              : ""
          }
          headerBorder="clientsheaderBorder"
        />

        {loading && <Spinner />}

        {Jobs && (
          <div className="container">
            <div className="row single-post my-5 ">
              <div className="details col-md-9">
                {Jobs.map(Job => (
                  <div key={Job._id}>
                    <Card
                      cardHeader={Job.JobTitle}
                      cardHeaderSub={Job.jobResponsibilities}
                      CardSubText={Job.JobType}
                      CardSubText2={Job.salary}
                      onClick={() => this.gotoJobDetails(Job._id)}
                    />
                  </div>
                ))}
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
        )}
        {err && (
          <div className="container mx-auto">
            <h1 className="font-weight-bolder mb-5 ml-5">
              Check your Connection
            </h1>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

export default Client;
