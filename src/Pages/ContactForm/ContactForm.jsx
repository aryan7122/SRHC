import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
    return (
        <div className="contact-container">
            <h2>Get in touch</h2>
            <p>
                Have a question that is not answered here? You can contact us at
                <a href="mailto:contact@srhealth.in"> contact@srhealth.in</a>
            </p>
            <form className="contact-form">
                <div className="input-group">
                    <input type="text" placeholder="Enter your name" className="input-box" />
                    <input type="text" placeholder="Enter your mobile number" className="input-box" />
                    <input type="email" placeholder="Enter your email" className="input-box" />
                </div>
                <textarea placeholder="Enter message..." className="textarea-box"></textarea>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
