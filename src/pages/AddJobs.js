import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import JobForm from "../components/JobForm";


const AddJobs = () => {
  return (
    <div>
      <Nav ViewJobs="All Jobs" AddJobs="AddJobs" />
       <Header/>
      <JobForm />
    </div>
  );
};
export default AddJobs;
