import React, { Component } from "react";
import Button from "./Button";
import '../css/Filter.css';
import Axios from "axios";
import {Options, Options2} from './searchedOptions'
class Filter extends Component {
  constructor() {
    super();
    this.state = {
      SearchForm: { 
        title: "", 
        location:'' ,
         type: ''
         
        },
    SearchData:[],
    err:null
    }
  }

  handleSubmit = () => {
      const{title, location, type} =this.state.SearchForm;
      console.log(title,location,type)
    Axios.post('http://')
    .then((result) => {
        this.setState({SearchData:result})
    }).catch((err) => {
        this.setState({err:err})
    })
  };

  handleChange = e => {
    const SearchForm = this.state.SearchForm;
    SearchForm[e.target.name] = e.target.value;
    this.setState({ SearchForm });
  };
  render() {
    const {location,title,type} = this.state.SearchForm
    return (
          <form className="form-row filterRow p-5">
              <div className=" col-md-3 col-sm-6 ">
                <input type="text" name ='title' value={title} onChange={this.handleChange}  className="form-control my-3 searchInput"
                  placeholder="Job title, keywords..."/>
              </div>
              <div className=" col-md-3 col-sm-6">
                <select className="form-control searchInput my-3" onChange={this.handleChange} name='location'  value={location}>
                <option value='' disabled searchInput>Select location</option>
{Options.map((option,i)=>(
                    
                    <option key={i}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-3 col-sm-6 ">
                <select className="form-control form-control-lg my-3 searchInput" name='type'  value={type} onChange={this.handleChange}>
                <option value='' disabled searchInput>Select Job type</option>
{Options2.map((option,i)=>(
                    
                    <option key={i}>{option}</option>
                  ))}
                </select>
              </div>
                <Button type="submit" onClick={this.handleSubmit} btnType='btn-primary form-control my-3' myBtnClass='myBtnClass' disabled ={location===''&&type===''&&title===''?true:false}>Search
                  Job</Button>
          </form>
      
         
        
    );
  }
}

export default Filter;




