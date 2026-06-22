import React from 'react';
import { NavigationBar } from '../../features/navigation/navbar';
import './resume.css';
import '../../styles/global.css';

import chemtopiaImage from '../../images/pages/resume/chemtopia.jpg';
import sunghyunAhn2024Image from '../../images/pages/resume/sunghyun-ahn-2024.jpg';
import sungAhnMilitaryImage from '../../images/pages/resume/sung-ahn-military.jpg';
import teaSung from '../../images/pages/resume/tea-sung.jpg';
import teaLogo from '../../images/pages/resume/tea-logo.jpg';
import seattleUniversityImage from '../../images/pages/resume/seattle-university.png';
import rokaImage from '../../images/pages/resume/roka.png';
import businessImpactGroupLogo from '../../images/pages/resume/business-impact-group-logo.png';

interface ExperienceData {
    role: string;
    company: string;
    location: string;
    dates: string;
    images: string[];
    details: string[];
}

const EXPERIENCES: ExperienceData[] = [
    {
        role: 'Data Scientist',
        company: 'The Energy Authority',
        location: 'Bellevue, Washington',
        dates: 'Sep. 2025 — Present',
        images: [teaLogo, teaSung],
        details: [
            'Optimization modeling for Operational Storage (BESS) and Colocated/Hybrid Resource Energy Market Bidding (CAISO/SPP) across utility client portfolios.',
            'Development of Stora - solar and storage optimization application for operational energy market bidding. ',
            'Risk report analysis & dashboarding'
        ]
    },
    {
        role: 'Graduate Researcher (ML for Healthcare)',
        company: 'Seattle University',
        location: 'Seattle, Washington',
        dates: 'Jan. 2025 — Present',
        images: [seattleUniversityImage],
        details: [
            'Developed biomedical risk prediction models using transfer learning across heterogeneous tabular datasets.',
            'Utilized TensorFlow & Cloud platforms (Jetstream2, AWS EC2) for scalable deep learning training.',
            'Designed and optimized model architecture for ResNet50 and MobileNetV2, improving recall score by 20%.',
            'Conducted advanced feature engineering to improve model generalization and performance.'
        ]
    },
    {
        role: 'Regulatory Analytics Consultant',
        company: 'Chemtopia Co., Ltd.',
        location: 'Seoul, South Korea',
        dates: 'Aug. 2023 — Aug. 2024',
        images: [chemtopiaImage, sunghyunAhn2024Image],
        details: [
            'Processed 250K+ chemical records using SQL, Python, and Excel, flagging PFAS compounds and improving regulatory compliance accuracy by 15%.',
            'Created 15+ dashboard-style presentations across 10 clients and 50+ projects, cutting manual reporting time by 40% through reusable templates.',
            'Detected 30+ data integrity issues in chemical inventory logs, enabling proactive corrections that reduced $100K in chemical export expenditures.',
            'Directed data-driven compliance strategies for 50+ REACH projects across Korea, EU, Türkiye, UK, and USA.'
        ]
    },
    {
        role: 'Operations Data & Language Specialist (SGT)',
        company: 'Republic of Korea Army · 7th Corps HQ — G3',
        location: 'Seoul, South Korea',
        dates: 'Oct. 2021 — Apr. 2023',
        images: [sungAhnMilitaryImage, rokaImage],
        details: [
            'Analyzed 100K+ datapoints from training simulations and improved strategic readiness metrics by 30% through actionable insights.',
            'Developed an Excel dashboard suite used by 3 brigades, reducing weekly report prep time from 6 to 2 hours.',
            'Supported 10+ U.S. & ROKA joint missions as a bilingual analyst, enhancing data flow and tactical alignment.'
        ]
    },
    {
        role: 'Project Manager',
        company: 'Business Impact Group',
        location: 'Seattle, Washington',
        dates: 'Mar. 2019 — Mar. 2020',
        images: [businessImpactGroupLogo],
        details: [
            'Designed a 5-stage Project Management Plan (PMP), improving project completion efficiency by 20%.',
            'Led 3 client projects focused on operational analysis, improving client ROI by an estimated 18% based on post-project KPIs.',
            'Designed and ran A/B tests on website design impacting 5K+ users, identifying features that improved engagement by 5%.'
        ]
    }
];

const ExperienceItem: React.FC<{ experience: ExperienceData; isLast: boolean }> = ({ experience, isLast }) => (
    <article className={`resume-timeline-item${isLast ? ' resume-timeline-item--last' : ''}`}>
        <div className="resume-timeline-rail">
            <span className="resume-timeline-dot" />
        </div>

        <div className="resume-timeline-card">
            <div className="resume-card-top">
                <div className="resume-card-heading">
                    <h3 className="resume-role">{experience.role}</h3>
                    <p className="resume-company">{experience.company}</p>
                </div>

                {experience.images.length > 0 && (
                    <div className="resume-experience-images">
                        {experience.images.slice(0, 2).map((image, index) => (
                            <img key={index} src={image} alt={`${experience.company} ${index + 1}`} />
                        ))}
                    </div>
                )}
            </div>

            <p className="resume-card-meta">
                <span className="resume-dates">{experience.dates}</span>
                <span className="resume-meta-sep">·</span>
                <span className="resume-location">{experience.location}</span>
            </p>

            <ul className="resume-detail-list">
                {experience.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    </article>
);

export const Resume: React.FC = () => (
    <div className="page-container resume-page-container">
        <NavigationBar
            colorHome="rgb(255, 255, 255)"
            colorProjects="rgb(255, 255, 255)"
            colorAbout="rgb(255, 255, 255)"
            colorExperience="rgba(0, 0, 0, 1)"
        />

        <section className="snap-section resume-section" id="resume">
            <div className="resume-section-inner">
                <div className="section-photo-label">
                    <p className="label-meta">TRAVEL × CAREER ARCHIVE</p>

                    <h4 className="label-location">Budapest, Hungary</h4>
                    <p className="label-subtitle">My Professional Journey</p>

                    <div className="label-divider"></div>

                    <p className="label-story">
                        My path across science, data, and global perspectives began long before I knew the destination.
                        <br /><br />
                        From my birthplace, Seoul, to wherever my journey has taken me, every step has shaped how I solve problems and create value. My education, military service, analytics work, startups, and research have been the landmarks that refined my thinking and built my skills.
                        <br /><br />
                        This resume isn't just a timeline. It's a map of experiences that refined how I think, learn, and build.
                    </p>
                </div>

                <div className="resume-overlay-column">
                    <div className="resume-section-header">
                        <p className="resume-kicker">Experience · Journey</p>
                        <h1 className="resume-title">Career Timeline</h1>
                    </div>

                    <div className="resume-scroll-column">
                        <div className="resume-timeline">
                            {EXPERIENCES.map((experience, index) => (
                                <ExperienceItem
                                    key={`${experience.company}-${index}`}
                                    experience={experience}
                                    isLast={index === EXPERIENCES.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
