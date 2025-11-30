
import React, { useState } from 'react';
import { NavigationBar } from './navigation-bar/Navbar';
import { IntroductionResume } from "./HomeComponent/ResumeTab/ResumeHomeComponent"; // adjust path as needed
import { IntroductionAbout } from "./HomeComponent/AboutTab/AboutHomeComponent";
import { IntroductionPortfolio } from "./HomeComponent/PortfolioTab/PortfolioHomeComponent"; // adjust path as needed

import './Home.css'
import './Global.css'
import './Section.css'

export const Homepage = () => {
    const SLIDES = [<IntroductionResume />, <IntroductionAbout />];
    const [activeSlide, setActiveSlide] = useState(0);

    const goNext = () => {
        if (activeSlide < SLIDES.length - 1) {
            setActiveSlide((prev) => prev + 1);
        }
    };

    const goPrev = () => {
        if (activeSlide > 0) {
            setActiveSlide((prev) => prev - 1);
        }
    };


    return (
        <div className="page-container page-container-main">
            <NavigationBar 
                colorHome="rgba(0, 0, 0, 1)"
                colorProjects="rgb(255, 255, 255)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />

            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="introduction">
                {/* Left arrow — only visible if slide > 0 */}
                {activeSlide > 0 && (
                    <button
                        type="button"
                        className="slider-arrow-icon slider-arrow-icon--left"
                        onClick={goPrev}
                        aria-label="Previous section"
                    >
                        ‹
                    </button>
                )}

                {/* Slider container */}
                <div className="section-card intro-slider">
                    <div
                        className="section-card-track"
                        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                    >
                        {SLIDES.map((Slide, idx) => (
                            <div key={idx} className="section-card slide">
                                {Slide}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right arrow — only visible if slide < last index */}
                {activeSlide < SLIDES.length - 1 && (
                    <button
                        type="button"
                        className="slider-arrow-icon slider-arrow-icon--right"
                        onClick={goNext}
                        aria-label="Next section"
                    >
                        ›
                    </button>
                )}

                {/* Keep your existing scroll indicator */}
                <div
                    className="scroll-indicator-wrapper-down"
                    onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })}
                >
                    <div className="scroll-indicator scroll-indicator-down" />
                </div>
            </section>

            <section className="snap-section intro-section" id="project">
                <div
                    className="scroll-indicator-wrapper-up"
                    onClick={() => document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })}
                >
                    <div className="scroll-indicator scroll-indicator-up" />
                </div>
                <IntroductionPortfolio />
            </section>
            
        </div>
    );

}