
import React from 'react';
import { NavigationBar } from './navigation-bar/Navbar';
import { CancerAnalysisProject } from './display-projects/cancer_analysis';
import { KoreaExportEconomyProject } from './display-projects/korea_export_economy';
import { BreastCancerProject } from './display-projects/breast_cancer';
import { BinomialProject } from './display-projects/binomial_distribution';

import './Home.css'
import './Global.css'

export const Introduction = () => {
    return (
        <section id="intro">
            <h1>Sunghyun Ahn</h1>
            <p>Hi! Thanks for visiting.</p>
            <p>This is a collection of my personal projects. I hope you enjoy!</p>
        </section>
    )
}

export const Homepage = () => {

    return (
        <div>
            <NavigationBar 
                colorHome="rgb(183, 165, 122)"
                colorProjects="rgb(255, 255, 255)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />
            <Introduction />
            <main id="portfolio">
                <section className="portfolio-grid">
                    <div className="portfolio-card">
                        <BinomialProject />
                    </div>
                    <div className="portfolio-card">
                        <BreastCancerProject />
                    </div>
                    <div className="portfolio-card">
                        <KoreaExportEconomyProject />
                    </div>
                </section>
                <section className="portfolio-grid">
                    <div className="portfolio-card">
                        <CancerAnalysisProject />
                    </div>
                </section>
            </main>
        </div>
    );

}