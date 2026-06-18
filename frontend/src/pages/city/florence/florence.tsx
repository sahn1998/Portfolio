import "./florence.css";
import "../../../styles/section.css";
import "../../../styles/global.css";
import { NavigationBar } from '../../../features/navigation/navbar';

export const Florence = () => {

    return (
        <div className="page-container page-container-main">
            <NavigationBar
                colorHome="rgb(255, 255, 255)"
                colorProjects="rgb(255, 255, 255)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />

            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="florence">
                <div className="section-card-background section-card-background--florence">

                    <div className="section-photo-label">
                        {/* Keep the label-meta text the same always */}
                        <p className="label-meta">TRAVEL X CODE ARCHIVE</p>
                        {/* Update the location and subtitle for each city */}
                        <h4 className="label-location">Florence, Italy</h4>
                        {/* Update the story text for each city */}
                        <p className="label-subtitle">2014 · SANTA MARIA DEL FIORE</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            Florence was one of the first cities I ever fell in love with, long before I knew what I wanted to do with my life. Santa Maria del Fiore and the Arno river moved at a pace that felt almost foreign to me at the time.
                            <br></br>
                            <br></br>
                            The food, the drinks, the long unhurried dinners, none of it was about getting anywhere faster. It was about being exactly where you were.
                            <br></br>
                            <br></br>
                            I didn't have the language for it then, but Florence taught me patience, the same patience I'd later need to sit with a problem instead of rushing past it.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
