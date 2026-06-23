// AboutPage.tsx
import React, { useState } from 'react';
import { NavigationBar } from '../../features/navigation/navbar';
import './about.css';
import './about.tier2.css';
import './about.tier3.css';
import '../../styles/global.css';
import profileImage from '../../images/pages/about/sunghyun-ahn.jpg';

const AboutHero: React.FC = () => (
    <div className="about-hero-inner">
        <h1 className="about-hero-title">
            Curiosity can bring abstract ideas to life,  reignite the mind after failure, and motivate the hesitant.
        </h1>
    </div>
);

const AboutProfile: React.FC = () => (
    <div className="about-profile-row">
        <div className="about-profile-image-wrap">
            <div className="about-profile-card">
                <img
                    src={profileImage}
                    className="about-profile-image"
                    alt="Sunghyun Ahn"
                />
            </div>
        </div>
        <div className="about-profile-text">
            <div className="about-profile-list">
                <p><strong>1.</strong> Data Scientist at The Energy Authority</p>
                <p>
                    <strong>2.</strong> Seattle University Alumni
                    <span> (M.S. in Data Science)</span>
                </p>
                <p>
                    <strong>3.</strong> University of Washington Alumni
                    <span> (B.S. in Physiology)</span>
                </p>
                <p><strong>4.</strong> South Korean International</p>
            </div>

            <p className="about-profile-body">
                <span className="about-profile-highlight">
                I consider myself a puzzle solver, an optimist, an innovator, and a global leader. 
                </span>
                I’m drawn to the kind of ambiguity where learning, analysis, and creativity overlap.
                My work as an analyst, a researcher, and a data scientist taught me that curiosity is as essential as any technical skill.
                It’s the mindset that pushes me to explore patterns, uncover insights, and build solutions that matter.
                <br /><br />
                That’s why I ask myself
                <span className="about-inline-accent"> the What’s</span>,
                <span className="about-inline-accent"> the Why’s</span>, and
                <span className="about-inline-accent"> the How’s</span> every day.
                Curiosity keeps the drive alive.
            </p>
        </div>
    </div>
);

const WhatWhyHow: React.FC = () => (
    <div className="about-pillars">
        <div className="about-pillars-grid">
            <div className="pillar-card">
                <div className="pillar-label">What</div>
                <p className="pillar-text">
                    I’m passionate about working on projects that move society forward while fostering
                    diversity and inclusivity.
                </p>
            </div>

            <div className="pillar-card">
                <div className="pillar-label">Why</div>
                <p className="pillar-text">
                    Growing up in the U.S. as a Korean international, I witnessed discrimination and neglect
                    driven by misinformation. I learned that data gives us the power to shape how communities
                    interact. 
                    
                    <br></br>
                    <br></br>
                    For me, data is an opportunity to drive change and promote inclusivity.
                </p>
            </div>

            <div className="pillar-card">
                <div className="pillar-label">How</div>
                <p className="pillar-text">
                    By building data products, visual stories, and models that reveal insights and by inviting
                    others to explore them. 
                    
                    <br></br>
                    <br></br>
                    Take a look at my projects!
                </p>
            </div>
        </div>
    </div>
);

export const AboutPage: React.FC = () => {  
    const [panelOpen, setPanelOpen] = useState(true);

    return (
        <div className="page-container about-page-container">
            <NavigationBar
                    colorHome="rgb(255, 255, 255)"
                    colorProjects="rgb(255, 255, 255)"
                    colorAbout="rgba(0, 0, 0, 1)"
                    colorExperience="rgb(255, 255, 255)"
            />

            {/* Single full-screen section, no internal scroll */}
            <section className="snap-section about-section" id="about-me">
                <div className="about-section-inner">

                    <div className="section-photo-label">
                        <p className="label-meta">Travel × Code Archive</p>

                        <h4 className="label-location">Dokdo, South Korea</h4>
                        <p className="label-subtitle">2020 · THREE BROTHERS CAVE ROCK</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            Distance has always been part of my story. Family, cultures, languages, and ways of seeing the world.
                            <br />
                            <br />
                            But that distance sparked my curiosity about people, ideas, and the connections that shape who we become.
                            <br />
                            <br />
                            Dokdo symbolizes that shift in perspective—standing at the margin yet offering a deeper view.
                            It reminds me that growth often happens at the boundaries, not the center.
                        </p>
                        {/* --- Toggle Button (always visible) --- */}
                        <button
                            className="about-toggle-button"
                            onClick={() => setPanelOpen(!panelOpen)}
                        >
                            {panelOpen ? "See Background Photo" : "About Me"}
                        </button>
                    </div>

                    {/* Right-side vertical column: hero → intro → profile → what/why/how */}
                    <div
                        className={`about-layout-panel ${panelOpen ? "open" : "closed"}`}
                    >
                        <div className="about-column">
                            <div className="about-hero-kicker">About · Sunghyun Ahn</div>
                            <AboutProfile />
                            <WhatWhyHow />
                            <AboutHero />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
