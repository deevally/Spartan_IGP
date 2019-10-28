import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import '../css/JobsTable.css'

const NotFound = () => {
  return (
      <div>
    <div className="container">
      <div className="row">
        <div className="col-12 notFound">
            <h1 className='font-weight-bolder'>404</h1>
          <h4>The page you are looking for does not exist</h4>
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    </div>
      </div>
  );
};

export default NotFound;
