
import React from 'react';
import { NavigationBar } from '../navigation-bar/Navbar';
import { BinomialProject } from '../display-projects/binomial_distribution';

import '../Global.css'
import './interactive-projects.css'

export const Introduction = () => {
    return (
        <section id="intro">
            <h1>Interactive Projects</h1>
            <p>Click on the image to view the project!</p>
        </section>
    )
}

export const InteractiveProjects = () => {
    return (
        <div>
            <NavigationBar 
                colorHome="rgb(255, 255, 255)"
                colorProjects="rgb(183, 165, 122)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />
            <Introduction />
            <main id="portfolio">
                <section className="portfolio-grid">
                    <div className="portfolio-card">
                        <BinomialProject />
                    </div>
                </section>
            </main>
        </div>
    );

}