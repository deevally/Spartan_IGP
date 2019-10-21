// import React, { Component } from "react";
// import Button from "./Button";
// import Axios from "axios";
// className Filter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       SearchForm: { title: "", location: "", type: "" },
//     SearchData:[],
//     err:null
//     }
//   }

//   handleSubmit = () => {
//       const{title, location, type} =this.state.SearchForm;
//     Axios('http://'
//     .then((result) => {
//         this.setState({SearchData:result})
//     }).catch((err) => {
//         this.setState({err:err})
//     }))
//   };

//   handleChange = e => {
//     const SearchForm = this.state.SearchForm;
//     SearchForm[e.target.name] = e.target.value;
//     this.setState({ SearchForm });
//   };
//   render() {
//     return (
//         <div className="container">
//         <div className="search">
//           <form method="post" className="search-jobs-form mb-4" id="search">
//             <div className="row">
//               <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
//                 <input type="text" id="keywordSearch" className="form-control form-control-lg"
//                   placeholder="Job title, keywords..."/>
//               </div>
//               <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
//                 <select className="form-control form-control-lg" id="searchLocation">
//                   <option>Anywhere</option>
//                   <option>Lagos</option>
//                   <option>Abuja </option>
//                   <option>PortHarcourt</option>
//                   <option>Ibadan</option>
//                   <option>Ilorin</option>
//                   <option>Crossriver</option>
//                   <option>Ondo</option>
//                   <option>Kano</option>
//                   <option>Jos</option>
//                 </select>
//               </div>
//               <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
//                 <select className="form-control form-control-lg" id="jobNature">
//                   <option>Choose</option>
//                   <option>Full Time</option>
//                   <option>Part Time</option>
//                   <option>Intern</option>
//                   <option>Remote</option>
//                 </select>
//               </div>
//               <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
//                 <button type="submit" className="btn btn-primary btn-lg btn-block text-white btn-search">Search
//                   Job</button>
//               </div>
//             </div>
//           </form>
//         </div>
        
//       </div>
//     );
//   }
// }

// export default Filter;




//             {/* <Button onClick={this.handleSubmit}>SEARCH</Button> */}