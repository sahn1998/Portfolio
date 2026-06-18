import React from 'react';
import { NavigationBar } from '../../features/navigation/navbar';
import './resume.css';
import '../../styles/global.css';

// Props Type Definitions
interface SectionHeaderProps {
    title: string;
}

interface ExperienceSectionProps {
    role: string;
    company: string;
    dates: string;
    images: string[]; // Array of image paths
    details: string[]; // Array of detail strings
}

// Header Component
const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
    <div className="resume-section-header">
        <p className="resume-kicker">Experience · Journey</p>
        <h1 className="resume-title">{title}</h1>
    </div>
);

// Experience Section
const ExperienceSection: React.FC<ExperienceSectionProps> = ({
    role,
    company,
    dates,
    images,
    details
}) => (
    <section className="resume-experience">
        <div className="resume-experience-header">
            <div className="resume-experience-meta">
                <p className="resume-role">{role}</p>
                <p className="resume-company">{company}</p>
                <p className="resume-dates">{dates}</p>
            </div>
            {images && images.length > 0 && (
                <div className="resume-experience-images">
                    {images.slice(0, 2).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${company} image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>

        <div className="resume-experience-body">
            {details.map((detail, index) => (
                <p key={index} className="resume-detail">
                    {detail}
                </p>
            ))}
        </div>
    </section>
);

// Resume Page
export const Resume: React.FC = () => (
    <div className="page-container resume-page-container">
        <NavigationBar
            colorHome="rgb(255, 255, 255)"
            colorProjects="rgb(255, 255, 255)"
            colorAbout="rgb(255, 255, 255)"
            colorExperience="rgba(0, 0, 0, 1)"
        />

        {/* Single full-screen hero-style section */}
        <section className="snap-section resume-section" id="resume">
            <div className="resume-section-inner">
                {/* LEFT-SIDE FIXED PHOTO LABEL (same as About) */}
                <div className="section-photo-label">
                    <p className="label-meta">Resume × Career Archive</p>

                    <h4 className="label-location">Seattle, Washington</h4>
                    <p className="label-subtitle">2015 — Present · The Journey in Data</p>

                    <div className="label-divider"></div>

                    <p className="label-story">
                        My path across science, data, and global perspectives began long before I knew the
                        destination.  
                        <br /><br />
                        From Seoul to Seattle, every step — education, military service, analytics work, startups,
                        and research — shaped how I solve problems and create value.
                        <br /><br />
                        This resume isn’t just a timeline — it’s a map of experiences that refined how I think,
                        learn, and build.
                    </p>
                </div>


                {/* Right-side overlay column (absolute-ish, anchored right) */}
                <div className="resume-overlay-column">
                    <SectionHeader title="Experiences" />

                    <div className="resume-scroll-column">
                        <ExperienceSection
                            role="Graduate Research Assistant"
                            company="Seattle University"
                            dates="Jan. 2025 - Present"
                            images={[]}
                            details={[
                                "● Developed an end-to-end machine learning pipeline for asthma health risk prediction, integrating clinical and environmental features in collaboration with Soonchunhyang University Medical Center.",
                                "● Implemented spatial transformation techniques on tabular patient data to enable transfer learning in computer vision frameworks.",
                                "● Designed and optimized model architecture for ResNet50 and MobileNetV2, improving recall-score by 20%.",
                                "● Leveraged TensorFlow and PyTorch across Jetstream2 and AWS EC2 cloud platforms for scalable training and evaluation."
                            ]}
                        />

                        <ExperienceSection
                            role="Regulatory & Analytics Consultant"
                            company="Chemtopia Co., Ltd."
                            dates="Aug. 2023 - Aug. 2024"
                            images={[
                                require('../../images/pages/resume/chemtopia.jpg'),
                                require('../../images/pages/resume/sunghyun-ahn-2024.jpg')
                            ]}
                            details={[
                                "● Processed 250K+ chemical records using SQL, Python, and Excel, flagging PFAS compounds and improving regulatory compliance accuracy by 15%.",
                                "● Created 15+ dashboard-style presentations across 10 clients and 50+ projects, cutting manual reporting time by 40% through reusable templates.",
                                "● Detected 30+ data integrity issues in chemical inventory logs, enabling proactive corrections that reduced $100K in chemical export expenditures.",
                                "● Reduced cross-team chemical inventory & regulatory data handoff delays by 2x through Excel automation.",
                                "● Directed data-driven compliance strategies for 50+ REACH projects across Korea, EU, Türkiye, UK, and USA.",
                                "● Managed 40+ clients across petroleum, petrochemical, polymer, specialty chemicals, and semiconductor industries."
                            ]}
                        />

                        <ExperienceSection
                            role="Operations Data & Language Specialist (SGT)"
                            company="Republic of Korea Army | 7th Corps HQ - G3"
                            dates="Oct. 2021 - Apr. 2023"
                            images={[
                                require('../../images/pages/resume/sung-ahn-military.jpg'),
                                require('../../images/pages/resume/roka.png')
                            ]}
                            details={[
                                "● Analyzed 100K+ datapoints from training simulations and improved strategic readiness metrics by 30% through actionable insights.",
                                "● Developed Excel dashboard suite used by 3 brigades, reducing weekly report prep time from 6 to 2 hours.",
                                "● Supported 10+ U.S. joint missions as a bilingual analyst, enhancing data flow and tactical alignment."
                            ]}
                        />

                        <ExperienceSection
                            role="CEO / Team Leader"
                            company="CuraStem | Challenge! K-Startup 2022"
                            dates="Jan. 2022 - Dec. 2022"
                            images={[
                                require('../../images/pages/resume/k-startup-competition.jpg'),
                                require('../../images/pages/resume/presentation.jpg')
                            ]}
                            details={[
                                "● Co-founded 'CuraStem', a startup focused on a multi-layer adipose/collagen stem-cell patch 'CuraBurn' for treating severe 2nd and 3rd degree burns.",
                                "● Constructed investor-facing pitch decks that led to a final placement of 11th out of 5,420 startups, earning over $20,000 in prize funds.",
                                "● Built market-entry strategies, competitor analysis, and a five-year roadmap, including first-stage investment and product positioning plans.",
                                "● Identified major constraints for a biotech startup and designed countermeasure plans to address operational and regulatory risks."
                            ]}
                        />

                        <ExperienceSection
                            role="Project Manager"
                            company="Business Impact Group"
                            dates="Mar. 2019 - Mar. 2020"
                            images={[
                                require('../../images/pages/resume/business-impact-group-logo.png')
                            ]}
                            details={[
                                "● Designed a 5-stage Project Management Plan (PMP), improving project completion efficiency by 20%.",
                                "● Led 3 client projects focused on operational analysis, improving client ROI by an estimated 18% based on post-project KPIs.",
                                "● Designed and ran A/B tests on website design impacting 5K+ users, identifying features that improved engagement by 5%.",
                                "● Streamlined sprint planning across a 5-member team, reducing blockers and boosting task completion rate by 30%."
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
);
