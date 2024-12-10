import React from 'react';
import '../Global.css';
import './Navbar.css';

export interface Props {
    colorHome?: string;
    colorProjects?: string;
    colorAbout?: string;
    colorExperience?: string;
}

export const NavigationBar = (props: Props) => {
    return (
        <header id="navbar">
            <div className="nav-content-wrapper">
                <div className="hyun-logo">
                    <a href="/">
                        <img src={require("../../images/hyun-white.png")} alt="Logo" />
                    </a>
                </div>
                <div className="links-container">
                    <div className="links-wrapper">
                        <a href="/" style={{ color: props.colorHome }}>HOME</a>
                        <a href="/interactive-projects" style={{ color: props.colorProjects }}>PROJECTS</a>
                        <a href="/aboutme" style={{ color: props.colorAbout }}>ABOUT</a>
                        <a href="/resume" style={{ color: props.colorExperience }}>RESUME</a>
                    </div>
                    <div className="link-logos">
                        <a href="https://www.linkedin.com/in/sahn1998/" target="_blank" rel="noreferrer">
                            <img src={require("../../images/linkedin.png")} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/sahn1998" target="_blank" rel="noreferrer">
                            <img src={require("../../images/github.png")} alt="GitHub" />
                        </a>
                        <a href="mailto:sahn1998@gmail.com">
                            <img src={require("../../images/email.png")} alt="Email" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
