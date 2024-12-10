import React from "react";
import './Project.css';

export const CancerAnalysisProject = () => {
    return (
        <div className="project"> 
            <a 
                href="https://medium.com/@sahn1998/cancer-unveiling-the-impact-of-a-relentless-disease-f03f8cecc6fe" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    src={require('../../images/cancer2.png')} 
                    className="project-image" 
                    alt="Cancer Analysis"
                />
            </a>
            <div className="project-text-section">
                <p className="project-title">
                    Cancer: Unveiling the Impact of a Relentless Disease
                </p>
                <p className="project-description">
                    A joint data analysis project using data provided by the National Cancer 
                    Institute (NCI), analyzing and visualizing cancer data using Python 
                    libraries (pandas, plotly, matplotlib, seaborn, etc).
                </p>
                <p className="date-title">
                    Jun. 23rd, 2023
                </p>
            </div>
        </div>
    );
};
