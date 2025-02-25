import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import HeroSection from "./Pages/HeroSection/HeroSection";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Healthcare from "./Pages/Healthcare/Healthcare";
import AppStand from "./Pages/AppStand/AppStand";
import Steps from "./Pages/Steps/Steps";
import Pricing from "./Pages/PlansData/Pricing";
import HealthcareCommunity from "./Pages/HealthcareCommunity/HealthcareCommunity";
import TestimonialSlider from "./Pages/TestimonialSlider/TestimonialSlider";
import FAQAccordion from "./Pages/FAQAccordion/FAQAccordion";
import ContactForm from "./Pages/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactForm/ContactUs";



function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <HeroSection />
                <AboutUs />
                <Healthcare />
                <AppStand/>
                <Steps/>
                <Pricing />
                <HealthcareCommunity/>
                <TestimonialSlider />
                <FAQAccordion />
                <ContactForm />
                <Footer/>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ContactUs />
                <FAQAccordion ContactUs='ContactUs' />
                <Footer />
              </>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;