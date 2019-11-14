import React, { Component } from "react";
import Statfigure from "./Statfigure";
import '../css/Statistics.css';

const Statistics = () => {


    return (
        <div>
            <div className="statContent  mt-5" >
                <div>
                <i class="fas fa-briefcase"></i>
                    <Statfigure title="JOBS" number="1500" />
                </div>
                <div>
                <i class="fas fa-users"></i>
                    <Statfigure title="MEMBERS" number="500" />

                </div>
                <div>
                <i class="far fa-file"></i>
                    <Statfigure title="RESUME" number="700" />

                </div>
                <div>
                <i class="far fa-building"></i>
                    <Statfigure title="COMPANY" number="100" />

                </div>

            </div>
        </div>
    );

}

export default Statistics;