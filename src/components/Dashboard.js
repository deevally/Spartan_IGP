import React from 'react';
import '../css/JobsTable.css';
import {BaseUrl} from '../utils/baseUrl';

class JobsTable extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        jobListing: [],
        jobHeader:{
           no: 'No',
           jobTitle: 'Job Title',
           jobType: 'Job Type',
           salary: 'Salary',
           action: 'Delete'
        },
     }
  }


  componentDidMount() {
     let url =`${BaseUrl}/jobs`
     console.log(url)
     fetch(url)
     .then(response => {
        return response.json();
     })
     .then(data => {
       console.log(data)

        this.setState({jobListing:data.docs})
     })
  }


  handleDelete=(id)=>{
   let url =`${BaseUrl}/job/${id}`
   fetch(url, {method: 'DELETE'})
   .then(() => {
       console.log('removed');
    })
    .catch(err => {
      console.error(err)
  })
  this.DeleteId(id)
  }

   DeleteId =(id)=>{
      const DeleteID = this.state.jobListing.filter(job=>job._id !==id)
      this.setState({
         jobListing:DeleteID
      })
   }

  renderTableHeader() {
     let header = Object.values(this.state.jobHeader)
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     
     let i = 1;
     return this.state.jobListing.map(job => {
        const { _id, JobTitle, JobType, salary} = job 
        return (
           <tr key={_id}>
              <td>{i++}</td>
              <td>{JobTitle}</td>
              <td>{JobType}</td>
              <td>{salary}</td>
              <td><button onClick={()=>this.handleDelete(_id)}>Delete</button></td>             
           </tr>
        )
     })
  }



  render() {
     return (
        <React.Fragment>
        <div className='adminSidebar'>
           <a className='p-4 pt-5 text-white' href='#'>Home</a>
           <a className='p-4 pt-2 text-white' href='/'>Logout</a>
           <a className='p-4 pb-5 text-white' href='/'>Change Password</a>
        </div>
        <div className='tableBorder'>
           <h2 id='title'>Current Job Listing</h2>
           <table id='jobListing' className='mx-auto' >
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
        </React.Fragment>
     )
  }
}

export default JobsTable;
