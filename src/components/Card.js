import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../css/Card.css";

const Card = () => {
    return (
        <div>
            <div className="container ">
                <div className="row single-post my-5 ">

                    <div className="details col-md-9 ">
                        <div className="title">
                            <div className="titles">
                                <Link to="/" style={{
                                    textDecoration: "none"
                                }}>
                                    <h4>Creative Art Designer</h4>
                                </Link>
                                <h6>Premium Labels Limited</h6>
                            </div>
                            <h5> Full time</h5>
                            <p className="address">
                                <i className="fas fa-map-marker-alt"></i>Dhaka
                            </p>
                            <Button children= "View"  btnType="btn-primary" myBtnClass="viewbutton" />
                          
                        </div>
                    </div>

                    <div className="sidebar col-md-3 ">
                        <h1>SideBar</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;
