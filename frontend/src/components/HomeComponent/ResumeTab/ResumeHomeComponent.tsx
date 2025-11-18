import React, { useState } from 'react';
import "./ResumeHomeComponent.css";

type ResumeItem = {
    year: string;
    title: string;
    location: string;
    summary: string[];
};

const resumeTimeline = [
    {
        year: "Sep. 2025 - Present",
        title: "Data Science Intern · The Energy Authority",
        location: "Bellevue, Washington, USA",
        summary: ["Solar & storage optimization, generation forecasting, and platform quality."]
    },
    {
        year: "Jan. 2025 - Present",
        title: "Graduate Research Assistant · Seattle University",
        location: "Seattle, Washington, USA",
        summary: [
            "Machine learning pipeline for asthma health risk prediction using CNNs",
            "Implemented spatial transformation techniques on tabular patient data to enable transfer learning in computer vision frameworks."
        ]   
    },
    {
        year: "Aug. 2023 - Aug. 2024",
        title: "Regulatory & Analytics Consultant · Chemtopia",
        location: "Seoul, South Korea",
        summary: [
            "Directed data-driven compliance strategies for 50+ REACH projects across Korea, EU, Türkiye, UK, and USA.",
            "Developed +15 dashboards presentations across 10 clients in +50 projects to provide chemical regulatory insights and created reusable templates that cut manual reporting time by 40%."
        ]
    },
    {
        year: "Oct. 2021 - Apr. 2023",
        title: "Operations Data & Language Specialist (SGT) · Republic of Korea Army",
        location: "Seoul, South Korea",
        summary: [
            "Analyzed training data, supported 10+ U.S. & ROKA joint missions as a bilingual analyst",
            "Developed Excel dashboard suite used by 3 brigades, reducing weekly report prep time from 6 to 2 hours."
        ]
    },
    {
        year: "Jan. 2022 - Dec. 2022",
        title: "CEO / Team Leader · CuraStem | Challenge K-Startup 2022",
        location: "Seoul, South Korea",
        summary: [
            "Developed a startup 'CuraStem' regarding a multi-layer adipose/collagen stem-cell patch 'CuraBurn' for treating severe 2nd and 3rd degree burns.",
            "Constructed a pitch-deck for angel investors as well as venture capitalists, resulting in the final placement of 11th out of 5,420 startups with over $20,000 in prize funds."
        ]
    },
    {
        year: "Mar. 2019 - Mar. 2020",
        title: "Project Manager · Business Impact Group",
        location: "Seattle, Washington, USA",
        summary: [
            "Led 3 client projects with a focus on operational analysis, increasing client ROI by an estimated 18% based on post-project KPIs.",
            "Designed and ran A/B tests on website design impacting 5K+ users, identifying optimal features that improved engagement by 5%"
        ]
    },
];


type GroupedTimeline = Record<string, ResumeItem[]>;

const groupTimelineByYear = (timeline: ResumeItem[]): GroupedTimeline => {
    const grouped: GroupedTimeline = {};

    timeline.forEach((item) => {
        const yearKey = item.year.split(" ").pop()?.replace("–", "-") ?? "Unknown";
        if (!grouped[yearKey]) {
            grouped[yearKey] = [];
        }
        grouped[yearKey].push(item);
    });

    return grouped;
};

interface ResumeHomeComponentProps {
    onClose: () => void;
}

export const ResumeHomeComponent: React.FC<ResumeHomeComponentProps> = ({ onClose }) => {
    const groupedTimeline = groupTimelineByYear(resumeTimeline);

    return (
        <div className="resume-popover">
            <div className="resume-popover-header">
                <button
                    type="button"
                    className="resume-popover-close"
                    onClick={onClose}
                    aria-label="Close resume timeline"
                >
                    ×
                </button>
            </div>

            <div className="resume-timeline">
                {Object.keys(groupedTimeline)
                    .sort((a, b) => b.localeCompare(a)) // Optional: sort newest → oldest
                    .map((year) => (
                    <div className="resume-year-group" key={year}>
                        
                        {/* Marker dot + year horizontally aligned */}
                        <div className="resume-timeline-header-row">
                        <span className="resume-timeline-dot" />
                        <span className="resume-timeline-year">{year}</span>
                        </div>
                        
                        {/* Roles under this year */}
                        <div className="resume-group-items">
                        {groupedTimeline[year].map((item, idx) => (
                            <div className="resume-timeline-item" key={idx}>
                            <h4 className="resume-timeline-title">{item.title}</h4>
                            <p className="resume-timeline-location">
                                <span className="location-text">{item.location}</span>
                                <span className="location-year">{item.year}</span>
                            </p>
                            <ul className="resume-timeline-summary">
                                {item.summary.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                            </ul>
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </div>


            <a href="/resume" className="resume-popover-footer-link">
                View full resume →
            </a>
        </div>
    );
};

export const IntroductionResume = () => {

    const [resumeOpen, setResumeOpen] = useState(false);

    const toggleResumePopover = () => {
        setResumeOpen(prev => !prev);
    };

    return (
        <div className="section-card-background section-card-background--introduction">
            
            {/* Photo label */}
            <div className="section-photo-label">
                <p className="label-meta">Travel × Code Archive</p>

                <h4 className="label-location">Seoul, South Korea</h4>
                <p className="label-subtitle">2023 · Namsan Tower</p>

                <div className="label-divider"></div>

                <p className="label-story">
                    Born in Seoul, South Korea in 1998, 
                    <br></br>
                    I moved to Seattle at the age of 10.
                    <br></br>
                    <br></br>
                    Growing up between these two places, I was shaped by dual identities, blended cultures, and a curiosity that has guided my journey ever since.
                </p>
            </div>

            {/* Main content */}
            <div className="section-content">
                <span className="section-label">-- SUNGHYUN AHN --</span>
                <h1 className="section-title">My Journey</h1>
                <p className="section-subtitle">
                    The experiences that shaped me as a data scientist.
                </p>
            </div>
            
            {/* Button + anchor wrapper for popover positioning */}
            <div className="resume-popover-anchor">
                <button
                    type="button"
                    className="section-button"
                    onClick={toggleResumePopover}
                    aria-haspopup="dialog"
                    aria-expanded={resumeOpen}
                >
                    View my resume
                </button>

                {resumeOpen && (
                    <ResumeHomeComponent onClose={() => setResumeOpen(false)} />
                )}
            </div>
        </div>
    );
};