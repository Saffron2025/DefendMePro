import React from "react";
import "../Styles/TrustSection.css";
import { motion } from "framer-motion";

export default function TrustSection() {
  const logos = [
    { src: "/Images/Fox.webp", alt: "Fox News logo" },
    { src: "/Images/CBS.webp", alt: "CBS logo" },
    { src: "/Images/ABC11.webp", alt: "ABC11 News logo" },
    { src: "/Images/BBB.webp", alt: "BBB A+ Rating logo" },
    { src: "/Images/ABCNational.webp", alt: "ABC National logo" },
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
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="trust-logo"
              loading="lazy"
              decoding="async"
              width="150"
              height="60"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
