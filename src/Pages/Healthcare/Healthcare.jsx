import React from "react";
import "./Healthcare.scss";
import { ArrowDownToLine } from "lucide-react";
import featuresImg from '../../assets/features/features.png'
const Healthcare = () => {
    return (
        <div className="healthcare-container">
            {/* Section 1: About */}

            {/* Section 2: Features */}
            <section className="features-section">
                <div className="text-content">
                    <div>
                        <h2>who are SR healthacare Community?</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nunc vitae vel sodales nec elementum. Eu donec adipiscing semper at. Gravida ullamcorper lorem at iaculis velit in. Vel consequat pharetra dolor adipiscing mollis. Habitasse id magna cursus sed fringilla. u donec adipiscing s
                        </p>
                    </div>
                    <button className="contact-btn">Contact Us For Details</button>
                </div>
                <div className="features_2_">
                    <div className="features-text">
                        <span className="tag">FEATURES</span>
                        <h2>Key Features of Our Healthcare App</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nunc vitae vel sodales nec elementum. Eu donec adipiscing semper at. Gravida ullamcorper lorem at iaculis velit in. Vel consequat pharetra dolor adipiscing mollis. Habitasse id magna cursus sed fringilla. u donec adipiscing semper at. Gravida ullamcorper lorem at iaculis velit in. Vel consequat pharetra dolor adipiscing mollis. Habitasse id magna cursus sed fringilla.
                        </p>
                        <img className="featuresImg" src={featuresImg} alt="" />
                    </div>
                    <div className="features-content">
                        <div className="feature-card">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M13 3.00231C12.5299 3 12.0307 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5C21 11.9693 21 11.4701 20.9977 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M18.5 2L18.7579 2.69703C19.0961 3.61102 19.2652 4.06802 19.5986 4.40139C19.932 4.73477 20.389 4.90387 21.303 5.24208L22 5.5L21.303 5.75792C20.389 6.09613 19.932 6.26524 19.5986 6.59861C19.2652 6.93198 19.0961 7.38898 18.7579 8.30297L18.5 9L18.2421 8.30297C17.9039 7.38898 17.7348 6.93198 17.4014 6.59861C17.068 6.26524 16.611 6.09613 15.697 5.75792L15 5.5L15.697 5.24208C16.611 4.90387 17.068 4.73477 17.4014 4.40139C17.7348 4.06802 17.9039 3.61102 18.2421 2.69703L18.5 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M7 17.5C9.3317 15.0578 13.6432 14.9428 16 17.5M13.9951 10C13.9951 11.3807 12.8742 12.5 11.4915 12.5C10.1089 12.5 8.98797 11.3807 8.98797 10C8.98797 8.61929 10.1089 7.5 11.4915 7.5C12.8742 7.5 13.9951 8.61929 13.9951 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                                <h4>Verified Healthcare Professionals</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.
                                </p>
                           </div>
                            <button className="Download-button">
                                Download now
                                <ArrowDownToLine className="arrow-icon" size={20} strokeWidth={3} />
                            </button>
                        </div>
                        <div className="feature-card">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M11 19H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                            <h4>Simple, User-Friendly & Easy To Use Interface</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.
                            </p>
                            <button className="Download-button">
                                Download now
                                <ArrowDownToLine className="arrow-icon" size={20} strokeWidth={3} />
                            </button>
                        </div>
                        <div className="feature-card">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M12.8809 7.01656L17.6538 8.28825M11.8578 10.8134L14.2442 11.4492M11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.2471 11.9765 17.9664Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M12 20.9462L11.0477 21.2055C8.35403 21.939 7.00722 22.3057 5.94619 21.6832C4.88517 21.0607 4.52429 19.692 3.80253 16.9546L2.78182 13.0833C2.06006 10.3459 1.69918 8.97718 2.31177 7.89892C2.84167 6.96619 4 7.00015 5.5 7.00003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            <h4>Unlimited Health & Wellness Posts & Articles</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.
                            </p>
                            <button className="Download-button">
                                Download now
                                <ArrowDownToLine className="arrow-icon" size={20} strokeWidth={3} />
                            </button>
                        </div>
                        <div className="feature-card">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M15.0038 7.80257C9.57619 7.42647 5.1047 6.62109 3 5.99976V15.0612C3 17.0556 3 18.0528 3.61958 18.8661C4.23916 19.6794 5.08923 19.9091 6.78937 20.3685C9.53623 21.1107 12.4235 21.5527 15.0106 21.8055C17.6919 22.0675 19.0325 22.1985 20.0163 21.2995C21 20.4005 21 18.9564 21 16.068V14.0544C21 11.2495 21 9.84706 20.1929 8.97664C19.3859 8.10622 17.9252 8.005 15.0038 7.80257Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                </svg>
                                <h4>An Healthy Platform To Earn Extra Income As Agent</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.
                                </p>
                           </div>
                            <button className="contact-btn">Contact Us For Details</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Healthcare;
