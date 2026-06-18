import "./vienna.css";
import "../../../styles/section.css";
import "../../../styles/global.css";
import { NavigationBar } from '../../../features/navigation/navbar';

export const Vienna = () => {

    return (
        <div className="page-container page-container-main">
            <NavigationBar
                colorHome="rgb(0, 0, 0)"
                colorProjects="rgb(0, 0, 0)"
                colorAbout="rgb(0, 0, 0)"
                colorExperience="rgb(0, 0, 0)"
            />

            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="vienna">
                <div className="section-card-background section-card-background--vienna">

                    <div className="section-photo-label">
                        {/* Keep the label-meta text the same always */}
                        <p className="label-meta">TRAVEL X CODE ARCHIVE</p>
                        {/* Update the location and subtitle for each city */}
                        <h4 className="label-location">Vienna, Austria</h4>
                        {/* Update the story text for each city */}
                        <p className="label-subtitle">2019 · ST. FRANCIS OF ASSISI CHURCH</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            I went to Vienna for the music, but I left thinking just as much about my next return. The Heiliger Franz von Assisi church was the kind of building that makes you crane your neck and forget what you were doing.
                            <br></br>
                            <br></br>
                            Sitting in a concert hall later that night, I fell in love with the city all over again. The music was beautiful, but the way the sound moved through the space was what really got to me.
                            <br></br>
                            <br></br>
                            Music and architecture turned out to be the same kind of language I was learning to speak with data, just translated into sound and stone instead.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
