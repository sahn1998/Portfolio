import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Home";
import { AboutPage } from './components/about-page/About';
import { Resume } from './components/resume-page/Resume';

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
        </Routes>
      </Router>
    );
  }
}

export default App;