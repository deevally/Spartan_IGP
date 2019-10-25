import React, { Component } from "react";
import Nav from "../components/Nav";
import photo from "../assets/images/undraw_newspaper_k72w.png";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Blogs.css";
import { BaseUrl } from "../utils/baseUrl.js";
import Axios from "axios";
import Spinner from "../components/spinner";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      err: "",
      loading: false
    };
  }

  getBlog() {
    let url = `${BaseUrl}/blogs`;
    Axios.get(url)
      .then(res => {
        const blogs = res.data.docs;
        this.setState({ blogs, loading:false });
      })
      .catch(error => {
        this.setState({ err:error });
      });
  }

  componentDidMount() {
    this.setState({ loading:true });
    this.getBlog();
  }

  viewmore = BlogId => {
    const { history } = this.props;
    history.push(`/Blogdetails/${BlogId}`);
  };

  render() {
      const {blogs,err,loading} =this.state
    return (
      <div>
        <Nav Jobs="Jobs" SignUp="SignUp" LogIn="LogIn" />
        <Header
          className="headerBlog header_first"
          headerText="blogHeaderText"
          HeaderText__first="Blog Posts"
        />
    
        <div className="container">
          <div className="row fullPage">
            <div className=" col-md-12">
              <h2 className="news-and-articles">NEWS AND ARTICLES</h2>
              <div className="icons-div">
                <i className="fab fa-facebook-f icon-1 icon"></i>
                <i className="fab fa-twitter icon-2 icon"></i>
                <i className="fab fa-whatsapp icon-3 icon"></i>
                <i className="fab fa-skype icon-4 icon"></i>
                <i className="fab fa-snapchat-ghost icon-5 icon"></i>
                <i className="fab fa-google-plus-g icon-6 icon"></i>
              </div>

                {loading && <Spinner/>}
              {blogs.map(blog => (
                <div className="single-post">
                  <div className="main-title" id="main-title">
                    <div className="blog-content">
                      <h4 className="blog-title">
                        <b>{blog.BlogTitle}</b>
                      </h4>
                      <p>
                        <b>{blog.BlogDescription}</b> &nbsp; dolor sit amet
                        consectetur adipisicing elit. Ipsa natus teneturLorem
                        ipsum dolor sit amet Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Ipsa natus tenetur amet
                        laudantium harum cupiditate, enim aut optio ex est
                        repellat excepturi magni eius cum sint nobis totam
                        deserunt veniam. consectetur adipisicing elit. Quisquam
                        a in mollitia expedita beatae eligendi ullam, deleniti
                        iste nisi maiores ut, sed saepe magnam quos quaerat,
                        labore nemo odio. Voluptates amet laudantium harum
                        cupiditate, enim a amet laudanti
                      </p>
                      {/* <p>by <span className="lorem">Lorem ipsum</span></p> */}
                      <p>
                        <em>
                          Posted {blog.datePosted} at {blog.timePosted}
                        </em>
                      </p>
                      <Button
                        btnType="btn-primary py-2 px-2"
                        onClick={() => this.viewmore(blog._id)}
                      >
                        View More
                      </Button>
                    </div>
                    <div id="image">
                      <img src={photo} alt="cardphoto" className="indexImage" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {err && (
          <div className="container mx-auto text-center mb-5">
            <h1 className="font-weight-bolder mb-5 ml-5 mx-auto pb-5">
              Check your Connection
            </h1>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
export default Blog;
