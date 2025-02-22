import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import HeroSection from "./Pages/HeroSection/HeroSection";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Healthcare from "./Pages/Healthcare/Healthcare";
import AppStand from "./Pages/AppStand/AppStand";
import Steps from "./Pages/Steps/Steps";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUs />
                <Healthcare />
                <AppStand/>
                <Steps/>
              </>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;