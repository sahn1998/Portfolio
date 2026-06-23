import React, { useState } from 'react';
import { NavigationBar } from '../../../features/navigation/navbar';

import "./seoul.css";
import "./seoul.tier2.css";
import "./seoul.tier3.css";
import "../../../styles/global.css";
import "../../../styles/section.css";

type seoulLifeItem = {
    year: string;
    title: string;
    location: string;
    summary: string[];
};

const seoulLifeTimeline: seoulLifeItem[] = [
    {
        year: "2023 - 2024",
        title: "My First Step Into Data",
        location: "Seoul, South Korea",
        summary: [
            "After returning to civilian life, Seoul welcomed me back with a new challenge: stepping into my very first data related role.",
            "I spent those months diving into chemical regulations from Korea to EU, turning messy spreadsheets and scattered rules into dashboards that finally made sense.",
            "It was the first time the pieces clicked. I realized that solving problems with data felt natural to me, and for the first time, I could see the path I wanted to follow."
        ]
    },
    {
        year: "2021 - 2023",
        title: "Service in the Republic of Korea Army",
        location: "Icheon, South Korea",
        summary: [
            "When COVID hit, I returned to Korea to wear a uniform serving as an operations and language specialist supporting ROKA–U.S. joint missions where mistakes weren’t an option.",
            "Days were long and structured, filled with briefings, data logs, and reports that needed to be perfect. I built tools that saved brigades hours each week, often without even realizing how much it mattered.",
            "Those years shaped me quietly but profoundly: discipline, clarity, resilience, and the ability to stay steady when everything around you is moving fast."
        ]
    },
    {
        year: "2008 - 2010",
        title: "Preparing for a New Life Abroad",
        location: "Yongin, South Korea",
        summary: [
            "A quieter chapter where my family prepared for a leap across the world.",
            "I remember the sound of phone calls late at night, the word 'America' whispered like something far away and impossible, and boxes slowly filling our living room.",
            "I didn’t fully understand what moving meant. I just felt the air shifting around me — a new country, a new language, a new beginning — exciting and frightening at the same time."
        ]
    },
    {
        year: "1998 - 2008",
        title: "The City That Never Slept",
        location: "Gangnam, South Korea",
        summary: [
            "I grew up surrounded by Seoul’s neon glow, bright signs, crowded streets, and the constant hum of buses rushing by.",
            "Late at night, the city felt alive: convenience stores lighting up the corners, street vendors packing up slowly, and taxis sliding through the rain.",
            "To me, it was normal. I didn’t realize how special it was to grow up in a place that buzzed even when the rest of the world slept."
        ]
    },
];




type GroupedTimeline = Record<string, seoulLifeItem[]>;

const groupTimelineByYear = (timeline: seoulLifeItem[]): GroupedTimeline => {
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

interface SeoulResumeComponentProps {
    onClose: () => void;
}

export const SeoulResumeComponent: React.FC<SeoulResumeComponentProps> = ({ onClose }) => {
    const groupedTimeline = groupTimelineByYear(seoulLifeTimeline);

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

            <div className="seoul-resume-timeline">
                {Object.keys(groupedTimeline)
                    .sort((a, b) => b.localeCompare(a)) // Optional: sort newest → oldest
                    .map((year) => (
                    <div className="resume-year-group" key={year}>
                        
                        {/* Marker dot + year horizontally aligned */}
                        <div className="seoul-resume-timeline-header-row">
                        <span className="seoul-resume-timeline-dot" />
                        <span className="seoul-resume-timeline-year">{year}</span>
                        </div>
                        
                        {/* Roles under this year */}
                        <div className="resume-group-items">
                        {groupedTimeline[year].map((item, idx) => (
                            <div className="seoul-resume-timeline-item" key={idx}>
                            <h4 className="seoul-resume-timeline-title">{item.title}</h4>
                            <p className="seoul-resume-timeline-location">
                                <span className="location-text">{item.location}</span>
                                <span className="location-year">{item.year}</span>
                            </p>
                            <ul className="seoul-resume-timeline-summary">
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
        </div>
    );
};

export const Seoul = () => {

    const [resumeOpen, setResumeOpen] = useState(false);

    const toggleResumePopover = () => {
        setResumeOpen(prev => !prev);
    };

    return (
        <div className="page-container page-container-main">
            <NavigationBar 
                colorHome="rgb(255, 255, 255)"
                colorProjects="rgb(255, 255, 255)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />
            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="introduction">
                <div className="section-card-background section-card-background--seoul">
                    
                    {/* Photo label */}
                    <div className="seoul-photo-label">
                        <p className="label-meta">Travel × Code Archive</p>

                        <h4 className="label-location">Seoul, South Korea</h4>
                        <p className="label-subtitle">2023 · NAMSAN TOWER</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            Being born in Seoul, this city is where I learned how to work, how to adapt, and how to hold myself to a higher standard.
                            <br></br>
                            <br></br>
                            Living in Seoul taught me discipline, resilience, and the importance of pushing forward. It remains the foundation of who I am, no matter where I go next.
                            <br></br>
                            <br></br>
                            This is where my journey started and it's a place I carry with me always.
                        </p>
                    </div>

                    {/* Main content */}
                    <div className="section-content">
                        <h1 className="section-title">My Seoul Story</h1>
                        <p className="section-subtitle">
                            Chapters from the city that shaped who I am.
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
                            My Life In Korea
                        </button>

                        {resumeOpen && (
                            <SeoulResumeComponent onClose={() => setResumeOpen(false)} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};