import React from "react";
import ReactGA from 'react-ga4';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./NotFound";
import Home from "./pages/Home";
import Gmail from "./pages/Gmail";
import Aol from "./pages/Aol";
import Outlook from "./pages/Outlook";
import Office365 from "./pages/Office365";
import Yahoomail from "./pages/Yahoomail";
import Othermail from "./pages/Othermail";
import CookieConsent from "./pages/CookieConsent";

function App() {
  ReactGA.initialize('YOUR_MEASUREMENT_ID'); // Replace with your actual Measurement ID

  // Send the initial pageview
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CookieConsent />} name="CookieConsent" />
        <Route path="/Home" element={<Home />} name="Home" />
        <Route path="/Gmail" element={<Gmail />} name="Gmail" />
        <Route path="/Aol" element={<Aol />} name="Aol" />
        <Route path="/Outlook" element={<Outlook />} name="Outlook" />
        <Route path="/Office365" element={<Office365 />} name="Office365" />
        <Route path="/Yahoomail" element={<Yahoomail />} name="Yahoomail" />
        <Route path="/Othermail" element={<Othermail />} name="Othermail" />
        <Route path="*" element={<NotFound />} name="NotFound" />
      </Routes>
    </Router>
  );
}

export default App;
