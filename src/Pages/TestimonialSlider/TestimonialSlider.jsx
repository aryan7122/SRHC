import React, { useState } from "react";
import "./TestimonialSlider.scss";
import { ArrowDownToLine, ChevronLeft, ChevronRight } from "lucide-react";

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
    {
        name: "Ravi Kumar",
        role: "Software Engineer, Tech Corp",
        review:
            "This app has revolutionized the way I manage my healthcare needs. From appointments to reports, everything is just a click away.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        name: "Simran Kaur",
        role: "Marketing Manager, Health Plus",
        review:
            "A seamless experience! The UI is intuitive, and the services are top-notch. Highly recommended for busy professionals.",
        rating: 2,
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerSlide = 1; // Show 3.5 cards

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="testimonial-section">
            <div className="top-title01">
                <div>
                    <h2>What Our Users Say</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button className="Download-button">
                    Download now
                    <ArrowDownToLine className="arrow-icon" size={20} strokeWidth={3} />
                </button>
            </div>

            {/* Slider Section */}
            <div className="testimonial-slider">
                <div className="testimonial-container" style={{ "--index": currentIndex }}>
                    {testimonials.concat(testimonials.slice(0, 3)).map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{ opacity: i < testimonial.rating ? 1 : 0.3 }}>
                                        ⭐
                                    </span>
                                ))}
                            </div>
                            <p className="review">{testimonial.review}</p>
                            <div className="user-info">
                                <img src={testimonial.image} alt="User" />
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slider Controls */}
            <div className="actionSlider">
                <div className="dots">
                    {[...Array(Math.ceil(testimonials.length / cardsPerSlide))].map((_, index) => (
                        <span
                            key={index}
                            className={index === Math.floor(currentIndex / cardsPerSlide) ? "dot active" : "dot"}
                            onClick={() => setCurrentIndex(index * cardsPerSlide)}
                        ></span>
                    ))}
                </div>
                <div className="btn-slide">
                    <button className="prev-btn" onClick={prevSlide}>
                        <ChevronLeft />
                    </button>
                    <button className="next-btn" onClick={nextSlide}>
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
