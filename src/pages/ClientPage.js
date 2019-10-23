import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

import {BaseUrl}  from "../utils/baseUrl";
import Axios from "axios";

let Search = <Filter />;

class Client extends Component {
  constructor(props) {
    super();
    this.state = {
      Jobs: [],
      allJob: null
    };
  }

  componentDidMount() {
    let url = `${BaseUrl}/jobs`;
    Axios(url)
      .then(res => {
        this.showJob(res.data);
      })
      .catch(err => console.log(err));
  }

  showJob = data => {
    this.setState({
      Jobs: data.docs,
      allJob: data.total
    });
  };

  render() {
    const { Jobs, allJob } = this.state;
    console.log(Jobs);
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
<Card/>
        <Footer />
      </div>
    );
  }
}

export default Client;
