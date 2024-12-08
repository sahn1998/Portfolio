
import React from 'react';
import { NavigationBar } from './navigation-bar/Navbar';
import './Home.css'
import './Global.css'
import { Portfolio, Portfolio2 } from './main-page/Portfolio';

export const Introduction = () => {
    return (
        <section id="intro">
            <div className="main-page-intro data-width-12">
                <h1>
                    Sunghyun Ahn
                </h1>
                <div className="visiting">
                    <div className="column-cen">
                        <span>
                        Hi! Thanks for visiting.
                        </span>
                    </div>
                    <div className="column-cen">
                        <span>
                        This is a collection of my personal projects. I hope you enjoy!
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Homepage = () => {

    return (
        <div className="main-content"> 
            <div id="content-holder">
                <div className="container">
                    <div className=" navbar">
                        <NavigationBar 
                            colorHome={"rgb(183, 165, 122)"}
                            colorProjects={"rgb(255, 255, 255)"}
                            colorAbout={"rgb(255, 255, 255)"}
                            colorExperience={"rgb(255, 255, 255)"}
                        />
                    </div>
                    <div className="overlay">
                        <div className="sections">
                            <Introduction />
                            <Portfolio />
                        </div>
                        <div className="sections-2">
                            <Portfolio2 />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );

}