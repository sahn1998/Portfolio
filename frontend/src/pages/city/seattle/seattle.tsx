
import React, { useRef, useState } from "react";
import { NavigationBar } from '../../../features/navigation/navbar';

import '../../../styles/section.css';
import '../../../styles/global.css';
import './seattle.css';

import uw from "../../../images/pages/city/seattle/uw.jpg";
import seattleU from "../../../images/pages/city/seattle/seattleuniversity.jpg";
import tea from "../../../images/pages/city/seattle/tea.jpg";
import ksa from "../../../images/pages/city/seattle/ksa.jpg";
import altitude from "../../../images/pages/city/seattle/altitude.jpg";
import laMer from "../../../images/pages/city/seattle/lamer.jpg";
import queenAnne from "../../../images/pages/city/seattle/queenanne.jpg";

export const Seattle = () => {
    return (
        <div className="page-container page-container-main">
            <NavigationBar 
                colorHome="rgb(255, 255, 255)"
                colorProjects="rgb(255, 255, 255)"
                colorAbout="rgb(255, 255, 255)"
                colorExperience="rgb(255, 255, 255)"
            />
            {/* Fullscreen snap panel for intro */}
            <section className="snap-section intro-section" id="seattle">
                <div className="section-card-background section-card-background--seattle">

                    {/* Photo label (unchanged) */}
                    <div className="seattle-photo-label">
                        <p className="label-meta">Travel × Code Archive</p>

                        <h4 className="label-location">Seattle, Washington </h4>
                        <p className="label-subtitle">2024 · SPACE NEEDLE</p>

                        <div className="label-divider"></div>

                        <p className="label-story">
                            From late-night study sessions at University of Washington to early mornings with coffee and tofu-soups,
                            this city has taught me to embrace curiosity, community, and constant change.
                            <br />
                            <br />
                            Seattle isn’t just where I lived, it’s where I learned.  
                            Through rain-soaked walks, quiet library corners, and conversations that lasted longer than planned,  
                            I discovered what motivates me, what challenges me, and what kind of person I want to become.
                            <br />
                            <br />
                            Seattle raised me in its own way and I wouldn’t have it any other way.
                        </p>
                    </div>

                    {/* Main content */}
                    <h1 className="seattle-title">My Home Away from Home</h1>

                    <SeattleCardStack />
                </div>
            </section>
        </div>
    );
};

const SEATTLE_CARDS = [
  {
    id: "uw",
    title: "University of Washington",
    subtitle: "Four years of late night problem sets, dorm coffee, and figuring out who I wanted to become.",
    image: uw,
  },
  {
    id: "seattleU",
    title: "Seattle University",
    subtitle: "Smaller classes, closer mentors, and a master's degree that pushed me further than I expected.",
    image: seattleU,
  },
  {
    id: "tea",
    title: "The Energy Authority",
    subtitle:  "Started as an intern, stayed on full time. Now I build optimization models for battery storage and forecast load across energy markets.",
    image: tea,
  },
  {
    id: "laMer",
    title: "La Mer",
    subtitle: "The kind of seafood spot you save for celebrations, but end up returning to on a random Tuesday because the week called for it.",
    image: laMer,
  },
  {
    id: "queenAnne",
    title: "Queen Anne",
    subtitle: "A little house on a hill with a view that still catches me off guard. The first place that felt cozy, like a house in a Ghibli movie.",
    image: queenAnne,
  },
  {
    id: "ksa",
    title: "Korean Student Association",
    subtitle: "Walked in not knowing anyone, left with a community that outlasted graduation. Found before I even realized I needed it.",
    image: ksa,
  },
  {
    id: "altitude",
    title: "Altitude",
    subtitle: "City lights from above, drinks that turned into hours, the kind of night you don't plan but never forget.",
    image: altitude,
  },
];

export const SeattleCardStack: React.FC = () => {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!railRef.current) return;
    setIsDragging(true);
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = railRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !railRef.current) return;
    e.preventDefault();
    const dx = e.clientX - dragState.current.startX;
    railRef.current.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  return (
    <div className="seattle-card-stack-container">
      <div
        ref={railRef}
        className={`seattle-card-rail ${isDragging ? "is-dragging" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={endDrag}
        onMouseUp={endDrag}
      >
        {SEATTLE_CARDS.map((card, index) => (
          <button
            key={card.id}
            className={`seattle-card seattle-card-layer-${index}`}
            type="button"
          >
            <div
              className="seattle-card-bg"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <div className="seattle-card-overlay" />
            <div className="seattle-card-content">
              <p className="seattle-card-label">Seattle, WA</p>
              <h3 className="seattle-card-title">{card.title}</h3>
              <p className="seattle-card-subtitle">{card.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};