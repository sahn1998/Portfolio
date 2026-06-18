import React from 'react';
import "./hokkaido.css";
import "../../../styles/section.css";
import "../../../styles/global.css";
import { NavigationBar } from '../../../features/navigation/navbar';

export const Hokkaido = () => {

    return (
        <div className="page-container page-container-main">
            <NavigationBar
                colorHome="rgb(255, 255, 255)"
                colorProjects="rgb(255, 255, 255)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />

            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="hokkaido">
                <div className="section-card-background section-card-background--hokkaido">

                    <div className="section-photo-label">
                        {/* Keep the label-meta text the same always */}
                        <p className="label-meta">TRAVEL X CODE ARCHIVE</p>
                        {/* Update the location and subtitle for each city */}
                        <h4 className="label-location">Hokkaido, Japan</h4>
                        {/* Update the story text for each city */}
                        <p className="label-subtitle">2023 · HACHIMAN-ZAKA SLOPE</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            I landed in Hokkaido a few months after finishing my military service, and the quiet hit me before the snow did. Hachiman-zaka Slope was blanketed white, and for the first time in two years I didn't have anywhere I needed to be.
                            <br></br>
                            <br></br>
                            I just walked, slow and unhurried, watching my breath in the cold air and letting my mind catch up to my body.
                            <br></br>
                            <br></br>
                            That stillness was exactly what I needed before starting my first real step into data back in Seoul. Hokkaido was the pause between who I'd been and who I was about to become.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
