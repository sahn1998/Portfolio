import React, { useState, useEffect } from "react";
import './Project.css'

export const KoreaExportEconomyProject = () => {
    return (
        <div className="project"> 
            <a href="https://medium.com/@sahn1998/eda-on-south-koreas-export-sector-aa6a09022387" target="_blank">
                <img src={require('../../../images/korea_export.PNG')} className="project-image" />
            </a>
            <div className="date-title-container">
                <p className="date-title">
                    <span className="date-description">
                        June 1st, 2023
                    </span>
                </p>
            </div>
            <div className="project-title-container">
                <p className="project-title">
                    <span className="title-description">
                        Unveiling South Korea’s Export Economy
                    </span>
                </p>
            </div>
            <div className="project-description-container">
                <p className="project-description">
                    <span className="description">
                        An EDA (Exploratory Data Analysis) project using Bank of Korea’s API 
                        and python libraries (pandas, numpy, matplotlib, etc).
                    </span>
                </p>
            </div>
        </div>
    )
}