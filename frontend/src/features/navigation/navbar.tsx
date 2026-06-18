import '../../styles/global.css';
import './navbar.css';

import blacklogo from '../../images/navbar/hyun-black.png';
import whitelogo from '../../images/navbar/hyun-white.png';
import linkedinLogo from '../../images/linkedin.png';
import githubLogo from '../../images/github.png';
import emailLogo from '../../images/email.png';

export interface Props {
    colorHome?: string;
    colorProjects?: string;
    colorAbout?: string;
    colorExperience?: string;
    whiteLogo?: boolean;
}



export const NavigationBar = (props: Props) => {
    return (
        <header id="navbar">
            <div className="nav-content-wrapper">
                <div className="hyun-logo">
                    <a href="/">
                        <img src={props.whiteLogo ? whitelogo : blacklogo} alt="Logo" />
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
                            <img src={linkedinLogo} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/sahn1998" target="_blank" rel="noreferrer">
                            <img src={githubLogo} alt="GitHub" />
                        </a>
                        <a href="mailto:sahn1998@gmail.com">
                            <img src={emailLogo} alt="Email" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
