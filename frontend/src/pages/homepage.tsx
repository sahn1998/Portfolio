import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Globe from "react-globe.gl";
import { NavigationBar } from "../features/navigation/navbar";

import "./homepage.css";

type Place = {
    name: string;
    lat: number;
    lng: number;
    url?: string;
};

const VISITED_PLACES: Place[] = [
  { name: "Seoul, South Korea", lat: 37.5665, lng: 126.9780, url: "/places/seoul" },
  { name: "Hokkaido, Japan", lat: 43.2203, lng: 142.8635, url: "/places/hokkaido" },
  { name: "Hong Kong, China", lat: 22.3193, lng: 114.1694, url: "/places/hongkong" },
  { name: "Seattle, USA", lat: 47.6062, lng: -122.3321, url: "/places/seattle" },
  { name: "Denver, USA", lat: 39.7392, lng: -104.9903, url: "/places/denver" },
  { name: "New York, USA", lat: 40.7128, lng: -74.0060, url: "/places/newyork" },
  { name: "Jacksonville, USA", lat: 30.3322, lng: -81.6557, url: "/places/jacksonville" },
  { name: "London, UK", lat: 51.5074, lng: -0.1278, url: "/places/london" },
  { name: "Florence, Italy", lat: 43.7696, lng: 11.2558, url: "/places/florence" },
  { name: "Vienna, Austria", lat: 48.2082, lng: 16.3738, url: "/places/vienna" },
  { name: "Barcelona, Spain", lat: 41.3851, lng: 2.1734, url: "/places/barcelona" },
  { name: "Doha, Qatar", lat: 25.2854, lng: 51.5310, url: "/places/doha" },
];

export const HomePage: React.FC = () => {
    const globeRef = useRef<any>(null);
    const [hoveredPlace, setHoveredPlace] = useState<Place | null>(null);
    const hoverTimeout = useRef<any>(null);
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const globe = globeRef.current;
        if (!globe) return;

        // Set initial camera position (including "zoom" via altitude)
        globe.pointOfView(
            {
                lat: 20,        // center latitude
                lng: -100,      // center longitude
                altitude: 2.5   // <- smaller = closer, larger = farther
            },
            0                 // duration ms (0 = jump, >0 = animate)
        );

        const controls = globe.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.5;

        // If you want to *limit* zoom range
        controls.minDistance = 350;
        controls.maxDistance = 400;
    }, []);

    const handleLabelClick = (label: any) => {
        const place = label as Place;
        setSelectedPlace(place);

        if (!globeRef.current) return;
        const globe = globeRef.current;

        // Step 1: rotate/move to the city (medium altitude)
        const step1Duration = 1200;
        globe.pointOfView(
            {
                lat: place.lat,
                lng: place.lng,
                altitude: 1.8,   // a bit closer than your initial 2.5
            },
            step1Duration
        );

        // Step 3: navigate after zoom finishes (1 second)
        if (place.url) {
            setTimeout(() => {
                navigate(place.url!);
            }, 1200); // same as zoom duration
        }
    };

    const handleLabelHover = (d: any | null) => {
        if (!d) {
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

            hoverTimeout.current = setTimeout(() => {
                setHoveredPlace(null);
                document.body.style.cursor = "default";

                // resume rotation when hover clears
                if (globeRef.current) {
                    globeRef.current.controls().autoRotate = true;
                }
            }, 450);

            return;
        }

        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        if (hoveredPlace && hoveredPlace.name === d.name) return;

        setHoveredPlace(d);
        document.body.style.cursor = "pointer";

        // pause rotation while hovering
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = false;
        }
    };


  return (
    <section className="hero">
        {/* Globe background */}
        <NavigationBar 
            colorHome="rgba(255, 251, 0, 1)"
            colorProjects="rgb(255, 255, 255)"
            colorAbout="rgb(255, 255, 255)"
            colorExperience="rgb(255, 255, 255)"
            whiteLogo={true}
        />

        <div className="homepage-photo-label">
            <p className="label-meta">Travel × Code Archive</p>

            <h4 className="label-location">Earth</h4>
            <p className="label-subtitle">Stories from the places that shaped my journey</p>

            <div className="label-divider"></div>

            <p className="label-story">
                Every point on this globe represents a moment in my life. 
                <br></br>
                <br></br>
                A city I've lived in, a place I've worked at, a country I've traveled to. 
                It's my introduction to the places that shifted how I see the world.
                Choose any location to uncover my journey, the experiences, and the memoirs that are buried under its surface.
                <br></br>
                <br></br>
                This is an archive of my creative direction, analytical thinking, and the quiet moments where ideas turn into work. Go Huskies!
            </p>
        </div>

        <div className="homepage-section-content">
            <span className="section-label">-- SUNGHYUN AHN --</span>
            <h1 className="section-title">My Journey</h1>
            <p className="section-subtitle">
                Learning from the past and looking forward to the future,<br></br>Here are the experiences that shaped me as a data scientist.
            </p>
        </div>

        <div className="hero-globe">
            <Globe
                ref={globeRef}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                labelsData={VISITED_PLACES}
                labelLat="lat"
                labelLng="lng"
                labelText="name"

                // Dot grows on hover
                labelDotRadius={(d: any) =>
                    hoveredPlace && d.name === hoveredPlace.name ? 0.9 : 0.4
                }

                // Text slightly bigger on hover
                labelSize={(d: any) =>
                    hoveredPlace && d.name === hoveredPlace.name ? 1.7 : 1.1
                }

                // Color changes when selected
                labelColor={(d: any) =>
                    selectedPlace && d.name === selectedPlace.name ? "#ff8844" : "#ffcc66"
                }

                // Optional: custom HTML label with CSS animation
                labelLabel={(d: any) =>
                    hoveredPlace && d.name === hoveredPlace.name
                    ? `<div class="globe-dot-hover">${d.name}</div>`
                    : d.name
                }

                labelResolution={2}
                onLabelClick={handleLabelClick}
                onLabelHover={handleLabelHover}
            />

        </div>
        
    </section>
  );
};
