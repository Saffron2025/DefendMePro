import React, { useEffect, useState } from "react";
import "../Styles/StatsSection.css";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { number: 75, suffix: "%", label: "Seniors targeted by scams yearly" },
    { number: 15, suffix: "M+", label: "Fraud cases reported annually" },
    { number: 3, suffix: "B$", label: "Losses from online scams" },
    { number: 24, suffix: "/7", label: "Expert protection & monitoring" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const interval = 30;

    const timers = stats.map((stat, i) => {
      const steps = Math.ceil(duration / interval);
      const increment = stat.number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }

        setCounters((prev) => {
          const updated = [...prev];
          updated[i] = parseFloat(current.toFixed(0));
          return updated;
        });
      }, interval);

      return timer;
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="stats-section" aria-labelledby="stats-heading">
      {/* ✅ Background video (optimized) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="bg-video"
        aria-hidden="true"
      >
        <source src="/Videos/DMPVideos.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay" aria-hidden="true" />

      {/* Content */}
      <div className="stats-content">
        <motion.h2
          id="stats-heading"
          className="stats-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          📊 The Reality in Numbers
        </motion.h2>

        <div className="stats-grid" role="list">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              role="listitem"
              tabIndex={0}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <h3 className="stat-number" aria-label={`${stat.number}${stat.suffix}`}>
                {counters[index]}
                {stat.suffix}
              </h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
