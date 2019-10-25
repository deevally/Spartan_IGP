import React from 'react'
import Dashboard from '../components/Dashboard';
import Nav from '../components/Nav';
import Header from "../components/Header"

const AdminPage = () => {
    return (
        <div>
            <Nav />
             {/* <Header className="adminHeader"   */}
                 {/* headerText="signHeaderText"   */}
                 {/* HeaderText__first= "Admin"   */}
            />
            <Dashboard />
        </div>
    )
}

export default AdminPage;
