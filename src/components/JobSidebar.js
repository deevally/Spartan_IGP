import React from "react";

const JobSidebar = ({
  Remote,
  FullTime,
  PartTime,
  FullTimeNumbers,
  PartTimeNumbers,
  RemoteNumbers
}) => {
  return (
    <div className="row ">
      <div className="col-lg-12 card jobSideBar">
        <h4 className=" p-4 text-center card-title font-weight-bolder typetitle alljobSideSub">
          JOB BY TYPE
        </h4>

        <div className="d-flex">
          <p className="card-title ">{FullTime} </p>
          <span className="ml-auto ">{FullTimeNumbers}</span>
        </div>
        <div className="d-flex">
          <p className="card-title">{PartTime}</p>
          <span className="ml-auto ">{PartTimeNumbers}</span>
        </div>
        <div className="d-flex">
          <p className="card-title">{Remote} </p>
          <span className="ml-auto ">{RemoteNumbers}</span>
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
