import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";

const Blog = () => {
  return (
    <div>
      <Nav Jobs="Jobs" SignUp="SignUp" LogIn="LogIn" />
      <Header
        className="headerBlog"
        headerText="blogHeaderText"
        HeaderText__first="Blog Posts"
      />
      <p>Blog</p>
    </div>
  );
};

export default Blog;
