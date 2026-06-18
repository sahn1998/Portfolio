import React from 'react';
import "./denver.css";
import "../../../styles/section.css";
import "../../../styles/global.css";
import { NavigationBar } from '../../../features/navigation/navbar';

export const Denver = () => {

    return (
        <div className="page-container page-container-main">
            <NavigationBar
                colorHome="rgb(0, 0, 0)"
                colorProjects="rgb(0, 0, 0)"
                colorAbout="rgb(0, 0, 0)"
                colorExperience="rgb(0, 0, 0)"
            />

            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="denver">
                <div className="section-card-background section-card-background--denver">

                    <div className="section-photo-label">
                        {/* Keep the label-meta text the same always */}
                        <p className="label-meta">TRAVEL X CODE ARCHIVE</p>
                        {/* Update the location and subtitle for each city */}
                        <h4 className="label-location">Denver, USA</h4>
                        {/* Update the story text for each city */}
                        <p className="label-subtitle">2026 · DOWNTOWN DENVER</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            My first Denver trip was for an optimization conference, sitting in rooms full of people who work in the energy sector.
                            <br></br>
                            <br></br>
                            Downtown wasn't too close to the Rockies, but it was equal parts grounded and reminded me I have a lot more to learn. 
                            <br></br>
                            <br></br>
                            It was a nice change of pace from the usual hustle in life and the mountains just happened to be a good backdrop for that.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
