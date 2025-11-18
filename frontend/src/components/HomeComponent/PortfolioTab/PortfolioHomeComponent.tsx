import React, { useState } from 'react';

import { CancerAnalysisProject } from '../../display-projects/cancer_analysis';
import { KoreaExportEconomyProject } from '../../display-projects/korea_export_economy';
import { BreastCancerProject } from '../../display-projects/breast_cancer';
import { BinomialProject } from '../../display-projects/binomial_distribution';

import '../../Section.css';
import '../../Global.css';
import './PortfolioHomeComponent.css';

export const IntroductionPortfolio = () => {
    return (
        <div className="section-card-background section-card-background--portfolio">

            {/* Photo label (unchanged) */}
            <div className="section-photo-label">
                <p className="label-meta">Travel × Code Archive</p>

                <h4 className="label-location">Seattle, Washington </h4>
                <p className="label-subtitle">2024 · Space Needle</p>

                <div className="label-divider"></div>

                <p className="label-story">
                    From late-night study sessions at University of Washington to early mornings with coffee and tofu-soups,
                    this city has taught me to embrace curiosity, community, and constant change.
                    <br />
                    <br />
                    Seattle raised me in its own way and
                    <br />
                    I wouldn’t have it any other way.
                </p>
            </div>

            {/* Main content */}
            <h1 className="portfolio-title">Portfolio Projects</h1>

            {/* Interaction area: card AND projects */}
            <div className="portfolio-interaction-zone">

                {/* HERO CARD (door) */}
                <div
                    className="portfolio-hero-card"
                    role="button"
                    tabIndex={0}
                >
                    <div className="portfolio-hero-photo" />
                    <div className="portfolio-hero-bubble">
                        <p>
                            This is an archive of my creative direction,
                            analytical thinking, and the quiet moments
                            where ideas turn into work. Go Huskies!
                        </p>
                    </div>
                </div>

                {/* PROJECTS GRID */}
                <div className="portfolio-projects">
                    <div className="portfolio-track">
                        <BinomialProject />
                        <BreastCancerProject />
                        <KoreaExportEconomyProject />
                        <CancerAnalysisProject />
                    </div>
                </div>
            </div>
        </div>
    );
};