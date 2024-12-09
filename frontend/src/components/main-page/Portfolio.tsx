import React, { useState, useEffect } from "react";
import './Portfolio.css'
import '../Global.css'
import { CancerAnalysisProject } from "./projects/cancer_analysis";
import { KoreaExportEconomyProject } from "./projects/korea_export_economy";
import { BinomialProject } from "./projects/binomial_distribution";
import { BreastCancerProject } from "./projects/breast_cancer";

export const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="content">
                <div className="project-container">
                    <CancerAnalysisProject />
                    <KoreaExportEconomyProject />
                    <BreastCancerProject />
                </div>
            </div>
        </section>
    )
}

export const Portfolio2 = () => {
    return (
        <section id="portfolio">
            <div className="content">
                <div className="project-container">
                    <BinomialProject />
                </div>
            </div>
        </section>
    )
}