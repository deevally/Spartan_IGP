import React from 'react';
import '../css/JobsTable.css';

class JobsTable extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        jobListing: [
           { id: 1, date: 'mm/dd/yr', company: 'VGG', type: 'remote', location: 19, status: 'active', action: 'delete'}
           
        ]
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.jobListing[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.jobListing.map((jobs, index) => {
        const { id, date, company, type, location, status, action} = jobs 
        return (
           <tr key={id}>
              <td>{id}</td>
              <td>{date}</td>
              <td>{company}</td>
              <td>{type}</td>
              <td>{location}</td>
              <td>{status}</td>
              <td>{action}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h2 id='title'>Current Job Listing</h2>
           <table id='jobListing'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}

 

export default JobsTable;