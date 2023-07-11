import React, { useState, useEffect } from "react";
import './Portfolio.css'
import '../Global.css'
import { CancerAnalysisProject } from "./projects/cancer_analysis";
import { KoreaExportEconomyProject } from "./projects/korea_export_economy";

export const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="content">
                <div className="project-container">
                    <CancerAnalysisProject />
                    <KoreaExportEconomyProject />
                </div>
            </div>
        </section>
    )
}