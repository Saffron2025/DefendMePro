import React from "react";
import "../styles/TrustSection.css";
import { motion } from "framer-motion";

export default function TrustSection() {
  const logos = [
    { src: "/Images/Fox.webp", alt: "Fox News" },
    { src: "/Images/CBS.webp", alt: "CBS" },
    { src: "/Images/ABC11.webp", alt: "ABC11" },
    { src: "/Images/BBB.webp", alt: "BBB A+ Rating" },
    { src: "/Images/ABCNational.webp", alt: "TrustedSite" },
  ];

  return (
    <section className="trust-section">
      <motion.h2
        className="trust-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        🔒 Trusted & Recognized By
      </motion.h2>

      <div className="trust-logos">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="trust-logo-wrapper"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={logo.src} alt={logo.alt} className="trust-logo" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
