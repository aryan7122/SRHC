import React, { useState } from "react";
import "./FAQAccordion.scss";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is SR Healthcare User App?",
        answer:
            "SR Healthcare User App is a digital healthcare platform designed to help users book medical appointments, track health records, consult with healthcare professionals, and access various medical services—all in one place."
    },
    {
        question: "Is SR Healthcare User App free to use?",
        answer: "Yes, the app is completely free to use."
    },
    {
        question: "How do I contact customer support if I face an issue?",
        answer: "You can reach out to our support team through the help section in the app or via email at support@srhealthcare.com."
    },
    {
        question: "Is my personal and medical data safe on the app?",
        answer: "Yes, we use advanced encryption and security measures to keep your data safe and secure."
    },
    {
        question: "What services does SR offer?",
        answer: "We offer a range of healthcare services including doctor consultations, lab tests, and health tracking."
    }
];

const FAQAccordion = ({ ContactUs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <h2 className={`faq-title ${ContactUs}`}>Your Questions Answered</h2>
            <p className={`faq-subtitle ${ContactUs}`}>We're here to help you.</p>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? "open" : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <span>{faq.question}</span>
                            <ChevronDown className={`icon ${openIndex === index ? "rotate" : ""}`} />
                        </div>
                        {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
