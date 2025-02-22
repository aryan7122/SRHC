import { Facebook, Twitter, Instagram } from "lucide-react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo">
                    <img src="/logo.png" alt="SR Healthcare Community" />
                </div>
                <nav className="footer-nav">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#how-it-works">How it works</a>
                    <a href="#about">About</a>
                </nav>
                <div className="social-icons">
                    <a href="#" className="icon"><Twitter size={20} /></a>
                    <a href="#" className="icon"><Facebook size={20} /></a>
                    <a href="#" className="icon"><Instagram size={20} /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Copyright 2025. All Rights Reserved by SR Healthcare Community</p>
                <div className="app-links">
                    <a href="#"><img src="/app-store.png" alt="App Store" /></a>
                    <a href="#"><img src="/google-play.png" alt="Google Play" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
