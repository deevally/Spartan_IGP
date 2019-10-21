
import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClientPage from './ClientPage'
import SignUp from './SignUp'
import AdminPage from './AdminPage'
import AddJobs from './AddJobs'
import Blog from './Blogs'
import Post from './Post'
import jobdetails from './JobDetails'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact  path = '/' component = {ClientPage}/>
      <Route path = '/Sign_Up' component = {SignUp}/>
      <Route path = '/Admin' component = {AdminPage}/>
      <Route path = '/View_Jobs' component = {AdminPage}/>
      <Route path = '/Add_Jobs' component = {AddJobs}/>
      <Route path = '/Blog' component = {Blog}/>
      <Route path = '/Blog:PostId' component = {Post}/>
      <Route path = '/:jobdetails' component = {jobdetails}/>
      </Switch>
    </Router>
  );
}

export default App;
