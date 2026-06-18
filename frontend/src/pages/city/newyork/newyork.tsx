import "./newyork.css";
import "../../../styles/section.css";
import "../../../styles/global.css";
import { NavigationBar } from '../../../features/navigation/navbar';

export const NewYork = () => {

    return (
        <div className="page-container page-container-main">
            <NavigationBar
                colorHome="rgb(0, 0, 0)"
                colorProjects="rgb(0, 0, 0)"
                colorAbout="rgb(0, 0, 0)"
                colorExperience="rgb(0, 0, 0)"
            />

            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="newyork">
                <div className="section-card-background section-card-background--newyork">

                    <div className="section-photo-label">
                        {/* Keep the label-meta text the same always */}
                        <p className="label-meta">TRAVEL X CODE ARCHIVE</p>
                        {/* Update the location and subtitle for each city */}
                        <h4 className="label-location">New York, USA</h4>
                        {/* Update the story text for each city */}
                        <p className="label-subtitle">2018 · MANHATTAN SKYLINE</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            New York hit me the way it hits everyone the first time, all scale and noise and ambition stacked on top of itself for blocks.
                            <br></br>
                            <br></br>
                            I remember standing somewhere with the skyline in front of me and just thinking: I want to build something that matters on a stage like this someday.
                            <br></br>
                            <br></br>
                            I didn't know yet that the path there would run through years of work, a lot of learning, and a lot of unglamorous spreadsheets. But that skyline planted something, a sense that I was allowed to want more than what was comfortable.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
