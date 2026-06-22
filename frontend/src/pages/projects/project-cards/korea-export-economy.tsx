import './project-card.css';
import './project-card.tier2.css';
import './project-card.tier3.css';
import koreaExportImage from "../../../images/korea-export.png";

export const KoreaExportEconomyProject = () => {
    return (
        <div className="project">
            <a
                href="https://medium.com/@sahn1998/eda-on-south-koreas-export-sector-aa6a09022387"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
            >
                <img
                    src={koreaExportImage}
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
