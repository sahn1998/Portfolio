import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./london.css";
import "./london.tier2.css";
import "./london.tier3.css";
import aboutPhoto from "../../../images/pages/city/london/aboutme.jpg";
import { NavigationBar } from '../../../features/navigation/navbar';

interface LondonComponentProps {
    onClose: () => void;
}

export const LondonComponent: React.FC<LondonComponentProps> = ({ onClose }) => {
    const navigate = useNavigate();

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
                        onClick={() => navigate("/aboutme")}
                    />

                     <div className="about-photo-clickhint">
                        Learn more about me →
                    </div>

                    {/* Chat bubble */}
                    <div className="about-chat-bubble">
                        <p>
                            Curiosity can bring abstract ideas to life, 
                            <br></br>
                            reignite the mind after failure, and motivate the hesitant.
                        </p>
                    </div>
                </div>

                <div className="about-photo-caption">
                    <p className="about-photo-title">London, United Kingdom · 2025</p>
                    <p className="about-photo-text">
                        A curious mind, a steady heart, and a gentleman’s approach to the world around me.
                    </p>
                </div>

            </div>
        </div>
    );
};


export const London = () => {

    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <div className="page-container page-container-main">
            <NavigationBar 
                colorHome="rgb(255, 255, 255)"
                colorProjects="rgb(255, 255, 255)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />
            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="london">
                <div className="section-card-background section-card-background--london">

                    {/* Photo label */}
                    <div className="section-photo-label">
                        <p className="label-meta">Travel × Code Archive</p>

                        <h4 className="label-location">Eastbourne, United Kingdom</h4>
                        <p className="label-subtitle">2025 · SEVEN SISTERS CLIFF</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            United Kingdom was the first stamp in my passport at the age of 10. It's the place where I first learned what it felt like to step into a world bigger than anything I knew.     
                            <br></br>
                            <br></br>
                            As a child, everything felt enormous. The crowds, the accents, the double-decker buses that looked like they belonged in storybooks.  
                            <br></br>
                            <br></br>
                            Returning years later, I walked those same streets with steadier feet.  
                            The adventure felt different now. It's less about discovering a new world  
                            and more about rediscovering the parts of myself that I forgot.
                        </p>
                    </div>

                    <div className="section-content">
                        <h1 className="section-title">My First Passport Stamp</h1>
                        <p className="section-subtitle">
                            Learning from the past and looking forward to the future,<br></br>I chase new horizons with the same curiosity I had the first time I stepped abroad.
                        </p>
                    </div>
                    <div className="about-popover-anchor">
                        <button
                            type="button"
                            className="section-button"
                            onClick={() => setAboutOpen(prev => !prev)}
                        >
                            A little more about me
                        </button>

                        {aboutOpen && (
                            <LondonComponent onClose={() => setAboutOpen(false)} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};