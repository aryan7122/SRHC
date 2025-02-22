import React, { useState } from "react";
import "./TestimonialSlider.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Lalita Thakur",
        role: "Student, Pune University",
        review:
            "I appreciate the app’s user-friendly design and real-time updates on patient history. It’s a game-changer for doctors like me who need quick access to patient details!",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        name: "Dr. Ananya Sharma",
        role: "Healthcare Professional, Gemini Healths",
        review:
            "Finding the right healthcare professionals used to be a challenge. With SR Healthcare, hiring medical staff has become faster and more efficient. A must-have platform for hospitals and clinics!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        name: "Vikas Tiwari",
        role: "Student, JSPM University",
        review:
            "Booking health checkups has never been this easy! The app provides quick access to specialists, and I love the real-time updates. Great for anyone looking for hassle-free healthcare services.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="testimonial-section">
            <h2>What Our Users Say</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="testimonial-slider">
                <button className="prev-btn" onClick={prevSlide}>
                    {/* <FaArrowLeft /> */}
                    <ChevronLeft />
                </button>
                <div className="testimonial-card">
                    <div className="stars">
                        {Array(testimonials[currentIndex].rating)
                            .fill()
                            .map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                    </div>
                    <p className="review">{testimonials[currentIndex].review}</p>
                    <div className="user-info">
                        <img src={testimonials[currentIndex].image} alt="User" />
                        <div>
                            <h4>{testimonials[currentIndex].name}</h4>
                            <p>{testimonials[currentIndex].role}</p>
                        </div>
                    </div>
                </div>
                <button className="next-btn" onClick={nextSlide}>
                    {/* <FaArrowRight /> */}
                    <ChevronRight />
                </button>
            </div>
            <div className="dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? "dot active" : "dot"}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
            <button className="download-btn">Download Now!</button>
        </div>
    );
};

export default TestimonialSlider;