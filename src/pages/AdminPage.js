import React from 'react'
import Nav from "../components/Nav";
import JobsTable from '../components/JobsTable';

const AdminPage = () => {
    return (
        <div>
            
            <Nav ViewJobs="View_Jobs" AddJobs ="AddJobs"  />
            <p>Admin page</p>
            <JobsTable />
        </div>
    )
}

export default AdminPage;
