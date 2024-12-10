import React from "react";
import './Project.css';

export const KoreaExportEconomyProject = () => {
    return (
        <div className="project"> 
            <a 
                href="https://medium.com/@sahn1998/eda-on-south-koreas-export-sector-aa6a09022387" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    src={require('../../images/korea_export.PNG')} 
                    className="project-image" 
                    alt="Korea Export Economy"
                />
            </a>
            <div className="project-text-section">
                <p className="project-title">
                    Unveiling South Korea’s Export Economy
                </p>
                <p className="project-description">
                    An EDA (Exploratory Data Analysis) project using Bank of Korea’s API 
                    and python libraries (pandas, numpy, matplotlib, etc).
                </p>
                <p className="date-title">
                    Jun. 1st, 2023
                </p>
            </div>
        </div>
    );
};
