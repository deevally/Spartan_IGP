import React from "react";
import Loading from "../assets/images/loading.gif";
import "../css/Spinner.css";
const Spinner = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="row mx-auto">
          <div className="col-6 mx-auto">
            <img src={Loading} alt="Spinner" className="spinner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
