import React, {Component} from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Photo from '../assets/images/img1.jpg'
import Button from '../components/Button.js';
import  { BaseUrl } from "../utils/baseUrl.js";
import Axios from "axios";

import  "../css/Blogdetail.css";


class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      text: '',
      arr:[],
      blogAndComment: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange =(e)=> {
    const {fullName, email, text}= this.state;
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = (e)=> {
    const {fullName, email, text}= this.state;
    alert('Posted: ' + this.state.value);
    e.preventDefault();
    this.setState({fullName:'', email: '', text: ''});
  }
    
    componentDidMount(){
      this.viewBlogs()
    }
    viewBlogs(){

      const{BlogId} = this.props.match.params
      let url = `${BaseUrl}/blog/${BlogId}`;
      Axios.get(url)
      .then(res =>{
        this.setState({ blogAndComment:res.data });
      })
      .catch(error =>{
        console.log(error);
      })
    }

  
  render() {
    const value = this.state.blogAndComment;
const {fullName, email, text}= this.state;
  return (
    <div>
 <Nav Jobs="Jobs" SignUp="SignUp" LogIn="LogIn"/>
<Header className='headerBlog header_first' headerText='blogHeaderText' HeaderText__first='Blog Posts'/>


<div className = "container">
    <div className = "row">
    <div className = " offset-md-1 col-md-10">
      <h3>{value.BlogTitle}</h3>
        <img src ={Photo} alt ='PostImage' className="PostImg"/>
        <p>{value.BlogDescription}</p> 
      <p className="CommentDetails">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem viverra. Cursus risus at ultrices mi tempus. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in.
      amet laudantium harum cupiditate, enim aut optio ex est repellat excepturi magni eius cum sint nobis totam
        deserunt veniam. consectetur adipisicing elit. Quisquam a in mollitia expedita beatae eligendi ullam,
        deleniti iste nisi maiores ut, sed saepe magnam quos quaerat, labore nemo odio. Voluptates
        deleniti iste nisi maiores ut, sed saepe magnam quos quaerat, labore nemo odio. Voluptates.</p><p>Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa natus tenetur
        amet laudantium harum cupiditate, enim aut optio ex est repellat excepturi magni eius cum sint nobis totam
        deserunt veniam. consectetur adipisicing elit. Quisquam a in mollitia expedita beatae eligendi ullam,
        deleniti iste nisi maiores ut, sed saepe magnam quos quaerat, labore nemo odio. Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa natus teneturLorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa natus tenetur
        amet laudantium harum cupiditate, enim aut optio ex est repellat excepturi magni eius cum sint nobis totam
        deserunt veniam. consectetur adipisicing elit. Quisquam a in mollitia expedita beatae eligendi ullam,
        deleniti iste nisi maiores ut, sed saepe magnam quos quaerat, labore nemo odio. Voluptates
        amet laudantium harum cupiditate, enim aut optio ex est repellat excepturi magni eius cum sint nobis totam
        deserunt veniam. consectetur adipisicing elit. Quisquam a in mollitia expedita beatae eligendi ullam,
        deleniti iste nisi maiores ut,</p>
        <p className="Parag">By <strong>Immaculate</strong> on {value.datePosted} at {value.timePosted}</p>

        <div className="Comment-section">
      <p className="H">Comments</p>
          <p className="CommentSection">
      <i className="fas fa-user-circle"></i>
      <p className="UserComent">
      <p className="CommentP"> Quisquam a in mollitia expedita beatae eligendi ullam</p>
      <p>  By A diam maecenas sed enim ut sem viverra.</p>
      <p className="CommentIcons">
      <p>October 21st, 2019</p>
      <i className="fas fa-thumbs-up"></i>
      <i className="fas fa-thumbs-down"></i>
      <i className="fas fa-reply"></i>
      </p></p>
      </p>
  </div>
    <div className = "row">
    <div className = "col-md-12">
    <div  className="Mainform">
      <h3> Leave a reply</h3>
  <form onSubmit={this.handleSubmit}className="CommentForm">
      <label>Name</label>
      <input type="text" name="fullName" placeholder="Your Name" value={fullName} onChange={this.handleChange} />
    <br></br>
    <label>Email</label>
      <input type="email" name="email" placeholder="Email.."  value={email} onChange={this.handleChange} />
    <br></br>
    <label>Comment</label>
    <textarea placeholder="comment" name="text" value={text} onChange={this.handleChange} />
  <br></br>
  <Button type="submit" className="Post" btnType='btn-primary' myBtnClass ='ViewblogBtn'> Post </Button>
  </form>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
);
}
}
<Footer />
  
    </div>
  );
};
}

export default BlogDetails;
