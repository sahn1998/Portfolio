import React, { useState, useEffect } from "react";
import './Project.css'

export const CancerAnalysisProject = () => {
    return (
        <div className="project"> 
            <a href="https://medium.com/@sahn1998/cancer-unveiling-the-impact-of-a-relentless-disease-f03f8cecc6fe" target="_blank">
                <img src={require('../../../images/cancer2.png')} className="project-image" />
            </a>
            <div className="date-title-container">
                <p className="date-title">
                    <span className="date-description">
                        June 23rd, 2023
                    </span>
                </p>
            </div>
            <div className="project-title-container">
                <p className="project-title">
                    <span className="title-description">
                        Cancer: Unveiling the Impact of a Relentless Disease
                    </span>
                </p>
            </div>
            <div className="project-description-container">
                <p className="project-description">
                    <span className="description">
                        A joint data analysis project using data provided
                        by the National Cancer Institute (NCI), analyzing and visualizing
                        cancer data using python libraries (pandas, plotly, matplotlib, seaborn, etc).
                    </span>
                </p>
            </div>
        </div>
    )
}