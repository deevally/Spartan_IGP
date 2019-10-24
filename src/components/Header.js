import React from "react";
import "../css/Header.css";
// import Filter from './Filter';

const Header = props => {
  return (
    <div>
      <header className={props.className}>
        <div className="overlay">
          <div className="container">
            <div className="row head">
              <div className={props.headerText}>
                <div className={props.headerBorder}>
                  <h3 className="headerText__first header_first">
                    {" "}
                    {props.HeaderText__first}{" "}
                  </h3>
                </div>
                {props.searchForm}
                <div className="container">
                  <div className="row my-5 justify-content-center">
                    <div className="col-md-7 text-center ">
                      <span className="jobsAvailable jobIndex">
                        {props.noOfJob}
                      </span>
                      <span className="section-title">
                        {" "}
                        {props.SubHeaderText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
