import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import JobForm from "../components/JobForm";
import Footer from '../components/Footer'


const AddJobs = () => {
  return (
    <div>
      <Nav ViewJobs="All Jobs" AddJobs="AddJobs" />
       <Header/>
      <JobForm  callbackurl ="/jobs/all"/>
      <Footer />
    </div>
  );
};
export default AddJobs;
