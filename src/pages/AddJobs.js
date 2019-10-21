import React from 'react'
import Nav from "../components/Nav";
import Header from "../components/Header"

const AddJobs = () => {
    return (
        <div>
           <Nav ViewJobs="All Jobs" AddJobs ='AddJobs' />
           <Header className="adminHeader" headerText="adminHeaderText" HeaderText__first= "Admin"   />

            <p>Add Jobs</p>
        </div>
    )
}

export default AddJobs
