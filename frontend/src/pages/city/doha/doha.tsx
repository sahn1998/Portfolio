import React from 'react';
import "./doha.css";
import "../../../styles/section.css";
import "../../../styles/global.css";
import { NavigationBar } from '../../../features/navigation/navbar';

export const Doha = () => {

    return (
        <div className="page-container page-container-main">
            <NavigationBar
                colorHome="rgb(0, 0, 0)"
                colorProjects="rgb(0, 0, 0)"
                colorAbout="rgb(0, 0, 0)"
                colorExperience="rgb(0, 0, 0)"
            />

            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="doha">
                <div className="section-card-background section-card-background--doha">

                    <div className="section-photo-label">
                        {/* Keep the label-meta text the same always */}
                        <p className="label-meta">TRAVEL X CODE ARCHIVE</p>
                        {/* Update the location and subtitle for each city */}
                        <h4 className="label-location">Doha, Qatar</h4>
                        {/* Update the story text for each city */}
                        <p className="label-subtitle">2022 · LUSAIL CITY</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            I went to Doha for the World Cup and was amazed by the scale of the city. Lusail City was beautiful with the stadiums and skylines built on a timeline that shouldn't have been possible.
                            <br></br>
                            <br></br>
                            Walking through it, I talked with a friend about how fast this city had grown at that scale. The logistics, the data, the sheer coordination behind every light on that skyline.
                            <br></br>
                            <br></br>
                            Although there were many controversies, it was a glimpse of what ambition looks like when it's backed by resources and a deadline that can't move.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
