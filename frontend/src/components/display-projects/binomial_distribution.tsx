import React from "react";
import './Project.css';

export const BinomialProject = () => {
    return (
        <div className="project"> 
            <a 
                href="/interactive-projects/binomial-distribution" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    src={require('../../images/binomial_equation_cover.png')} 
                    className="project-image" 
                    alt="Binomial Distribution Visualization"
                />
            </a>
            <div className="project-text-section">
                <p className="project-title">
                    Visualization of the Binomial Distribution (Statistics)
                </p>
                <p className="project-description">
                    An Interactive Project to Explore and Visualize Binomial Distributions utilizing React's D3 library. Project made for learning data science and statistics.
                </p>
                <p className="date-title">
                    Dec. 8th, 2024
                </p>
            </div>
        </div>
    );
};
