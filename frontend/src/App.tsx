import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Home";
import { AboutPage } from './components/about-page/About';
import { Resume } from './components/resume-page/Resume';
import { InteractiveProjects } from './components/interactive-projects/interactive-projects';
import { BinomialDistributionPage } from './components/interactive-projects/probabilities/bionomial/binomial';

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
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<AboutPage/>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/interactive-projects" element={<InteractiveProjects/>} />
          <Route path="/interactive-projects/binomial-distribution" element={<BinomialDistributionPage/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;