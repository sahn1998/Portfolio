import { Link } from 'react-router-dom';
import './project-card.css';
import './project-card.tier2.css';
import './project-card.tier3.css';

import binomialImage from "../../../images/pages/projects/binomial-equation-cover.png";

export const BinomialProject = () => {
    return (
        <Link to="/interactive-projects/binomial-distribution" className="project">
            <div className="project-link">
                <img
                    src={binomialImage}
                    className="project-image"
                    alt="Binomial Distribution Visualization"
                />
            </div>

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
        </Link>
    );
};
