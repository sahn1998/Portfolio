import React, { useState } from 'react';
import "./AboutHomeComponent.css";
import aboutPhoto from "../../../images/landing-page/aboutme.jpg"; 

interface AboutHomeComponentProps {
    onClose: () => void;
}

export const AboutHomeComponent: React.FC<AboutHomeComponentProps> = ({ onClose }) => {
    return (
        <div className="about-popover">
            <div className="about-popover-header">
                <button
                    type="button"
                    className="about-popover-close"
                    onClick={onClose}
                    aria-label="Close about preview"
                >
                    ×
                </button>
            </div>

            <div className="about-popover-body">
                <div className="about-photo-frame">
                    <img
                        src={aboutPhoto}
                        alt="Sunghyun in London, 2025"
                        className="about-photo"
                    />
                    {/* Chat bubble */}
                    <div className="about-chat-bubble">
                        <p>
                            Curiosity can bring abstract ideas to life, reignite the mind after failure, and motivate the hesitant.
                        </p>
                    </div>
                </div>

                <div className="about-photo-caption">
                    <p className="about-photo-title">London, United Kingdom · 2025</p>
                    <p className="about-photo-text">
                        I consider myself a puzzle solver, an optimist, an innovator, and a global leader.
                    </p>
                </div>

            </div>
        </div>
    );
};


// IntroductionAbout
export const IntroductionAbout = () => {

    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <div className="section-card-background section-card-background--aboutme">

            {/* Photo label */}
            <div className="section-photo-label">
                <p className="label-meta">Travel × Code Archive</p>

                <h4 className="label-location">Eastbourne, United Kingdom</h4>
                <p className="label-subtitle">2025 · Seven Sisters Cliff</p>

                <div className="label-divider"></div>

                <p className="label-story">
                    United Kingdom was the first country I visited as a child. It was a place that felt impossibly vast, unfamiliar, and electric.   
                    <br></br>
                    <br></br>
                    Years later, I retraced old streets and discovered new corners, closing a quiet loop of my past memories.  
                    <br></br>
                </p>
            </div>

            <div className="section-content">
                <span className="section-label">-- SUNGHYUN AHN --</span>
                <h1 className="section-title">Beyond the resume</h1>
                <p className="section-subtitle">
                    Learning from the past and looking forward to the future,<br></br>I build with passion and move with purpose.
                </p>
            </div>
            <div className="about-popover-anchor">
                <button
                    type="button"
                    className="section-button"
                    onClick={() => setAboutOpen(prev => !prev)}
                >
                    About Me
                </button>

                {aboutOpen && (
                    <AboutHomeComponent onClose={() => setAboutOpen(false)} />
                )}
            </div>
        </div>
    );
};