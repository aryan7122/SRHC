import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import "./Footer.scss";
import playStore from "../../assets/Hero/playstore.png";
import appStore from "../../assets/Hero/appstore.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo">
                    <img src="https://s3-alpha-sig.figma.com/img/521a/d869/e64446459b37aacf69b5312a5f26fb29?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IB0Wc5uJUB-v7aU9AsdArI6315OIwSUoSkQZZU6BtrP~FahiJNswyH~wCQN8sMPXxnaOEoGjNBTj97viFNp3ERIPvw2DfJzoZX0o7Ih6SWuyGL5r6eTvwBmSlCjHn0aRh2qUieyeX3sl4OtjBe7kBQA0cmQzw8TaIUrwaNVVUsz3V2QnMz7eJjiJu2anm7U2K75PWeVbFEZSd-ZY~FXX~KDFHIkTQcQIwjhrBIGTMcf6xtY806pT~Y-5r0Dd6phj5EcEmdW9EXf5sp~wOckRqROF3ey9yDaG9zHBGiTU1azjWReoyb9fgHBs5ft2rirCGTooda~sWSvj3ZKQ5lAQYA__"
                        alt="SR Healthcare Community" />
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
                    <a href="#" className="icon"><Github size={20} /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p> &copy; Copyright 2025. All Rights Reserved by SR Healthcare Community</p>
                <div
                    className="buttons2"
                    style={{ display: "flex", gap: "10px", }}>
                    <p>Install App</p>
                    <img src={appStore} alt="App Store" />
                    <img src={playStore} alt="Google Play" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
