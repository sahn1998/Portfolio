import React from 'react';
import { NavigationBar } from '../navigation-bar/Navbar';
import './About.css';

// Introduction Section
const Introduction = () => (
    <section id="aboutme-intro" className="content">
        <div className="introduction">
            <h1>
                <span>Curiosity can bring abstract ideas to life,</span>
                <span>reignite the mind after failure, and motivate the hesitant.</span>
            </h1>
        </div>
    </section>
);

// About Me Section
const AboutMe = () => (
    <section id="aboutme-main" className="content">
        <div className="image-container">
            <img
                src={require('../../images/sunghyun_ahn.jpg')}
                className="responsive-image"
                alt="Sunghyun Ahn"
            />
        </div>
        <div className="about-text">
            <p className="font-about-me">
                <strong>1.</strong> Current Seattle University graduate student in 『M.S in Data Science』 <br />
                <strong>2.</strong> A University of Washington alumni 『B.S in Physiology』 <br />
                <strong>3.</strong> South Korean International <br />
                <strong>4.</strong> Data Scientist and Analyst <br /><br />
                <span className="highlight">I consider myself a puzzle solver, an optimist, an innovator, and a global leader.</span>
                <br /><br />
                I thrive in ambiguity, learning, developing, and executing on fascinating ideas.
                Through my professional experience as an analyst, involvement in startup projects, and writing about data science and AI,
                I realized that curiosity is one of the most powerful mindsets at your disposal.
                <br /><br />
                That is why I ask myself <span style={{color: 'rgb(183, 165, 122)'}}>the What's</span>, <span style={{color: 'rgb(183, 165, 122)'}}>the Why's</span>, and <span style={{color: 'rgb(183, 165, 122)'}}>the How's</span> every day. Curiosity keeps the drive alive!
            </p>
        </div>
    </section>
);

// What, Why, How Section
const WhatWhyHow = () => (
    <section id="aboutme-content" className="content">
        <div className="section-content">
            <div className="row">
                <span className="question">What:</span>
                <span>I'm passionate about working on projects that move society forward while fostering diversity and inclusivity.</span>
            </div>
            <div className="row">
                <span className="question">Why:</span>
                <span>
                    Growing up in the U.S. as a Korean international, I witnessed discrimination and neglect because of misinformation. I learned that data gives power to shape and design the way communities interact. For me, data is an opportunity to drive change in diverse communities and promote inclusivity.
                </span>
            </div>
            <div className="row">
                <span className="question">How:</span>
                <span>Take a look at my projects!</span>
            </div>
        </div>
    </section>
);

// Main About Page Component
export const AboutPage = () => (
    <div id="about-page">
        <NavigationBar
            colorHome="rgb(255, 255, 255)"
            colorProjects="rgb(255, 255, 255)"
            colorAbout="rgb(183, 165, 122)"
            colorExperience="rgb(255, 255, 255)"
        />
        <div className="page-content">
            <Introduction />
            <AboutMe />
            <WhatWhyHow />
        </div>
    </div>
);
