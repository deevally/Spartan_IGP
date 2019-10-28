import React from "react";

const JobSidebar = ({
  Remote,
  FullTime,
  PartTime,
  FullTimeNumbers,
  PartTimeNumbers,
  RemoteNumbers,
  typeTitle,
  table
}) => {
  return (
    <div className="row ">
      <div className="col-lg-12 card jobSideBar mt-4">
        <h4 className=" p-4 text-center card-title font-weight-bolder typetitle alljobSideSub">
          {typeTitle}
        </h4>

        <div className="d-flex">
          <p className="card-title ">{FullTime}</p>
          <span className="ml-auto "><em>{FullTimeNumbers}</em></span>
        </div>
        <div className="d-flex">
          <p className="card-title">{PartTime}</p>
          <span className="ml-auto"><em>{PartTimeNumbers}</em></span>
        </div>
        <div className="d-flex">
          <p className="card-title">{Remote} </p>
          <span className="ml-auto "><em>{RemoteNumbers}</em></span>
        </div>
      </div>
      {table}
      
    </div>
  );
};

export default JobSidebar;
