import React from "react";
import "../Styles/Pricing.css";
import ScrollReveal from "./ScrollReveal";

export default function Pricing() {
  const plans = [
    {
      name: "Basic Shield",
      price: "$9.99 /mo",
      desc: "Perfect for individuals who need essential scam & fraud protection.",
      features: [
        "Real-time Scam Alerts",
        "Identity Monitoring",
        "Basic VPN Access",
        "Email Support",
      ],
    },
    {
      name: "Pro Shield",
      price: "$19.99 /mo",
      desc: "Advanced security for families and professionals who need complete protection.",
      features: [
        "Everything in Basic",
        "Full Dark Web Monitoring",
        "Unlimited VPN",
        "24/7 Priority Support",
        "Scam Recovery Assistance",
      ],
      highlight: true,
    },
    {
      name: "Business Shield",
      price: "$39.99 /mo",
      desc: "Enterprise-grade protection for businesses and teams.",
      features: [
        "Everything in Pro",
        "Team Account Protection",
        "Dedicated Security Manager",
        "Incident Response",
        "Custom Integrations",
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <ScrollReveal direction="up">
        <h2 className="pricing-title">💎 Choose Your Protection Plan</h2>
      </ScrollReveal>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <ScrollReveal key={i} delay={i * 0.2} direction="up">
            <div className={`pricing-card ${plan.highlight ? "highlight" : ""}`}>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p className="desc">{plan.desc}</p>
              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <button className="pricing-btn">Get Started</button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
