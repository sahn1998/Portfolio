
import React from 'react';
import { NavigationBar } from '../navigation-bar/Navbar';
import './About.css'
import '../Global.css'

const Introduction = () => {
    return (
        <section id="aboutme-intro" className="content">
            <div className="introduction data-width-12">
                <h1>
                    <span>
                        Curiosity can bring abstract ideas to life,
                    </span>
                    <span>
                        reignite the mind after failure, and motivate the hesitant.
                    </span>
                </h1>
            </div>
        </section>
    )
}

const AboutMe = () => {
    return (
        <section id="aboutme-main" className="content">
            <div className="content-wrapper">
            <div className="padding-lr-10">
                <img 
                    src={require('../../images/sunghyun_ahn.jpg')} 
                    style={{ '--data-width': '12' } as React.CSSProperties} 
                    className="responsive-image" 
                    alt=""
                />
            </div>
            </div>
            <div className="padding-lr-20 data-width-1-5">
            </div>
            <div className="aboutme padding-lr-10">
                <span className="font-about-me">
                    1. Current Seattle University graduate student in 『M.S in Data Science』
                    <br></br>
                    2. A University of Washington alumni 『B.S in Physiology』
                    <br></br>
                    3. As a South Korean international
                    <br></br>
                    4. An adventurous Seattlite
                    <br></br>
                    <br></br>
                    <span className="span-color"> I consider myself a puzzle solver, an optimist, and a global leader.</span>
                    <br></br>
                    <br></br>
                    I thrive in ambiguity, learning, developing,
                    and executing on facinating ideas.
                    I've worked for consulting organizations,
                    data science / AI, and start-up projects and
                    realized that curiosity is one of the most
                    powerful mindset at your disposal.                 
                    <br></br>
                    <br></br>
                    So, that is why I ask myself the What's, the Why's, and the How's everyday. 
                    It's like caffeine for me. The curiosity keeps the drive alive. So here you go.
                </span>
            </div>
        </section>
    )
}               

const WhatWhyHow = () => {
    return (
        <section id="aboutme-content" className="content ">
            <div className="padding-lr-10 data-width-1-5">
            </div>
            <div className="aboutme data-width-9">
                <div className="row padding-b-40">
                    <span className="data-width-0-8">
                        What:
                    </span>
                    <span>
                        I'm passionate about working on projects that move society forward while fostering diversity and inclusivity. 
                    </span>
                </div>
                <div className="row padding-b-40">
                    <span className="data-width-0-8">
                        Why:
                    </span>
                    <div>
                        <span>
                            Growing up in the U.S. as a Korean international, I witnessed discrimination and neglect because of the spread of misinformation. I learned, data gives power to shape and design the way communities interact with and within each other.
                        </span>
                        <br>
                        </br>
                        <span>
                            So for me, I view data as an opportunity. An opportunity to drive changes in diverse communities and promote inclusivity. 
                        </span>
                    </div>
                </div>
                <div className="row padding-b-40">
                    <span className="data-width-0-8">
                        How: 
                    </span>
                    <span>
                        Take a look at my projects!
                    </span>
                </div>
            </div>
            <div className="data-width-1-5">
            </div>
        </section>
    )
}

export const AboutPage = () => {
    return (
        <div id="content-holder">
            <div id="contents">
                <div className="container">
                    <div className="navbar">
                        <NavigationBar 
                            colorHome={"rgb(255, 255, 255)"}
                            colorProjects={"rgb(255, 255, 255)"}
                            colorAbout={"rgb(183, 165, 122)"}
                            colorExperience={"rgb(255, 255, 255)"}
                        />
                    </div>
                    <div className="overlay">
                        <div className="sections">
                            <Introduction />
                            <AboutMe />
                            <WhatWhyHow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
