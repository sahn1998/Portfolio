import React, { useState, useEffect } from "react";
import './Project.css'

export const BreastCancerProject = () => {
    return (
        <div className="project"> 
            <a href="https://medium.com/ai-mind-labs/breast-ultrasound-image-cancer-classification-with-vgg16-and-pytorch-part-1-6359c0243b03" target="_blank">
                <img 
                    src={
                        require('../../../images/breast_cancer.png')
                    }
                    className="project-image" />
            </a>
            <div className="date-title-container">
                <p className="date-title">
                    <span className="date-description">
                        June 6th - September 30th, 2024
                    </span>
                </p>
            </div>
            <div className="project-title-container">
                <p className="project-title">
                    <span className="title-description">
                        Breast Ultrasound Image Cancer Classification with VGG16 and PyTorch
                    </span>
                </p>
            </div>
            <div className="project-description-container">
                <p className="project-description">
                    <span className="description">
                    In developing countries, women might not have access to a mammogram or may not be able to afford it.
                    Ultrasound is the cheaper option and we trained a computer vision model that detects breast cancer from ultrasound images.
                    </span>
                </p>
            </div>
        </div>
    )
}