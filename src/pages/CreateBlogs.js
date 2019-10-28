import React from "react";
import Nav from "../components/Nav";
import BlogForm from "../components/BlogForm";
import "../css/App.css";



const CreateBlog = () => {
    return (
      <div>
        <Nav Blog="Blog" />
        <BlogForm />
      </div>
    );
  };
  export default CreateBlog;
