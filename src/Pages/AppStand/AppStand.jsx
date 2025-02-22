import React from "react";
import "./AppStand.scss";
import phoneMockup from "../../assets/Hero/m2.png"; 

const AppStand = () => {
    return (
        <div className="container-AppStand">
            <p className="heading">Here’s what makes our app stand out</p>
            <div className="content-wrapper">
                <div className="content_box">
                    <div className="scrollable-text">
                        <p>
                            odio quam cursus. Tempus id porta egestas facilisis lorem egestas
                            tempor. Semper diam mattis et ipsum nec ut molestie. Interdum lectus
                            id lacinia pharetra sit adipiscing ac lorem. At nunc rutrum egestas
                            justo tortor dapibus ante tempor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Id amet facilisi proin
                            molestie. Hendrerit eget in nec pellentesque sed massa magnis mollis
                            in. Lectus nec condimentum elit tincidunt. Massa varius dictum tellus
                            sagittis curabitur morbi ornare blandit. A sed viverra mollis pharetra
                            dictumst purus.
                        </p>
                    </div>
                    <div className="mockup-wrapper">
                        <img src={phoneMockup} alt="App Preview" className="phone-mockup" />
                    </div>
               </div>
            </div>
        </div>
    );
};

export default AppStand;
// 