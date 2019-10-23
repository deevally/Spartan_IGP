import React from "react";
import FooterForm from "./FooterForm";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <footer className="pt-5">
        <div className="footerbody">
          <div className="row mx-auto mb-4">
            <div className="col-md-5 col-xs-4">
              <FooterForm />
            </div>
            <div className="col-md-5 col-xs-4">
              <label>
                <h5 className="labelHeaderText">Follow us on</h5>

                <div className="social_icon">
                  <i
                    className="fab fa-facebook fa-2x"
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    className="fab fa-twitter fa-2x ml-5"
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    className="fab fa-linkedin fa-2x ml-5"
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    className="fab fa-instagram fa-2x ml-5"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </label>
            </div>
            <div className="col-md-2 col-xs-4">
              <label>
                <h5 className="labelHeaderText">Need Help</h5>

                <div>
                  <span>
                    {" "}
                    <i className="fa fa-phone fa-2x mr-3"></i>{" "}
                  </span>{" "}
                  <span className="phoneNo">08134565753</span>
                </div>
              </label>
            </div>
          </div>

          <div className="row mx-auto pt-4 footerSec">
            <div className="col-md-5 col-xs-6">
              <h4 className="font-weight-bolder footerHeaderText">
                Featured Job
              </h4>
              <ul className="footerList">
                <li>42, Local Airport Road, Ikeja, Lagos</li>
                <li>Report a Problem</li>
                <li>Mobile Site</li>
                <li>Jobs by Skill</li>
              </ul>
            </div>

            <div className="col-md-5 col-xs-6">
              <h4 className="font-weight-bolder  footerHeaderText">
                Latest Job
              </h4>
              <ul className="footerList">
                <li>42, Local Airport Road, Ikeja, Lagos</li>
                <li>Manage Responses</li>
                <li>Report a Problem</li>
                <li>Mobile Site</li>
                <li>Jobs by Skill</li>
              </ul>
            </div>

            <div className="col-md-2 col-xs-6">
              <h4 className="font-weight-bolder footerHeaderText">Reach Us</h4>
              <address>
                <ul className="footerList">
                  <li>42, Local Airport Road</li>
                  <li>Email: Support@job.com</li>
                  <li>Call: 9788655566</li>
                  <li>
                    Skype: <span className="footerName">VGG</span>job@skype
                  </li>
                  <li>FAX: 123 456 85</li>
                </ul>
              </address>
            </div>
          </div>

          <div className="row mx-auto">
            <div className="copy-right col-12 text-center my-3 footerList_coopyright">
              <span>&copy;Copyright 2019 </span>
              <span>| Design By Spartans</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
