import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from './pages/about/about';
import { Resume } from './pages/resume/resume';
import { InteractiveProjects } from './pages/projects/projects';
import { BinomialDistributionPage } from './pages/projects/binomial-distribution/binomial-distribution';
import { BackgroundFluid } from './features/mouse/background-fluid';
import { HomePage } from './pages/homepage';
import { Seoul } from './pages/city/seoul/seoul';
import { London } from './pages/city/london/london';
import { Seattle } from './pages/city/seattle/seattle';
import { Jacksonville } from './pages/city/jacksonville/jacksonville';
import { Barcelona } from './pages/city/barcelona/barcelona';
import { Denver } from './pages/city/denver/denver';
import { Doha } from './pages/city/doha/doha';
import { Florence } from './pages/city/florence/florence';
import { Hokkaido } from './pages/city/hokkaido/hokkaido';
import { HongKong } from './pages/city/hongkong/hongkong';
import { NewYork } from './pages/city/newyork/newyork';
import { Vienna } from './pages/city/vienna/vienna';

/**
 * @constructor App representing the current front end for our application.
 */
class App extends React.Component {
  /**
   * Renders the application with React.
   *
   * @returns {JSX.Element} The current layout of our application.
   */
  render() {
    return (
      <>
        <BackgroundFluid />
        <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/places/seoul" element={<Seoul />} />
              <Route path="/places/london" element={<London />} />
              <Route path="/places/seattle" element={<Seattle />} />
              <Route path="/places/jacksonville" element={<Jacksonville />} />
              <Route path="/places/barcelona" element={<Barcelona />} />
              <Route path="/places/denver" element={<Denver />} />
              <Route path="/places/doha" element={<Doha />} />
              <Route path="/places/florence" element={<Florence />} />
              <Route path="/places/hokkaido" element={<Hokkaido />} />
              <Route path="/places/hongkong" element={<HongKong />} />
              <Route path="/places/newyork" element={<NewYork />} />
              <Route path="/places/vienna" element={<Vienna />} />
              <Route path="/aboutme" element={<AboutPage/>} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/interactive-projects" element={<InteractiveProjects/>} />
              <Route path="/interactive-projects/binomial-distribution" element={<BinomialDistributionPage/>} />
            </Routes>
          </Router>
      </>
    );
  }
}

export default App;
