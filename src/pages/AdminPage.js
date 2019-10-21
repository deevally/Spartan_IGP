import React from 'react'
import Nav from "../components/Nav";
import JobsTable from '../components/JobsTable';
import Header from "../components/Header"

const AdminPage = () => {
    return (
        <div>
            <Nav ViewJobs="All Jobs" AddJobs ="Add Jobs"  />
            <Header className="adminHeader" headerText="signHeaderText" HeaderText__first= "Admin" SubHeaderText="Job offers available"   />

            <JobsTable />
        </div>
    )
}

export default AdminPage;
