import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import HeroSection from "./Pages/HeroSection/HeroSection";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Healthcare from "./Pages/Healthcare/Healthcare";


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