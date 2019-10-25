import React, { Component } from "react";
import Nav from "../components/Nav";
import photo from "../assets/images/undraw_newspaper_k72w.png";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Blogs.css";
import { BaseUrl } from "../utils/baseUrl.js";
import Axios from "axios";
import Pagination from "../components/Pagination";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageOfItems: [],
      blogs: []
    };
  }

  getBlog() {
    let url = `${BaseUrl}/blogs`;
    Axios.get(url)
      .then(res => {
        const blogs = res.data.docs;
        console.log(blogs);
        this.setState({ blogs });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChangePage(pageOfItems, pager) {
    this.setState({ pageOfItems, pager });
  }

  componentDidMount() {
    this.getBlog();
  }

  viewmore = BlogId => {
    const { history } = this.props;
    history.push(`/Blog/${BlogId}`);
  };

  render() {
    const { blogs, pageOfItems } = this.state;
    console.log(pageOfItems);
    return (
      <div>
        <Nav Jobs="Jobs" SignUp="SignUp" LogIn="LogIn" />
        <Header
          className="headerBlog header_first"
          headerText="blogHeaderText"
          HeaderText__first="Blog Posts"
        />
        {/* <p>Blog</p> */}
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

              {this.state.pageOfItems.map(blog => (
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
                        btnType="btn-primary"
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
              <Pagination
                items={blogs}
                onChangePage={this.onChangePage.bind(this)}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Blog;
