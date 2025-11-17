
import React, { useState } from 'react';
import { NavigationBar } from './navigation-bar/Navbar';
import { CancerAnalysisProject } from './display-projects/cancer_analysis';
import { KoreaExportEconomyProject } from './display-projects/korea_export_economy';
import { BreastCancerProject } from './display-projects/breast_cancer';
import { BinomialProject } from './display-projects/binomial_distribution';

import './Home.css'
import './Global.css'

import portfolioImg from "../images/landing-page/portfolio.png";

export const IntroductionResume = () => {
    return (
        <div className="section-card-background section-card-background--introduction">
            <div className="hero-content">
                <span className="hero-label">-- SUNGHYUN AHN --</span>
                <h1 className="hero-title">My journey so far</h1>
                <p className="hero-subtitle">
                    Explore the experiences that shaped me as a data scientist.
                </p>

                {/* Link to your resume page */}
                <a href="/resume" className="hero-button">
                    View my resume
                </a>
            </div>
        </div>
    );
};

// IntroductionAboutMe
export const IntroductionAboutMe = () => {
    return (
        <div className="section-card-background section-card-background--aboutme">
            <div className="hero-content">
                <span className="hero-label">-- SUNGHYUN AHN --</span>
                <h1 className="hero-title">Beyond the resume</h1>
                <p className="hero-subtitle">
                    A little more about what motivates me, how I think, and who I am.
                </p>

                <a href="/aboutme" className="hero-button">
                    About Me
                </a>
            </div>
        </div>
    );
};

export const Homepage = () => {
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [projectsClosing, setProjectsClosing] = useState(false);

    const handleOpenProjects = () => {
        setProjectsOpen(true);
        setProjectsClosing(false);
    };

    const handleCloseProjects = () => {
        setProjectsClosing(true); // triggers closing animation
    };

    const SLIDES = [<IntroductionResume />, <IntroductionAboutMe />];
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
        <div className="page-container">
            <NavigationBar 
                colorHome="rgb(183, 165, 122)"
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
                        className="intro-arrow intro-arrow--left"
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
                        className="intro-arrow intro-arrow--right"
                        onClick={goNext}
                        aria-label="Next section"
                    >
                        ›
                    </button>
                )}

                {/* Keep your existing scroll indicator */}
                <div
                    className="scroll-indicator"
                    onClick={() =>
                        document
                            .getElementById("project")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                />
            </section>

            
            <section className="snap-section" id="project">
                <div className="portfolio-hero-grid">

                    {/* LEFT SIDE */}
                    <div className="portfolio-image-wrapper">
                        <button
                            type="button"
                            onClick={handleOpenProjects}
                            aria-label="Open projects"
                            className="portfolio-button"
                        >
                            <img
                                src={portfolioImg}
                                alt="Portfolio visual"
                                className="portfolio-image"
                            />
                        </button>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="portfolio-content">
                        <h2 className="hero-title">Sunghyun Ahn</h2>

                        <p className="hero-subtitle">
                            Curiosity can bring abstract ideas to life, reignite the mind after failure, and motivate the hesitant.
                        </p>
                    </div>
                </div>

                {/* Popup overlay: backdrop + modal */}
                {projectsOpen && (
                    <div
                        className={`portfolio-overlay ${projectsClosing ? "portfolio-overlay--closing" : ""}`}
                        onAnimationEnd={() => {
                            if (projectsClosing) {
                                setProjectsOpen(false);     // actually unmount after close anim
                                setProjectsClosing(false);
                            }
                        }}
                    >
                        <div
                            className="portfolio-backdrop"
                            onClick={handleCloseProjects}
                        />

                        <div className="portfolio-modal">
                            <header className="portfolio-modal-header">
                                <div>
                                    <h2 className="hero-title portfolio-modal-title">
                                        Project Gallery
                                    </h2>
                                </div>
                                <button
                                    type="button"
                                    className="portfolio-close"
                                    onClick={handleCloseProjects}
                                    aria-label="Close projects"
                                >
                                ✕
                                </button>
                            </header>

                            <div className="portfolio-inner">
                                <div className="portfolio-track">
                                    <BinomialProject />
                                    <BreastCancerProject />
                                    <KoreaExportEconomyProject />
                                    <CancerAnalysisProject />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );

}