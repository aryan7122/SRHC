import React, { useEffect, useRef } from "react";
import "./HeroSection.scss";
import doctor from "../../assets/Hero/user.png";
import leftMobile from "../../assets/Hero/m1.png";
import rightMobile from "../../assets/Hero/m2.png";
import appStore from "../../assets/Hero/appstore.png";
import playStore from "../../assets/Hero/playstore.png";
import SmokeEffect from "./SmokeEffect";
import LightBeamEffect from "./LightBeamEffect";
import gsap from "gsap";
import Smoke from "./Smoke";

const HeroSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const subTextRef = useRef(null);
  const buttonsRef = useRef(null);
  const doctorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Doctor Image Slide-In
    tl.fromTo(
      doctorRef.current,
      { y: 300, opacity: 0, scale: 0 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );

    // Typing Effect Function (Fixed)
    const typeEffect = (element, text, speed, callback) => {
      element.innerHTML = ""; // पहले खाली कर देते हैं
      let i = 0;

      const type = () => {
        if (i < text.length) {
          element.innerHTML = text.substring(0, i + 1); // एक-एक letter सही से add करेंगे
          i++;
          setTimeout(type, speed);
        } else if (callback) {
          setTimeout(callback, 500); // अगले animation से पहले थोड़ा delay
        }
      };
      type();
    };

    const h1Text = textRef.current.dataset.text;
    typeEffect(textRef.current, h1Text, 40, () => {
      // Second h1 (highlight text)
      const h1Text2 = textRef2.current.dataset.text;
      typeEffect(textRef2.current, h1Text2, 40, () => {
        // p starts after h1
        const pText = subTextRef.current.dataset.text;
        typeEffect(subTextRef.current, pText, 20, () => {
          // p ends → buttons appear
          gsap.fromTo(
            buttonsRef.current,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
          );
        });
      });
    });

    // Mobile Images Animation (Slide from Top)
    gsap.fromTo(
      leftRef.current,
      { x: 50, y: -100, opacity: 0 },
      { x: 50, y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.3 }
    );

    gsap.fromTo(
      rightRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="hero-section">
      <span className="smoke_ef">
        <LightBeamEffect />
      </span>
      <Smoke />
      <div className="hero-content">
        <div className="text-container">
          <img
            ref={doctorRef}
            src={doctor}
            alt="Doctor"
            className="doctor-img"
          />
          <h1
            ref={textRef}
            className="outline-text"
            data-text="Your Healthcare "></h1>

          <h1 ref={textRef2} className="highlight" data-text="Simplified!"></h1>
          <p
            ref={subTextRef}
            data-text="Explore the various offers, combos, and many more that's happening near you."></p>
          <div
            className="buttons"
            ref={buttonsRef}
            style={{ display: "flex", gap: "10px", opacity: 0 }}>
            <img src={appStore} alt="App Store" />
            <img src={playStore} alt="Google Play" />
          </div>
        </div>
        <div className="images-container">
          <img
            ref={leftRef}
            src={leftMobile}
            alt="Mobile App Left"
            className="left-mobile"
          />
          <img
            ref={rightRef}
            src={rightMobile}
            alt="Mobile App Right"
            className="right-mobile"
          />
        </div>
      </div>
      <SmokeEffect />
    </div>
  );
};

export default HeroSection;
//
