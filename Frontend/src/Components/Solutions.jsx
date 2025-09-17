import React from "react";
import "../styles/Solutions.css";
import { motion } from "framer-motion";
import { ShieldCheck, LockKeyhole, AlertTriangle, Headphones } from "lucide-react";

export default function Solutions() {
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
      {/* ✅ Hero with video + background */}
      <section className="solutions-hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/Videos/solution-hero.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🛡️ Powerful Solutions Against Digital Threats
          </motion.h1>
          <p>One platform. Multiple shields. Total protection.</p>
        </div>
      </section>

      {/* ✅ Zig-Zag Solutions */}
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
            <img src={s.img} alt={s.title} />
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
          </motion.div>
        </section>
      ))}

      {/* ✅ Timeline Strip */}
      <section className="solutions-timeline">
        <h2>How DefendMePro Works</h2>
        <div className="timeline">
          <div className="step">🔍 Detect</div>
          <div className="line"></div>
          <div className="step">⚡ Alert</div>
          <div className="line"></div>
          <div className="step">🛡️ Protect</div>
        </div>
      </section>

      {/* ✅ CTA with background img */}
      <section className="solutions-cta">
        <div className="cta-overlay"></div>
        <h2>🚀 Stay Ahead of Scams</h2>
        <button className="cta-btn">Start Free Trial</button>
      </section>
    </div>
  );
}
