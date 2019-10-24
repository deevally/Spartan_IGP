import React from "react";

const JobSidebar = ({Remote, FullTime,PartTime, FullTimeNumbers,PartTimeNumbers,RemoteNumbers }) => {
  return (
    <div className="row my-5">
      <div className="col-lg-12 card">
        <h4 className=" p-4 text-center card-title font-weight-bolder typetitle">JOB BY TYPE</h4>
        
        <div className="d-flex">
            <p className="card-title ">{FullTime} </p>
            <span className="ml-5 ">{FullTimeNumbers}</span>

        </div>
        <div className="d-flex">
            <p className="card-title">{PartTime}</p> 
            <span className="ml-5 ">{PartTimeNumbers}</span>
        </div>
        <div className="d-flex">

            <p className="card-title">{Remote} </p>
            <span className="ml-5 ">{RemoteNumbers}</span>

        </div>
      </div>
      {/* <div className="col-lg-12 card my-4">
        <h4 className=" p-4 text-center card-title">JOB BY TITLE</h4>
        <p className="card-title text-center">
          {jobType} <span>{jobTypeNumbers}</span>
        </p>
      </div> */}
    </div>
  );
};

export default JobSidebar;
