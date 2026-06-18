import './project-card.css';

import binomialImage from "../../../images/pages/projects/binomial-equation-cover.png";

export const BinomialProject = () => {
    return (
        <div className="project">
            <a
                href="/interactive-projects/binomial-distribution"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
            >
                <img
                    src={binomialImage}
                    className="project-image"
                    alt="Binomial Distribution Visualization"
                />
            </a>

            <div className="project-text-section">
                <p className="project-title">
                    Visualization of the Binomial Distribution (Statistics)
                </p>
                <p className="project-description">
                    An interactive project to explore and visualize binomial
                    distributions using React and D3. Built as part of learning
                    data science and statistics.
                </p>
                <p className="date-title">Dec. 8, 2024</p>
            </div>
        </div>
    );
};
