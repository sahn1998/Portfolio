import React from "react";
import './Project.css';

export const BreastCancerProject = () => {
    return (
        <div className="project"> 
            <a 
                href="https://medium.com/ai-mind-labs/breast-ultrasound-image-cancer-classification-with-vgg16-and-pytorch-part-1-6359c0243b03" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    src={require('../../images/breast_cancer.png')} 
                    className="project-image" 
                    alt="Breast Cancer Project"
                />
            </a>
            <div className="project-text-section">
                <p className="project-title">
                    Breast Ultrasound Image Cancer Classification with VGG16 and PyTorch
                </p>
                <p className="project-description">
                    In developing countries, women might not have access to a mammogram or may not be able to afford it. 
                    Ultrasound is the cheaper option, and we trained a computer vision model that detects breast cancer 
                    from ultrasound images.
                </p>
                <p className="date-title">
                    Jun. 6th - Sep. 30th, 2023
                </p>
            </div>
        </div>
    );
};
