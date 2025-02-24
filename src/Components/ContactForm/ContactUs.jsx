import React from "react";
import "./ContactUs.scss";
import imgContactUs from '../../assets/ContactUs/ContactUs.jpeg'
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h5 className="contact-heading">CONTACT US</h5>
                <h1 className="main-heading">Get in Touch with SR Healthcare</h1>
                <p className="description">Our friendly team would love to hear from you.</p>
                <div className="contact-details">
                    <p>
                        <Mail />
                        <a href="mailto:support@srhealthcare.com">support@srhealthcare.com</a>
                    </p>
                    <p>
                        <Phone />
                        <a href="tel:+9197945124">+91-97945124</a>
                    </p>
                    <p>
                        <MapPin />
                        123 Sample St, Pune NSW 415002 AU
                    </p>
                </div>
                <img src={imgContactUs} alt="Doctor" className="contact-image" />
            </div>

            <div className="contact-form">
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" placeholder="Enter First Name" />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" placeholder="Enter Last Name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label> Email</label>
                            <input type="email" placeholder="Enter Email address" />
                        </div>
                        <div className="form-group">
                            <label>Phone number</label>
                            <input type="tel" placeholder="Enter Mobile Number" />
                        </div>
                    </div>
                    <div className="form-group full-width">
                        <label>Choose a topic</label>
                        <select>
                            <option>Select one...</option>
                        </select>
                    </div>
                    <div className="inquiry-type">
                        <label className="l-1">Inquiry Type</label>
                        <div className="radio-group">
                            <label><input type="radio" name="inquiry" /> General</label>
                            <label><input type="radio" name="inquiry" /> Support</label>
                            <label><input type="radio" name="inquiry" /> Feedback</label>
                            <label><input type="radio" name="inquiry" /> Business</label>
                            <label><input type="radio" name="inquiry" /> Other</label>
                        </div>
                    </div>
                    <div className="form-group full-width">
                        <label>Message</label>
                        <textarea placeholder="Type your message..."></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
