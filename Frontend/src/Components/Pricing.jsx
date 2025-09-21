import React from "react";
import "../Styles/Pricing.css";
import ScrollReveal from "./ScrollReveal";
import { Helmet } from "react-helmet-async"; // ✅ SEO meta support

export default function Pricing() {
  const plans = React.useMemo(() => [
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
  ], []);

  return (
    <section className="pricing-section" aria-label="Pricing Plans Section">
      {/* ✅ Meta Tags */}
      <Helmet>
        <title>Affordable Scam Protection Plans | DefendMePro Pricing</title>
        <meta
          name="description"
          content="Compare DefendMePro's pricing plans. Choose from Basic, Pro, or Business Shield and stay protected from fraud, scams, and identity theft."
        />
        <link rel="canonical" href="https://www.defendmepro.com/pricing" />
      </Helmet>

      {/* ✅ Section Heading */}
      <ScrollReveal direction="up">
        <h2 className="pricing-title">💎 Choose Your Protection Plan</h2>
      </ScrollReveal>

      {/* ✅ Plans List */}
      <div className="pricing-grid" role="list">
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 0.2} direction="up">
            <article
              className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
              role="listitem"
              tabIndex={0}
              aria-labelledby={`plan-title-${i}`}
            >
              <header>
                <h3 id={`plan-title-${i}`}>{plan.name}</h3>
                <p className="price" aria-label={`Price: ${plan.price}`}>{plan.price}</p>
              </header>

              <p className="desc">{plan.desc}</p>

              {/* ✅ Semantic List */}
              <ul className="feature-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span role="img" aria-hidden="true">✔</span> {feature}
                  </li>
                ))}
              </ul>

              {/* ✅ Accessible CTA */}
              <button
                className="pricing-btn"
                type="button"
                aria-label={`Get started with the ${plan.name} plan`}
              >
                Get Started
              </button>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
