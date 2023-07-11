
import React from 'react';
import { NavigationBar } from './navigation-bar/Navbar';
import './Home.css'
import './Global.css'
import { Portfolio } from './portfolio/Portfolio';

export const Introduction = () => {
    return (
        <section id="intro">
            <div className="main-page-intro data-width-12">
                <h1>
                    Sung Hyun Ahn
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
    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
    ];

    return (
        <div className="main-content"> 
            <div id="content-holder">
                <div className="container">
                    <div className=" navbar">
                        <NavigationBar colorHome={"rgb(183, 165, 122)"}/>
                    </div>
                    <div className="overlay">
                        <div className="sections">
                            <Introduction />
                            <Portfolio />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );

}