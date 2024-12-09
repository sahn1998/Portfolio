
import React from 'react';
import { NavigationBar } from '../navigation-bar/Navbar';

import '../Home.css'
import '../Global.css'
import { BinomialProject } from '../main-page/projects/binomial_distribution';

export const Introduction = () => {
    return (
        <section id="intro">
            <div className="main-page-intro data-width-12">
                <h1>
                    Interactive (Educational) Projects
                </h1>
                <div className="visiting">
                    <div className="column-cen">
                        <span>
                        Click on the image to view the project!
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const InteractiveProjects = () => {

    return (
        <div className="main-content"> 
            <div id="content-holder">
                <div className="container">
                    <div className=" navbar">
                        <NavigationBar 
                            colorHome={"rgb(255, 255, 255)"}
                            colorProjects={"rgb(183, 165, 122)"}
                            colorAbout={"rgb(255, 255, 255)"}
                            colorExperience={"rgb(255, 255, 255)"}
                        />
                    </div>
                    <div className="overlay">
                        <div className="sections">
                        <div className="links">
                            <Introduction />
                            <section id="portfolio">
                                <div className="content">
                                    <div className="project-container">
                                        <BinomialProject />
                                    </div>
                                </div>
                            </section>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );

}