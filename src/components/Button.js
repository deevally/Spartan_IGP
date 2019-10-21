import React from "react";

const Button = ({ Children, btnType, myBtnClass }) => {
  return (
    <div>
      <button className={`btn ${btnType} ${myBtnClass}`}>{Children}</button>
    </div>
  );
};

export default Button;
