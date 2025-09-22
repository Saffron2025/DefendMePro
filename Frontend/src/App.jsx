import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import OneSignal from "react-onesignal";
import "./index.css";
import NavbarComp from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/contact";
import Resources from "./Pages/Resources";
import Footer from "./Components/Footer";
import ScrollToTopWithHash from "./ScrollToTopWithHash";
import Reality from "./Components/Reality";
import FallsShort from "./Components/FallsShort";
import BuiltDMP from "./Components/BuiltDMP";
import BackgroundVideo from "./Components/BackgroundVideo";
import FraudDetection from "./Components/FraudDetection";
import ScamProtection from "./Components/ScamProtection";
import AlertsHub from "./Components/AlertsHub";
import Identity from "./Components/Identity";
import ZeroDay from "./Components/ZeroDay";
import Passwords from "./Components/Passwords";
import Antivirus from "./Components/Antivirus";
import VPN from "./Components/VPN";
import SpamProtection from "./Components/SpamProtection";
import Support from "./Components/Support";
import Business from "./Components/Business";
import LearnMore from "./Pages/LearnMore";

// ✅ Title Manager Component
function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    let pageTitle = "Defend Me Pro - Scam Protection";

    switch (path) {
      case "/":
        pageTitle = "Defend Me Pro - Home";
        break;
      case "/about":
        pageTitle = "About Us - Defend Me Pro";
        break;
      case "/contact":
        pageTitle = "Contact Us - Defend Me Pro";
        break;
      case "/resources":
        pageTitle = "Resources - Defend Me Pro";
        break;
      case "/reality":
        pageTitle = "Reality Check - Defend Me Pro";
        break;
      case "/fallsshort":
        pageTitle = "Falls Short - Defend Me Pro";
        break;
      case "/builtdmp":
        pageTitle = "Built DMP - Defend Me Pro";
        break;
      case "/fraud":
        pageTitle = "Fraud Detection - Defend Me Pro";
        break;
      case "/scam":
        pageTitle = "Scam Protection - Defend Me Pro";
        break;
      case "/identify":
        pageTitle = "Identity Protection - Defend Me Pro";
        break;
      case "/alerthub":
        pageTitle = "Alerts Hub - Defend Me Pro";
        break;
      case "/zero":
        pageTitle = "Zero Day Defense - Defend Me Pro";
        break;
      case "/password":
        pageTitle = "Password Protection - Defend Me Pro";
        break;
      case "/antivirus":
        pageTitle = "Antivirus - Defend Me Pro";
        break;
      case "/vpn":
        pageTitle = "VPN Security - Defend Me Pro";
        break;
      case "/spam":
        pageTitle = "Spam Protection - Defend Me Pro";
        break;
      case "/support":
        pageTitle = "Support - Defend Me Pro";
        break;
      case "/business":
        pageTitle = "Business Solutions - Defend Me Pro";
        break;
      case "/learn-more":
        pageTitle = "Learn More - Defend Me Pro";
        break;
      default:
        pageTitle = "Defend Me Pro - Scam Protection";
    }

    document.title = pageTitle;
  }, [location]);

  return null;
}

// ✅ Background Condition
function ConditionalBackground({ children }) {
  const location = useLocation();

  const videoRoutes = [
    "/reality", "/fallsshort", "/builtdmp", "/fraud", "/scam", "/alerthub",
    "/identify", "/zero", "/password", "/antivirus", "/vpn", "/spam", "/support", "/business"
  ];

  const path = location.pathname.toLowerCase();
  const showVideo = videoRoutes.some(route => path.startsWith(route));

  return (
    <>
      {showVideo && <BackgroundVideo />}
      {children}
    </>
  );
}

// ✅ Main App
export default function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "b1d38c27-ca06-44bb-906e-7f8142a434d3", // Replace with your actual OneSignal App ID
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: true,
      },
      promptOptions: {
        actionMessage: "We'd like to show you notifications for the latest updates.",
        acceptButtonText: "Allow",
        cancelButtonText: "No Thanks",
      },
    }).then(() => {
      console.log("OneSignal Initialized");
    });
  }, []);

  return (
    <Router>
      <ScrollToTopWithHash />
      <NavbarComp />

      {/* 👇 Title Manager Added */}
      <TitleManager />

      <ConditionalBackground>
        <main style={{ position: "relative", zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/reality" element={<Reality />} />
            <Route path="/fallsshort" element={<FallsShort />} />
            <Route path="/builtdmp" element={<BuiltDMP />} />
            <Route path="/fraud" element={<FraudDetection />} />
            <Route path="/scam" element={<ScamProtection />} />
            <Route path="/identify" element={<Identity />} />
            <Route path="/alerthub" element={<AlertsHub />} />
            <Route path="/zero" element={<ZeroDay />} />
            <Route path="/password" element={<Passwords />} />
            <Route path="/antivirus" element={<Antivirus />} />
            <Route path="/vpn" element={<VPN />} />
            <Route path="/spam" element={<SpamProtection />} />
            <Route path="/support" element={<Support />} />
            <Route path="/business" element={<Business />} />
            <Route path="/learn-more" element={<LearnMore />} />
          </Routes>
        </main>
      </ConditionalBackground>

      <Footer />
    </Router>
  );
}
