import React from "react";
import "../Styles/whyChooseUs.css";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  AlertTriangle,
  GlobeLock,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Advanced Fraud Detection",
      desc: "Stay protected with AI-powered monitoring that identifies and blocks scams in real-time.",
    },
    {
      icon: AlertTriangle,
      title: "Scam Alerts Hub",
      desc: "Instant alerts for phishing, fake calls, and fraud attempts — stop threats before they trap you.",
    },
    {
      icon: GlobeLock,
      title: "VPN & Privacy",
      desc: "Your data stays safe with built-in VPN and complete online privacy across all devices.",
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      desc: "Real humans, real help — whenever you need tech support or scam recovery assistance.",
    },
  ];

  return (
    <section className="why-section" aria-label="Why Choose DefendMePro">
      <div className="why-container">
        {/* Background image (decorative) */}
        <div className="why-image" aria-hidden="true" />

        <div className="why-content">
          <motion.h2
            className="why-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            ⚡ Why Choose DefendMePro
          </motion.h2>

          <div className="why-grid" role="list">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="why-card"
                  role="listitem"
                  tabIndex={0}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                    type: "tween",
                  }}
                >
                  <div className="why-icon" aria-hidden="true">
                    <Icon size={60} strokeWidth={1.5} />
                  </div>
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-desc">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
