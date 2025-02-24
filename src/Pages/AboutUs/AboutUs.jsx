import React from "react";
import "./AboutUs.scss";
import img from '../../assets/about/img.jpeg';

const AboutUs = () => {
    return (
        <section className="about-us" id="about">
            <div className="content">
                <span className="tag">ABOUT US</span>
                <h2>About SR Healthcare Community</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.

                </p>
                <p>
                    Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.

                    
                </p>
                <button className="contact-btn">Contact Us For More Details</button>
            </div>
            <div className="image-container">
                <img src={img} alt="Healthcare Team" />
            </div>
        </section>
    );
};

export default AboutUs;