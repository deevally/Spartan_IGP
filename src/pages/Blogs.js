import React, { Component } from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Blogs.css";
import { BaseUrl } from "../utils/baseUrl.js";
import Axios from "axios";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import img1 from "../assets/images2/rizoneOil.jpg"
import img2 from "../assets/images2/graduateTr.jpg"
import img3 from "../assets/images2/oPay.png"
import img4 from "../assets/images2/Alan-Grant.jpg"
import img5 from "../assets/images2/atlanticHall.jpg"

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: [],
            blogs: [],
            err: "",
            loading: false
        };
        console.log('ayoooooooo')
    }



    getBlog() {
        let url = `${BaseUrl}/blogs`;
        Axios.get(url)
            .then(res => {
                const blogs = res.data.docs;

                this.setState({ blogs, loading: false });
            })
            .catch(error => {
                this.setState({ err: error });
            });
    }

    onChangePage(pageOfItems, pager) {
        this.setState({ pageOfItems, pager });
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.getBlog();
    }

    viewmore = BlogId => {
        const { history } = this.props;
        history.push(`/Blogdetails/${BlogId}`);
    };

    render() {
        const { blogs, pageOfItems, err, loading } = this.state;
        const photo = [img1, img2, img3, img4, img5];
        console.log(pageOfItems);

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
                            <h2 className="news-and-articles"><b>NEWS AND ARTICLES</b></h2>
                            <div className="icons-div">
                                <i className="fab fa-facebook-f icon-1 icon"></i>
                                <i className="fab fa-twitter icon-2 icon"></i>
                                <i className="fab fa-whatsapp icon-3 icon"></i>
                                <i className="fab fa-skype icon-4 icon"></i>
                                <i className="fab fa-snapchat-ghost icon-5 icon"></i>
                                <i className="fab fa-google-plus-g icon-6 icon"></i>
                            </div>

                            {loading && <Spinner />}
                            {this.state.pageOfItems.map((blog, i) => (
                                <div className="single-post" key={blog._id}>
                                    <div className="main-title" id="main-title">
                                        <div className="blog-content">
                                            <h2 className="blog-title">
                                                <b>{blog.BlogTitle}</b>
                                            </h2>
                                            <p>
                                                {blog.BlogDescription}
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
                                            <img src={photo[i]} alt="cardphoto" className="indexImage" />
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
