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
    const timers = stats.map((stat, i) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        if (start >= end) {
          clearInterval(timer);
        }
        setCounters((prev) => {
          const copy = [...prev];
          copy[i] = start;
          return copy;
        });
      }, stepTime);
      return timer;
    });

    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section className="stats-section">
      {/* ✅ Background Video (scoped to this section only) */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/Videos/DMPVideos.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>

      <div className="stats-content">
        <motion.h2
          className="stats-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          📊 The Reality in Numbers
        </motion.h2>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>
                {counters[index]}
                {stat.suffix}
              </h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
