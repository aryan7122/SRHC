import React from "react";
import "./Steps.scss";
import step1 from "../../assets/step/step1.png"; // Apni images ka path set karo
import step2 from "../../assets/step/step2.png";
import step3 from "../../assets/step/step3.png";
import step4 from "../../assets/step/step4.png";
import { ArrowDownToLine } from "lucide-react";

const Steps = () => {
    const steps = [
        {
            id: 1,
            img: step1,
            title: "Download & Sign Up",
        },
        {
            id: 2,
            img: step2,
            title: "Choose Desired Plan",
        },
        {
            id: 3,
            img: step3,
            title: "Explore Features",
        },
        {
            id: 4,
            img: step4,
            title: "Enjoy Unlimited Posting",
        },
    ];

    return (
        <section className="steps-container" id="how-it-work">
            <h2 className="heading">
                Start Healthy Journey In <span>4 Simple Steps</span>
            </h2>
            <p className="subheading">
                Explore Our In-App Exclusive Packages Tailored For Your Healthcare Needs.
            </p>

            <div className="buttons">
                <button className="btn contact-btn">See How It Works</button>
                <button className="Download-button">
                    Download now
                    <ArrowDownToLine className="arrow-icon" size={20} strokeWidth={3} />
                </button>
            </div>

            <div className="steps">
                {steps.map((step) => (
                    <div key={step.id} className="step-card">
                        <img src={step.img} alt={step.title} className="step-img" />
                        <div className="step-info">
                            <p className="step-number">STEP- <span>{step.id}</span></p>
                            <h3 className="step-title">{step.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Steps;
