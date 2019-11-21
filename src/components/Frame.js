import React from "react";
import Button from "./Button";
import  "../css/Frame.css";


const Frame = () => {
    return <div>
        <div className="container  frameContainer" >
            <div className="row">
                <div className="col-md-6">
                {/* <iframe src="https://youtu.be/https://youtu.be/OP-00EwLdiU" style={{
                        border: 'none',
                        borderRadius: '4px',
                        width: '500px',
                        height : '230px'
                }}></iframe> */}

<iframe 
title="This is a unique title" width="560" height="315" src="https://www.youtube.com/embed/_3_klf4NuT4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  style={{
 border: 'none',
 borderRadius: '4px',
 width: '500px',
 height : '230px' }}
></iframe>

                </div>
                <div className="col-md-6 frameText">
                    <h1> JOIN THOUSANDS OF PEOPLE THAT RELY ON VGG</h1>
                    <hr />
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.available, but the majority have suffered alteration in some form,</p>
                   <Button  btnType= "btn-primary px-3"   children="GET STARTED"  /> 
                </div>

            </div>
        </div>
    </div>

};

export default Frame;