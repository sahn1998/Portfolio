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
                role="Graduate Research Assistant"
                company="Seattle University."
                dates="Jan. 2025 - Present"
                images={[]}
                details={[
                    "● Developed an end-to-end machine learning pipeline for asthma health risk prediction, integrating clinical and environmental features in collaboration with Soonchunhyang University Medical Center.",
                    "● Implemented spatial transformation techniques on tabular patient data to enable transfer learning in computer vision frameworks.",
                    "● Designed and optimized model architecture for ResNet50 and MobileNetV2, improving recall-score by 20%.",
                    "● Leveraged TensorFlow and PyTorch across Jetstream2 and AWS EC2 cloud platforms for scalable training and evaluation",
                ]}
            />
            <ExperienceSection
                role="Regulatory & Analytics Consultant"
                company="Chemtopia Co., Ltd."
                dates="Aug. 2023 - Aug. 2024"
                images={[
                    require('../../images/chemtopia.jpg'),
                    require('../../images/sunghyun_ahn_2024.jpg')
                ]}
                details={[
                    "● Processed 250K+ chemical records using SQL, Python and Excel, flagging PFAS compounds and improving regulatory compliance accuracy by 15%.",
                    "● Developed +15 dashboards presentations across 10 clients in +50 projects to provide chemical regulatory insights and created reusable templates that cut manual reporting time by 40%.",
                    "● Detected 30+ data integrity issues in chemical inventory logs, enabling proactive corrections that reduced $100K inchemical export expenditures.",
                    "● Reduced cross-team (cross-functional) chemical inventory & regulatory data handoff delays by 2x through Excel automation.",
                    "● Directed data-driven compliance strategies for 50+ REACH projects across Korea, EU, Türkiye, UK, and USA.",
                    "● Managed 40+ clients from industries across Petroleum, Petrochemical, Polymer, Specialty Chemicals, and Semiconductors, delivering operational solutions to regulatory compliance."
                ]}
            />
            <ExperienceSection
                role="Operations Data & Language Specialist (SGT)"
                company="Republic of Korea Army | 7th Corps HQ - G3"
                dates="Oct. 2021 - April 2023"
                images={[
                    require('../../images/sung_ahn_military.jpg'),
                    require('../../images/ROKA.png'),
                    require('../../images/7th_corps.png')
                ]}
                details={[
                    "● Analyzed 100K+ datapoints from training simulations and improved strategic readiness metrics by 30% through actionable insights",
                    "● Developed Excel dashboard suite used by 3 brigades, reducing weekly report prep time from 6 to 2 hours.",
                    "● Supported 10+ U.S. joint missions as a bilingual analyst, enhancing data flow and tactical alignment."
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
                    "● Led 3 client projects with a focus on operational analysis, increasing client ROI by an estimated 18% based on post-project KPIs.",
                    "● Designed and ran A/B tests on website design impacting 5K+ users, identifying optimal features that improved engagement by 5%",
                    "● Streamlined sprint planning across 5-member team, reducing blockers and boosting task completion rate by 30%.",
                ]}
            />
        </div>
    </div>
);
