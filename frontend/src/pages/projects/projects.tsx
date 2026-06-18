import { NavigationBar } from '../../features/navigation/navbar';
import { BinomialProject } from './project-cards/binomial-distribution-card';
import { BreastCancerProject } from './project-cards/breast-cancer';
import { CancerAnalysisProject } from './project-cards/cancer-analysis';
import { KoreaExportEconomyProject } from './project-cards/korea-export-economy';

import '../../styles/global.css';
import './projects.css';

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
                        <p className="label-meta">Projects × Project Archive</p>

                        <h4 className="label-location">Brighton, England</h4>
                        <p className="label-subtitle">2016 — Present · Building While Learning</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            Every project here started as a question: How a distribution behaves, what a dataset is hiding, why a model gets something wrong.
                            <br /><br />
                            Some are interactive builds, others are write-ups from deeper dives into health, economics, and data analysis.
                            <br /><br />
                            Pick a card to explore the work.
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
