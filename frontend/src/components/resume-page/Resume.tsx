import React from 'react';
import { NavigationBar } from '../navigation-bar/Navbar';
import './Resume.css';

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
    <div className="section-header">
        <h1>{title}</h1>
    </div>
);

// Experience Section
const ExperienceSection: React.FC<ExperienceSectionProps> = ({ role, company, dates, images, details }) => (
    <section className="section">
        <div className="content-grid">
            {/* Images */}
            <div className="image-wrapper">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`${company} image ${index + 1}`} />
                ))}
            </div>
            {/* Description */}
            <div className="description-wrapper">
                <p><strong>{role}</strong></p>
                <p><em>{company}</em></p>
                <p>{dates}</p>
                <hr />
                {details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                ))}
            </div>
        </div>
    </section>
);

// Resume Page
export const Resume = () => (
    <div id="resume-page">
        <NavigationBar
            colorHome="rgb(255, 255, 255)"
            colorProjects="rgb(255, 255, 255)"
            colorAbout="rgb(255, 255, 255)"
            colorExperience="rgb(183, 165, 122)"
        />
        <div className="resume-container">
            <SectionHeader title='Experiences' />
            <ExperienceSection
                role="Regulatory & Analytics Consultant"
                company="Chemtopia Co., Ltd."
                dates="Aug. 2023 - Aug. 2024"
                images={[
                    require('../../images/chemtopia.jpg'),
                    require('../../images/sunghyun_ahn_2024.jpg')
                ]}
                details={[
                    "● Optimized regulatory document creation workflows, increasing efficiency by 100% through big data preprocessing and analysis using Python (NumPy, Pandas) and Excel (VLOOKUPs, VBA).",
                    "● Processed and analyzed EU & Korea’s PFAS contamination data in Python and SQL, developing interactive dashboards to provide insights for top petrochemical stakeholders.",
                    "● Enhanced team efficiency by over 70% through improving data collection, querying, and sorting processes for chemical substance management using Python and SQL.",
                    "● Directed data-driven compliance strategies for 50+ REACH projects across Korea, EU, Türkiye, UK, and USA.",
                    "● Managed 40+ clients from industries across Petroleum, Petrochemical, Polymer, Specialty Chemicals, and Semiconductors, delivering operational solutions to regulatory compliance."
                ]}
            />
            <ExperienceSection
                role="Operations / Language Specialist"
                company="Republic of Korea Army | 7th Corps HQ"
                dates="Oct. 2021 - April 2023"
                images={[
                    require('../../images/sung_ahn_military.jpg'),
                    require('../../images/ROKA.png'),
                    require('../../images/7th_corps.png')
                ]}
                details={[
                    "● Analyzed three years of combat training data to design and implement an advanced training module, enhancing platoon survivability in war game simulations by 30%.",
                    "● Processed and visualized MILES equipment combat training data using Excel dashboards, uncovering 5 critical areas for performance improvement.",
                    "● Collaborated with Colonels within the Operations Branch (G3) to streamline data-driven combat decision-making processes, contributing to mission-critical planning and execution."
                ]}
            />
            <ExperienceSection
                role="CEO / Team Leader"
                company="CuraStem | Challenge! K-Startup 2022"
                dates="Jan. 2022 - Dec. 2022"
                images={[
                    require('../../images/k_startup_competition.jpg'),
                    require('../../images/presentation.jpg'),
                    require('../../images/roka_top_contestant_2.jpg'),
                    require('../../images/ministry_of_defense_top_contestant.jpg'),
                    require('../../images/k_startup_competition_final.jpg'),
                ]}
                details={[
                    "● Developed a startup 'CuraStem' regarding a multi-layer adipose/collagen stem-cell patch 'CuraBurn' for treating severe 2nd and 3rd degree burns.",
                    "● Constructed a pitch-deck for angel investors as well as venture capitalists, resulting in the final placement of 11th out of 5,420 startups with over $20,000 in prize funds.",
                    "● Initialized market-entry strategies, competitor analysis, scale-up opportunity reports, a first-stage investment plan with product positioning, and a detailed 5-year roadmap.",
                    "● Analyzed constraints and identified possible challenges for a biotech startup and created a counteraction plan to subdue major pain points.",
                ]}
            />
            <ExperienceSection
                role="Project Manager"
                company="Business Impact Group"
                dates="Mar. 2019 - March 2020"
                images={[
                    require('../../images/business_impact_group_logo.png'),
                    require('../../images/sung_ahn.jpg'),
                    require('../../images/business_impact_group.jpg'),
                ]}
                details={[
                    "● Designed a 5-stage Project Management Plan (PMP), improving project completion efficiency by 20% and aligning task execution with business objectives.",
                    "● Conducted A/B testing on customer retention and homepage click-through rates (CTR), leading to a 10% revenue increase within the fiscal year.",
                    "● Developed a financial management plan by assessing budget constraints, enabling the strategic allocation of $200K for future business investments.",
                    "● Collaborated with other PMs, department executives, and cross-functional teams to meet various client needs.",
                ]}
            />
        </div>
    </div>
);
