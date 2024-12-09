import React from 'react';
import { NavigationBar } from '../navigation-bar/Navbar';
import '../Global.css'
import './Resume.css'

const ExperienceHeader = () => {
    return (
        <section id="experience-header" className="content">
            <div className="content-wrapper">
                <div className="experience padding-lr-10">
                    <h1>
                        <span>
                            Experience
                        </span>
                    </h1>
                </div>
            </div>   
        </section>
    )
}


const ChemtopiaExperience = () => {
    return (
        <section id="section5" className="content section5">
            <div className="content-wrapper">
                <div className="experience-wrapper">
                    <div className="description">
                        <p className="description-paragraph padding-lr-10 data-width-3">
                            <span className="description-span">
                                Regulatory & Analytics Consultant
                            </span>
                        </p>
                        <p className="description-paragraph padding-lr-10 data-width-4">
                            <span className="description-span">
                                Chemtopia Co., Ltd.
                            </span>
                        </p>
                        <p className="description-paragraph padding-lr-10 data-width-4">
                            <span className="description-span">
                                Aug. 2023 - Aug. 2024
                            </span>
                        </p>
                    </div>
                    <div className="experience-two-examples">
                        <div className="content-wrapper">
                            <div className="experience-content-wrapper">
                                <div className="image-content-wrapper">
                                    <div className="image-wrapper">
                                        <div className="image-row">
                                            <div className="image"> 
                                                <a href="https://chemtopia.net/en" target="_blank" >
                                                    <img src={require('../../images/chemtopia.jpg')}/>
                                                </a>
                                            </div>
                                            <div className="image-special">  
                                                <img src={require('../../images/sunghyun_ahn_2024.jpg')}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-description-wrapper">
                                        <div className="image-description">
                                            <span>
                                                ● Optimized regulatory document creation workows, increasing efciency by 100% through big data preprocessing
                                                and analysis using Python (NumPy, Pandas) and Excel (VLOOKUPs, VBA).
                                            </span>
                                            <span>
                                                ● Processed and analyzed EU & Korea’s PFAS contamination data in Python and SQL,
                                                developing interactive dashboards to provide insights for top petrochemical stakeholders.
                                            </span>
                                            <span>
                                                ● Enhanced team efciency by over 70% through improving data collection, querying, and sorting
                                                processes for chemical substance management using python and SQL.
                                            </span>
                                            <span>
                                                ● Directed data-driven compliance strategies for 50+ REACH projects across Korea, EU, Türkiye, UK, and USA.
                                            </span>
                                            <span>
                                                ● Managed 40+ clients from industries across Petroleum, Petrochemical, Polymer, Specialty Chemicals, and Semiconductors, delivering operational solutions to regulatory compliance
                                            </span>
                                        </div>
                                    </div>
                                    <div className="spacer">
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ROKAExperience = () => {
    return (
        <section id="rok-experience" className="content section2">
            <div className="content-wrapper">
                <div className="experience-wrapper">
                    <div className="description">
                        <p className="description-paragraph padding-lr-10 data-width-3">
                            <span className="description-span">
                                Operations / Language Specialist 
                            </span>
                        </p>
                        <p className="description-paragraph padding-lr-10 data-width-4">
                            <span className="description-span">
                                Republic of Korea Army | 7th Corps HQ
                            </span>
                        </p>
                        <p className="description-paragraph padding-lr-10 data-width-4">
                            <span className="description-span">
                                Oct. 2021 - April 2023
                            </span>
                        </p>
                    </div>
                    <div className="experience-one-examples">
                        <div className="content-wrapper">
                            <div className="experience-content-wrapper">
                                <div className="image-content-wrapper">
                                    <div className="image-wrapper">
                                        <div className="image-row">
                                            <div className="image-special"> 
                                                <img src={require('../../images/sung_ahn_military.jpg')}/>
                                            </div>
                                            <div className="image-special">  
                                                <img src={require('../../images/ROKA.png')}/>
                                            </div>
                                            <div className="image">
                                                <img src={require('../../images/7th_corps.png')}/>
                                            </div>
                                    </div>
                                    <div className="image-description-wrapper">
                                        <div className="image-description">
                                            <br></br>
                                            <br></br>
                                            <span>
                                            ● Analyzed three years of combat training data to design and implement an advanced training module,
                                            enhancing platoon survivability in war game simulations by 30%.
                                            </span>
                                            <span>
                                            ● Processed and visualized MILES equipment combat training data using Excel dashboards,
                                            uncovering 5 critical areas for performance improvement
                                            </span>
                                            <span>
                                            ● Collaborated with Colonels within the Operations Branch (G3) to streamline data-driven combat decision-making processes,
                                            contributing to mission-critical planning and execution.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer">
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

const CuraStemExperience = () => {
    return (
        <section id="rok-experience" className="content section2">
            <div className="content-wrapper">
                <div className="experience-wrapper">
                    <div className="description">
                        <p className="description-paragraph padding-lr-10 data-width-3">
                            <span className="description-span">
                                CEO / Team Leader
                            </span>
                        </p>
                        <p className="description-paragraph padding-lr-10 data-width-4">
                            <span className="description-span">
                                CuraStem | Challenge! K-Startup 2022
                            </span>
                        </p>
                        <p className="description-paragraph padding-lr-10 data-width-4">
                            <span className="description-span">
                                Jan. 2022 - Dec. 2022
                            </span>
                        </p>
                    </div>
                    <div className="experience-one-examples">
                        <div className="content-wrapper">
                            <div className="experience-content-wrapper">
                                <div className="image-content-wrapper">
                                    <div className="image-wrapper">
                                        <div className="image-row">
                                            <div className="image">
                                                <img src={require('../../images/k_startup_competition.jpg')}/>
                                            </div>
                                            <div className="image">
                                                <img src={require('../../images/presentation.jpg')}/>
                                            </div>
                                            <div className="image">
                                                <img src={require('../../images/roka_top_contestant_2.jpg')}/>
                                            </div>
                                            <div className="image">
                                                <img src={require('../../images/ministry_of_defense_top_contestant.jpg')}/>
                                            </div>
                                        </div>
                                        <div className="image-center padding-tb-15">
                                            <img src={require('../../images/k_startup_competition_final.jpg')}/>
                                        </div>
                                    </div>
                                    <div className="image-description-wrapper">
                                        <div className="image-description">
                                            <span>
                                            ● Developed a startup 'CuraStem' regarding a multi-layer adipose/collagen stem-cell patch 'CuraBurn' for treating severe 2nd and 3rd degree burns
                                            </span>
                                            <span>
    ● Constructed a pitch-deck for angel investors as well as venture
    capitalists resulting in the final placement of 11th out of 5,420 startups with over $20,000 in prize funds
                                            </span>
                                            <span>
                                            ● Initialized market-entry strategies, competitor analysis and scale-up opportunity reports, first-stage
    investment plan with product positioning, and a detailed 5-year roadmap.
                                            </span>
                                            <span>
                                            ● Analyzed constraints and identified possible challenges for a biotech startup and created a counter action plan
    to subdue major pain points
                                            </span>
                                            <br>
                                            </br>
                                            <br>
                                            </br>
                                            <span>
                                                "Challenge! K-Startup 2022" is Republic of Korea's largest startup competition, operated through collaboration between 'the Ministry of SMEs and Startups' and 11 other government agencies. A total of 5,420 developing start-ups participated in 10 preliminary leagues, and 210 teams partk took in the integrated preliminaries and 30 teams advanced to the integrated finals. 
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer">
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ConsultingExperience = () => {
    return (
        <section id="section5" className="content section5">
            <div className="content-wrapper">
                <div className="experience-wrapper">
                    <div className="description">
                        <p className="description-paragraph padding-lr-10 data-width-3">
                            <span className="description-span">
                                Project Manager & Consultant
                            </span>
                        </p>
                        <p className="description-paragraph padding-lr-10 data-width-4">
                            <span className="description-span">
                                Business Impact Group
                            </span>
                        </p>
                        <p className="description-paragraph padding-lr-10 data-width-4">
                            <span className="description-span">
                                Jan. 2019 - March 2020
                            </span>
                        </p>
                    </div>
                    <div className="experience-two-examples">
                        <div className="content-wrapper">
                            <div className="experience-content-wrapper">
                                <div className="image-content-wrapper">
                                    <div className="image-wrapper">
                                        <div className="image-row">
                                            <div className="image">  
                                                <img src={require('../../images/business_impact_group_logo.png')}/>
                                            </div>
                                            <div className="image-special">  
                                                <img src={require('../../images/sung_ahn.jpg')}/>
                                            </div>
                                            <div className="image-special">
                                                <img src={require('../../images/business_impact_group.jpg')}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-description-wrapper">
                                        <div className="image-description">
                                            <span>
                                                ● Developed and fostered steady relationships with clients to identify and remove roadblocks in obtaining crucial
resources regarding client’s pain points
                                            </span>
                                            <span>
                                                ● Designed a five stage PMP to ensure initiation and execution of necessary tasks are appropriately aligned
                                            </span>
                                            <span>
                                                ● Conducted Heptalysis and SWOT to analyze two areas of expansion (finance, employee management) which
assisted in a crucial decision-making process of future investment
                                            </span>
                                            <span>
                                                ● Collaborated with other PMs, department executives, and cross-functional teams to meet various needs established
by the client
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Resume = () => {
    return (
        <div id="content-holder">
            <div id="contents">
                <div className="container">
                    <div className="navbar">
                        <NavigationBar 
                            colorHome={"rgb(255, 255, 255)"}
                            colorProjects={"rgb(255, 255, 255)"}
                            colorAbout={"rgb(255, 255, 255)"}
                            colorExperience={"rgb(183, 165, 122)"}
                        />
                    </div>
                    <div className="overlay">
                        <div className="sections">
                            <ExperienceHeader />
                            <ChemtopiaExperience />
                            <ROKAExperience />
                            <CuraStemExperience />
                            <ConsultingExperience />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

