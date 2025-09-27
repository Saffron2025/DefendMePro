import React from "react";
import "../Styles/Solutions.css";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  LockKeyhole,
  AlertTriangle,
  Headphones,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Solutions() {
  const navigate = useNavigate();

  const solutions = [
    {
      icon: <ShieldCheck size={60} />,
      title: "Fraud & Scam Detection",
      desc: "Our advanced AI-driven system scans thousands of signals per second to detect fraud attempts. From fake emails to scam websites, you’ll be alerted instantly before damage occurs.",
      extra: "We continuously update our algorithms with global fraud data to protect you from the latest threats in real-time.",
      img: "/Images/FraudScamProtection.webp",
      alt: "AI monitoring for fraud and scam detection",
    },
    {
      icon: <LockKeyhole size={60} />,
      title: "Identity & Privacy Shield",
      desc: "Your personal data is your most valuable asset. With VPN, dark web monitoring, and encrypted browsing, your identity stays private at all times.",
      extra: "We notify you if your credentials are leaked and provide step-by-step recovery support instantly.",
      img: "/Images/IdentityPrivacyShield.webp",
      alt: "Identity protection and VPN",
    },
    {
      icon: <AlertTriangle size={60} />,
      title: "Real-Time Scam Alerts",
      desc: "Scams happen fast. Our alert system ensures you are the first to know. Whether it’s phishing, a spam call, or suspicious login — you’ll get a warning right away.",
      extra: "You also get personalized tips to handle the scam safely, without panic.",
      img: "/Images/Notification.webp",
      alt: "Scam alert notifications in real time",
    },
    {
      icon: <Headphones size={60} />,
      title: "24/7 Expert Support",
      desc: "Technology can be confusing, but you are never alone. Our experts are available day and night to guide you through any digital threat or technical issue.",
      extra: "From account recovery to scam counseling, we ensure you are back to safety quickly.",
      img: "/Images/24Support.webp",
      alt: "Support agent ready to help users 24/7",
    },
  ];

  return (
    <div className="solutions-page">
      <Helmet>
        <meta
          name="description"
          content="Explore DefendMePro's professional-grade solutions: scam detection, privacy shield, real-time alerts, and 24/7 support."
        />
        <link rel="canonical" href="https://www.defendmepro.com/solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="solutions-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/Images/solution-poster.jpg"
          className="hero-video"
        >
          <source src="/Videos/solution-hero.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🛡️ Powerful Solutions Against Digital Threats
          </motion.h1>
          <p>
            One platform. Multiple shields. Total protection.  
            <br />
            DefendMePro provides enterprise-grade security simplified for everyday use.
          </p>
        </div>
      </section>

      {/* Zig-Zag Solution Blocks */}
      {solutions.map((s, i) => (
        <section
          key={i}
          className={`solution-block ${i % 2 === 0 ? "normal" : "reverse"}`}
        >
          <motion.div
            className="solution-img"
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={s.img} alt={s.alt} loading="lazy" />
          </motion.div>

          <motion.div
            className="solution-text"
            initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="solution-icon">{s.icon}</div>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
            <p className="extra">{s.extra}</p>
          </motion.div>
        </section>
      ))}

      {/* Timeline */}
      <section className="solutions-timeline">
        <h2>How DefendMePro Works</h2>
        <p>
          Our process is simple yet powerful. From detection to recovery, every step ensures you are protected against scams and fraud.
        </p>
        <div className="timeline">
          <div className="step">🔍 Detect threats instantly</div>
          <div className="line"></div>
          <div className="step">⚡ Alert you in real-time</div>
          <div className="line"></div>
          <div className="step">🛡️ Protect with recovery tools</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="solutions-cta">
        <h2>🚀 Stay Ahead of Scams</h2>
        <p>
          Protect your family, your identity, and your peace of mind.  
          Join thousands who trust DefendMePro every day.
        </p>
        <button className="cta-btn" onClick={() => navigate("/contact")}>
          Start Free Trial
        </button>
      </section>
    </div>
  );
}
