import React from 'react';
import '../Global.css'
import './Navbar.css'

export interface Props {
    colorHome?: string;
    colorAbout?: string;
    colorExperience?: string;
}


export const NavigationBar = (props: Props) => {
    return (
        <header id="navbar">
            <div className="content">
                <div className="nav-content-wrapper">
                    <div className="hyun-logo">
                        <a href='/'>
                            <img src={require("../../images/hyun-white.png")} alt=""/>
                        </a>
                    </div>
                    <div className="links-wrapper">
                        <div className="links">
                            <a href={'/'} style={{
                                color: props.colorHome
                            }}>
                                HOME
                            </a>
                        </div>
                        <div className="links">
                            <a href={'/aboutme'} style={{
                                color: props.colorAbout
                            }}>
                                ABOUT
                            </a>
                        </div>
                        <div className="links">
                            <a href={'/resume' } style={{
                                color: props.colorExperience
                            }}>
                                RESUME
                            </a>
                        </div>
                        <div className="link-logos">
                            <div className="link-logo">
                                <a href='https://www.linkedin.com/in/sahn1998/' target="_blank" rel="noreferrer">
                                    <img src={require("../../images/linkedin.png")} alt=""/>
                                </a>
                            </div>
                            <div className="link-logo">
                                <a href='https://github.com/sahn1998' target="_blank" rel="noreferrer">
                                    <img src={require("../../images/github.png")} alt=""/>
                                </a>
                            </div>
                            <div className="link-logo">
                                <a href='mailto:sahn1998@gmail.com'>
                                    <img src={require("../../images/email.png")} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
