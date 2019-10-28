import React, { Component } from "react";
import axios from "axios";
import Button from "../components/Button";
import { withRouter } from "react-router-dom";
import Spinner from "./Spinner";
import Toast from "../components/Toast";
import "../css/App.css";
import "../css/CreateBlog.css";

const url = `https://vgg-career-portal.herokuapp.com/api/createblog`;

class BlogForm extends Component {
  state = {
    fields: {},
    errors: {},
    loading: false,
    callerror: {}
  };

  updateFormJob = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  showToast = () => {
    let x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 5000);
  };

  clearFields = () => {
    this.setState({
      fields: {
        BlogTitle: "",
        BlogDescription: ""
      },
      canCreate: false
    });
  };
  handleSubmit = e => {
    this.setState({ loading: true });
    e.preventDefault({ toast: true });

    let { fields } = this.state;
    if (this.validateForm()) {
      axios
        .post(url, fields)
        .then(res => {
          // console.log(res);
          if ((res.status = 201)) {
            this.setState({
              loading: false,
              fields: fields
            });
            this.showToast();
            this.clearFields();

            setTimeout(() => {
              this.props.history.push("/Blog");
            }, 3000);
          }
        })
        .catch(err => {
          this.setState({
            loading: false,
            toast: false,
            callerror: err,
            canCreate: true
          });
        });
    } else {
      this.setState({
        loading: false
      });
      // console.log("fields-two", fields);
    }
  };

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["BlogTitle"]) {
      formIsValid = false;
      errors["BlogTitle"] = "*Enter a blog title";
    }
    if (!fields["BlogDescription"]) {
      formIsValid = false;
      errors["BlogDescription"] = "*Enter the blog description";
    }
    if (typeof fields["BlogDescription"] !== "undefined") {
      if (!fields["BlogDescription"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["BlogDescription"] = "*Enter alphabet characters only";
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  };
  render() {
    const { callerror, canCreate } = this.state;
    console.log(callerror);

    return (
      <div>
        <section className="blogListView">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <Toast caption="Job Successfully Created!" />
                {this.state.loading === true ? (
                  <Spinner />
                ) : (
                  <form id="createBlog" onSubmit={this.handleSubmit}>
                    {canCreate === true && callerror && (
                      <p className="text-danger text-center font-weight-bolder">
                        {"Check Connection"}
                      </p>
                    )}
                    <div className="form-group">
                      <label htmlFor="blog-title">Blog Title</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={this.updateFormJob}
                        value={this.state.fields.BlogTitle}
                        
                        name="BlogTitle"
                        placeholder="Blog Title"
                      />
                      <div className="errorMsg">
                        {this.state.errors.BlogTitle}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="blog-description">Blog Description</label>
                      <textarea
                        className="form-control"
                        value={this.state.fields.BlogDescription}
                        onChange={this.updateFormJob}
                        
                        name="BlogDescription"
                        rows="3"
                      ></textarea>
                      <div className="errorMsg">
                        {this.state.errors.BlogDescription}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      
                    >
                      Add Blog
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default withRouter(BlogForm);
