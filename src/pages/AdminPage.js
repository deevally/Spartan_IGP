import React from 'react'
import Dashboard from '../components/Dashboard';
import Header from "../components/Header"

const AdminPage = () => {
    return (
        <div>
            <Header className="adminHeader" 
                headerText="signHeaderText" 
                HeaderText__first= "Admin" 
            />
            <Dashboard />
        </div>
    )
}

export default AdminPage;
