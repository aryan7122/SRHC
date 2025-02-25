import React from "react";
import "./HealthcareCommunity.scss";
import appStore from "../../assets/Hero/appstore.png";
import playStore from "../../assets/Hero/playstore.png";
import phone from '../../assets/HC/HC.png'
import { motion } from "framer-motion";

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
            <motion.div
                className="content-healthcare"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="text-section"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2>
                        Join the <span>thousands</span> of users who have already discovered
                        the best local experiences with our healthcare community App.
                        Download now and start exploring today!
                    </h2>

                    <motion.div
                        className="buttons2"
                        style={{ display: "flex", gap: "10px" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <motion.img
                            src={appStore}
                            alt="App Store"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.img
                            src={playStore}
                            alt="Google Play"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="image-section"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.img
                        src={phone}
                        alt="Healthcare App"
                        className="phone"
                      
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HealthcareCommunity;