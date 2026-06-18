import React, { useState } from 'react';
import "./jacksonville.css";
import { NavigationBar } from '../navigation/navbar';

export const Jacksonville = () => {

    return (
        <div className="page-container page-container-main">
            <NavigationBar 
                colorHome="rgb(255, 255, 255)"
                colorProjects="rgb(255, 255, 255)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />

            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="template">
                <div className="section-card-background section-card-background--template">

                    <div className="section-photo-label">
                        {/* Keep the label-meta text the same always */}
                        <p className="label-meta">TRAVEL X CODE ARCHIVE</p>
                        {/* Update the location and subtitle for each city */}
                        <h4 className="label-location">City, Country</h4>
                        {/* Update the story text for each city */}
                        <p className="label-subtitle">Year · Landmark</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            Jacksonville marked the start of my professional career in the US, the city where I took on my first full time role after graduating.
                            <br></br>
                            <br></br>
                            It was a period defined by curiosity: learning how to navigate a new city, a new job, and a new life stage all at once.
                            <br></br>
                            <br></br>
                            More than the city itself, it represents the transition from academic life to professional life, and the foundation that shaped how I approach work since.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};