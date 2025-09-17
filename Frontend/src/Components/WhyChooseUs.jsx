import React from "react";
import "../Styles/whyChooseUs.css";
import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, GlobeLock, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={60} />,
      title: "Advanced Fraud Detection",
      desc: "Stay protected with AI-powered monitoring that identifies and blocks scams in real-time.",
    },
    {
      icon: <AlertTriangle size={60} />,
      title: "Scam Alerts Hub",
      desc: "Instant alerts for phishing, fake calls, and fraud attempts — stop threats before they trap you.",
    },
    {
      icon: <GlobeLock size={60} />,
      title: "VPN & Privacy",
      desc: "Your data stays safe with built-in VPN and complete online privacy across all devices.",
    },
    {
      icon: <Headphones size={60} />,
      title: "24/7 Expert Support",
      desc: "Real humans, real help — whenever you need tech support or scam recovery assistance.",
    },
  ];

  return (
    <section className="why-section" aria-label="Why choose DefendMePro">
      <div className="why-container">
        <div className="why-image" aria-hidden="true" />

        <div className="why-content">
          <motion.h2
            className="why-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ⚡ Why Choose DefendMePro
          </motion.h2>

          <div className="why-grid">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="why-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 70 }}
                tabIndex={0}
              >
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
