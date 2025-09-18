import React from "react";
import "../Styles/Solutions.css";
import { motion } from "framer-motion";
import { ShieldCheck, LockKeyhole, AlertTriangle, Headphones } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Solutions() {
    const navigate = useNavigate();

  const solutions = [
    {
      icon: <ShieldCheck size={60} />,
      title: "Fraud & Scam Detection",
      desc: "AI-driven monitoring to detect scams, phishing attempts, and identity theft before they harm you.",
      img: "/Images/FraudScamProtection.webp",
    },
    {
      icon: <LockKeyhole size={60} />,
      title: "Identity & Privacy Shield",
      desc: "Complete protection for your personal info with VPN, dark web monitoring, and encrypted browsing.",
      img: "/Images/IdentityPrivacyShield.webp",
    },
    {
      icon: <AlertTriangle size={60} />,
      title: "Real-Time Scam Alerts",
      desc: "Instant notifications for fraud attempts so you can act before it’s too late.",
      img: "/Images/Notification.webp",
    },
    {
      icon: <Headphones size={60} />,
      title: "24/7 Expert Support",
      desc: "Dedicated security professionals ready to guide you whenever you need help.",
      img: "/Images/24Support.webp",
    },
  ];

  return (
    <div className="solutions-page">
      {/* ✅ Hero Section with Background Video */}
      <section className="solutions-hero" aria-label="DefendMePro Hero Section">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hero-video"
          aria-hidden="true"
        >
          <source src="/Videos/solution-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            🛡️ Powerful Solutions Against Digital Threats
          </motion.h1>
          <p>One platform. Multiple shields. Total protection.</p>
        </div>
      </section>

      {/* ✅ Zig-Zag Solutions Section */}
      {solutions.map((s, i) => (
        <section
          key={i}
          className={`solution-block ${i % 2 === 0 ? "normal" : "reverse"}`}
          aria-labelledby={`solution-title-${i}`}
        >
          <motion.div
            className="solution-img"
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width="100%"
              height="auto"
            />
          </motion.div>

          <motion.div
            className="solution-text"
            initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="solution-icon">{s.icon}</div>
            <h2 id={`solution-title-${i}`}>{s.title}</h2>
            <p>{s.desc}</p>
          </motion.div>
        </section>
      ))}

      {/* ✅ Timeline Section */}
      <section className="solutions-timeline" aria-label="How DefendMePro Works">
        <h2>How DefendMePro Works</h2>
        <div className="timeline" role="list">
          <div className="step" role="listitem">🔍 Detect</div>
          <div className="line" aria-hidden="true"></div>
          <div className="step" role="listitem">⚡ Alert</div>
          <div className="line" aria-hidden="true"></div>
          <div className="step" role="listitem">🛡️ Protect</div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="solutions-cta" aria-label="Call to Action Section">
        <div className="cta-overlay" aria-hidden="true"></div>
        <h2>🚀 Stay Ahead of Scams</h2>
        <button className="cta-btn" type="button" onClick={() => navigate('/contact')}>Start Free Trial</button>
      </section>
    </div>
  );
}
