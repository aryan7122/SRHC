import React, { useState } from "react";
import "./Pricing.scss";
import plansData from "./PlansData";
import { ArrowDownToLine, Check } from "lucide-react";

const Pricing = () => {
    const [activePlan, setActivePlan] = useState("annual");
    const plans = plansData[activePlan];

    return (
        <section className="pricing-container">
            <div className="pricing-header">
                <div>
                    <h2>Curated Pricing Plans</h2>
                    <p>
                        Explore our in-app exclusive packages tailored for your healthcare needs.
                    </p>
                </div>
                <button className="Download-button">
                    Download now
                    <ArrowDownToLine className="arrow-icon" size={20} strokeWidth={3} />
                </button>
            </div>

            <div className="toggle-buttons">
                <button
                    className={activePlan === "annual" ? "active" : ""}
                    onClick={() => setActivePlan("annual")}
                >
                    Annual Plan
                </button>
                <button
                    className={activePlan === "monthly" ? "active" : ""}
                    onClick={() => setActivePlan("monthly")}
                >
                    Monthly Plan
                </button>
            </div>

            <div className="plans">
                {plans.map((plan) => (
                    <div key={plan.id} className="plan-card">
                        <span className="plan-name">{plan.name}</span>
                        <div className="price">
                            <h3 className="plan-price"><span>₹ </span> {plan.price}</h3>
                            <span className="per-month"><span>₹ </span>{plan.perMonth}</span>
                        </div>
                        <p className="plan-desc">{plan.description}</p>

                        <ul className="plan-features">
                            {plan.features.map((feature, index) => (
                                <li key={index}><spa className="round"> <Check /></spa> {feature}</li>
                            ))}
                        </ul>

                        <button className="contact-btn">Contact us Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
