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

const ROKExperience = () => {
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
                                Jan. 2021 - Dec. 2022
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
                                            ● Developed a startup 'CureStem' regarding a multi-layer adipose/collagen stem-cell patch 'CuraBurn' for treating severe 2nd and 3rd degree burns
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
                        <NavigationBar colorExperience={"rgb(183, 165, 122)"}/>
                    </div>
                    <div className="overlay">
                        <div className="sections">
                            <ExperienceHeader />
                            <ROKExperience />
                            <ConsultingExperience />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

