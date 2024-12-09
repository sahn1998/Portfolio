import React, { useState, useEffect } from "react";
import './Project.css'

export const BinomialProject = () => {
    return (
        <div className="project"> 
            <a href="/interactive-projects/binomial-distribution" target="_blank">
                <img src={require('../../../images/binomial_equation_cover.png')} className="project-image" />
            </a>
            <div className="date-title-container">
                <p className="date-title">
                    <span className="date-description">
                        December 8th, 2024
                    </span>
                </p>
            </div>
            <div className="project-title-container">
                <p className="project-title">
                    <span className="title-description">
                        Binomial Distribution Visualization
                    </span>
                </p>
            </div>
            <div className="project-description-container">
                <p className="project-description">
                    <span className="description">
                        An interactive visualization of what Binomial Distribution looks like.
                    </span>
                </p>
            </div>
        </div>
    )
}