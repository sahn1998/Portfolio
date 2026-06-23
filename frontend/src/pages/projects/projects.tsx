import { NavigationBar } from '../../features/navigation/navbar';
import { BinomialProject } from './project-cards/binomial-distribution-card';
import { BreastCancerProject } from './project-cards/breast-cancer';
import { CancerAnalysisProject } from './project-cards/cancer-analysis';
import { KoreaExportEconomyProject } from './project-cards/korea-export-economy';

import '../../styles/global.css';
import './projects.css';
import './projects.tier2.css';
import './projects.tier3.css';

export const InteractiveProjects = () => {
    return (
        <div className="page-container projects-page-container">
            <NavigationBar
                colorHome="rgb(255, 255, 255)"
                colorProjects="rgba(0, 0, 0, 1)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />

            <section className="snap-section projects-section" id="projects">
                <div className="projects-section-inner">
                    <div className="section-photo-label">
                        <p className="label-meta">TRAVEL × Project Archive</p>

                        <h4 className="label-location">Brighton, UNITED KINGDOM</h4>
                        <p className="label-subtitle">Small projects & Explorations</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            The best questions don't announce themselves. They surface quietly in a residual that won't behave, a forecast that keeps drifting, a number that doesn't match the story everyone agreed on.
                            <br /><br />
                            These projects are where I followed those questions. Health systems, economic signals, the hidden structure underneath ordinary decisions. Each one taught me something I didn't expect to learn.
                            <br /><br />
                            Pick a card. See what I found.
                        </p>
                    </div>

                    <div className="projects-layout-panel">
                        <div className="projects-section-header">
                            <p className="projects-kicker">Work · Explorations</p>
                            <h1 className="projects-title">Project Gallery</h1>
                        </div>

                        <div className="projects-scroll-column">
                            <div className="projects-grid">
                                <BinomialProject />
                                <BreastCancerProject />
                                <CancerAnalysisProject />
                                <KoreaExportEconomyProject />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
