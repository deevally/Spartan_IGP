import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../css/Card.css";

const Card = ({
  cardHeader,
  cardHeaderSub,
  CardSubText,
  CardSubText2,
  onClick,
  displayNaira
}) => {
  return (
    <div>
      <div className="title my-5">
        <div className="titles">
          <Link
            to="/"
            style={{
              textDecoration: "none"
            }}
          >
            <h4>{cardHeader}</h4>
          </Link>
          <h6>{cardHeaderSub}</h6>
        </div>

        <h5> {CardSubText}</h5>

        <p className="address">
          <span className={`mr-2 ${displayNaira}`}>&#8358;</span>
          {CardSubText2}
        </p>

        <Button
          children="View"
          btnType="btn-primary"
          myBtnClass="viewbutton"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
