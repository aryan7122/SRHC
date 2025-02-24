import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../assets/icon/logo.png";

import { Menu, X, Search, ArrowRight, ArrowDownToLine } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// import BookAppointment from '../BookAppointment/BookAppointment';
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation(); // Get current location

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 650) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleSearchBar = () => {
        setIsVisible(!isVisible);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        window.scrollTo(0, 0);
    };

    const isActive = (path) => {
        return location.pathname === path ? "active-link" : "";
        // return location.pathname.includes(path) ? "active-link" : "";
    };
    // white bg
    const whiteBg = ["contact", "about", 'how-it-work','features'];
    const isWhite = whiteBg.some((path) => location.pathname.includes(path));
    const [showModal, setShowModal] = useState(false);
    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    const scrollToSection = (id) => {
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                const yOffset = -80; // 80px upar se adjust karne ke liye
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }, 100);
    };


    return (
        <header
            className={`navbar ${scrolled ? "navbar-scrolled" : ""}  ${isWhite ? "navbar-scrolled" : ""
                } ${menuOpen ? "navbar-scrolled" : ""}`}>
            <motion.nav
                className={`navbar-container ${menuOpen ? "menu-active-navbar-container" : ""
                    }`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.1 }}>
                {/* Logo Section */}
                <div className="navbar-logo">
                    <div className="logo-circle">
                        <img src={logo} alt="logo" />
                    </div>
                </div>

                {/* Navigation Links */}
                {!isVisible && (
                    <ul className={`navbar-links ${menuOpen ? "menu-active" : ""}`}>
                        <li onClick={() => toggleMenu()}>
                            <Link to="/" className={isActive("/")}>
                                Home
                            </Link>
                        </li>
                        <li onClick={() => toggleMenu()}>
                            <Link to="/about" className={isActive("/about")} onClick={() => setTimeout(() => scrollToSection("about"), 100)}>
                                About
                            </Link>
                        </li>

                        <li onClick={() => toggleMenu()}>
                            <Link to="/features" className={isActive("/features")} onClick={() => setTimeout(() => scrollToSection("Features"), 100)}>
                                Features
                            </Link>
                        </li>

                        <li onClick={() => toggleMenu()}>
                            <Link to="/how-it-work" className={isActive("/how-it-work")} onClick={() => setTimeout(() => scrollToSection("how-it-work"), 100)}>
                                How it works
                            </Link>
                        </li>

                        <li onClick={() => toggleMenu()}>
                            <Link to="/pricing" className={isActive("/pricing")} onClick={() => setTimeout(() => scrollToSection("pricing"), 100)}>
                                Pricing
                            </Link>
                        </li>


                        <li onClick={() => toggleMenu()}>
                            <Link to="/contact" className={isActive("/contact")}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}

                {/* Book Appointment and Search Section */}
                <div className={`navbar-actions ${menuOpen ? "menu-active" : ""}`}>
                    {!isVisible ? (
                        <>
                            <button className="Download-button" onClick={handleBookNowClick}>
                                Download now
                                <ArrowDownToLine
                                    className="arrow-icon"
                                    size={20}
                                    strokeWidth={3}
                                />
                            </button>
                        </>
                    ) : (
                        ""
                    )}
                    {isVisible && (
                        <div className="search-bar">
                            {/* <div className='card_search'>
                                <Search className="search_icon_1" size={24} />
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search here"
                                />
                                <button className="search-button">Search</button>
                            </div>
                            <button className="close-button-nav" onClick={toggleSearchBar}>
                                ✖
                            </button> */}
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                {!isVisible && (
                    <>
                        <div className="mobile-menu-icon" onClick={toggleMenu}>
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </div>
                    </>
                )}
            </motion.nav>
            {/* {showModal && <BookAppointment onClose={closeModal} />} */}
        </header>
    );
}

export default Navbar;
