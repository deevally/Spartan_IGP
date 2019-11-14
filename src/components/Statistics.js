import React, { Component } from "react";
import Statfigure from "./Statfigure";
import '../css/Statistics.css';

const Statistics = () => {


    return (
        <div>
            <div className="statContent  mt-5" >
                <div>
                    <Statfigure title="JOBS" number="1500" />
                </div>
                <div>
                    <Statfigure title="MEMBERS" number="500" />

                </div>
                <div>
                    <Statfigure title="RESUME" number="700" />

                </div>
                <div>
                    <Statfigure title="COMPANY" number="100" />

                </div>

            </div>
        </div>
    );

}

export default Statistics;