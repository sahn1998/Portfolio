import React from 'react';
import "./hongkong.css";
import "../../../styles/section.css";
import "../../../styles/global.css";
import { NavigationBar } from '../../../features/navigation/navbar';

export const HongKong = () => {

    return (
        <div className="page-container page-container-main">
            <NavigationBar
                colorHome="rgb(255, 255, 255)"
                colorProjects="rgb(255, 255, 255)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />

            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="hongkong">
                <div className="section-card-background section-card-background--hongkong">

                    <div className="section-photo-label">
                        {/* Keep the label-meta text the same always */}
                        <p className="label-meta">TRAVEL X CODE ARCHIVE</p>
                        {/* Update the location and subtitle for each city */}
                        <h4 className="label-location">Hong Kong, China</h4>
                        {/* Update the story text for each city */}
                        <p className="label-subtitle">2026 · VICTORIA HARBOUR</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            I came back to Hong Kong for PAKDD, where I got to showcase my first published research, looking out over Victoria Harbour with a junk boat drifting past the skyline like it belonged in a different century entirely.
                            <br></br>
                            <br></br>
                            Presenting that work was a milestone I'd been building toward since my admission into my master's program. It was a good way to end my academics and to start my new chapter in life as a data scientist.
                            <br></br>
                            <br></br>
                            Between sessions I just wandered for the food and the noise. It felt like a fitting place to mark the start of my journey at 28.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
