import React from 'react'
import Nav from "../components/Nav";
import JobForm from "../components/JobForm";
import "../css/addJob.css";
class AddJobs extends React.Component{

    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render (){
    return (
        <div>
        <Nav ViewJobs="View_Jobs" AddJobs ='AddJobs' />
        
        <JobForm/>
       </div>
    )
    }   
}

export default AddJobs;
