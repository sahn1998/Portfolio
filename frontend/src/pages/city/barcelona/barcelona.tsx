import "./barcelona.css";
import "../../../styles/section.css";
import "../../../styles/global.css";
import { NavigationBar } from '../../../features/navigation/navbar';

export const Barcelona = () => {

    return (
        <div className="page-container page-container-main">
            <NavigationBar
                colorHome="rgb(0, 0, 0)"
                colorProjects="rgb(0, 0, 0)"
                colorAbout="rgb(0, 0, 0)"
                colorExperience="rgb(0, 0, 0)"
            />

            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="barcelona">
                <div className="section-card-background section-card-background--barcelona">

                    <div className="section-photo-label">
                        {/* Keep the label-meta text the same always */}
                        <p className="label-meta">TRAVEL X CODE ARCHIVE</p>
                        {/* Update the location and subtitle for each city */}
                        <h4 className="label-location">Barcelona, Spain</h4>
                        {/* Update the story text for each city */}
                        <p className="label-subtitle">2016 · SAGRADA FAMÍLIA</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            Sagrada Família was the first building that ever made me stop and think about engineering as art.
                            <br></br>
                            <br></br>
                            I spent the rest of the trip eating my way through the city, wandering with no real plan, just letting the streets decide where I went next.
                            <br></br>
                            <br></br>
                            Looking back, it was an early lesson I didn't recognize at the time. The most elegant systems are the ones where the structure underneath disappears, you just feel that something works.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
