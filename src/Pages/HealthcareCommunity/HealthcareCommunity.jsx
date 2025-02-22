import React from "react";
import "./HealthcareCommunity.scss";
import appStore from "../../assets/Hero/appstore.png";
import playStore from "../../assets/Hero/playstore.png";
import phone from '../../assets/HC/HC.png'
const HealthcareCommunity = () => {
    return (
        <div className="healthcare-containers">
            <div className="background-text">
                {[...Array(1)].map((_, i) => (
                    <div
                        key={i}
                        className={`scrolling-text de1 ${i % 2 === 0 ? "left" : "right"}`}
                    >
                        <li>  HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                    </div>
                ))}
                {[...Array(1)].map((_, i) => (
                    <div
                        key={i}
                        className={`scrolling-text de2 ${i % 1 === 0 ? "left" : "right"}`}
                    >
                        <li>  HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                    </div>
                ))}
                {[...Array(1)].map((_, i) => (
                    <div
                        key={i}
                        className={`scrolling-text de3 ${i % 2 === 0 ? "left" : "right"}`}
                    >
                        <li>  HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                    </div>
                ))}
                {[...Array(1)].map((_, i) => (
                    <div
                        key={i}
                        className={`scrolling-text de4 ${i % 2 === 0 ? "left" : "right"}`}
                    >
                        <li>  HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                        <li> HEALTH CARE COMMUNITY</li>
                    </div>
                ))}
            </div>
            <div className="content-healthcare">
                <div className="text-section">
                    <h2>
                        Join the <span>thousands</span> of users who have already discovered
                        the best local experiences with our healthcare community App.
                        Download now and start exploring today!
                    </h2>
                    <div
                        className="buttons2"
                        style={{ display: "flex", gap: "10px", }}>
                        <img src={appStore} alt="App Store" />
                        <img src={playStore} alt="Google Play" />
                    </div>
                </div>
                <div className="image-section">
                    <img src={phone} alt="Healthcare App" className="phone" />
                </div>
            </div>
        </div>
    );
};

export default HealthcareCommunity;