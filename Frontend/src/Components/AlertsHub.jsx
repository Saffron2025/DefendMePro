import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/AlertsHub.css";

// Static imports for images (adjust path as per your setup)
import ScamFeedsImg from "../../public/Images/ScamFeeds.webp";
import MultiChannelImg from "../../public/Images/MultiChannel.webp";
import LiveWalkImg from "../../public/Images/LiveWalk.webp";

export default function AlertsHub() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: ScamFeedsImg },
      title: "Real-Time Local Scam Alerts",
      body: [
        "Scam attacks spread in waves, often targeting specific cities. Our Alerts Hub tracks your location and sends timely, actionable warnings tailored to your region.",
        "Receive alerts on threats like fake courier charges, electricity bill scams, and payment app impersonations, complete with simple, clear instructions to pause, verify, and report.",
      ],
      points: [
        "Geo-targeted alerts showing scams trending near you",
        "Plain-language explanations without confusing jargon",
        "Step-by-step ‘What to Do Now’ checklists with every alert",
      ],
    },
    {
      media: { img: MultiChannelImg },
      title: "Customize How You Receive Alerts",
      body: [
        "Choose your preferred notification channels—push notifications, email, or in-app alert cards. No spam, only critical alerts relevant to your safety.",
        "Filter alerts by category, mute irrelevant types like cryptocurrency scams, and prioritize those you care about most, such as banking or tech support impersonation.",
      ],
      points: [
        "Fine-tuned categories with configurable quiet hours",
        "Inbox-friendly summary emails for easy reading",
        "One-tap ‘Mark as Learning’ to personalize your alert profile",
      ],
    },
    {
      media: { img: LiveWalkImg },
      title: "Watch Alerts in Action: From Notification to Safe Response",
      body: [
        "See a step-by-step walkthrough of a current refund scam wave, illustrating how alerts provide context and guide you safely through each decision.",
        "Our Decision Guardrails help you resist urgent scam pressure by offering safe alternatives exactly when you need them.",
      ],
      points: [
        "Interactive steps like verifying caller ID, validating URLs, and making safe callbacks",
        "Save important alerts to your personal Playbook for future reference",
        "Instant access to human expert help with a single tap",
      ],
    },
  ];

  const feed = [
    {
      tag: "Bank Impersonation",
      title: "Surge in Fake ‘Account Locked’ SMS Messages",
      text:
        "Beware of short links leading to lookalike sites designed to steal your OTPs. Always verify using official banking apps. Never click on unknown shortened URLs.",
      cta: "Open Official Bank App",
    },
    {
      tag: "Tech Support",
      title: "Increase in Full-Screen Pop-Up Scam Alerts",
      text:
        "Fake virus warnings hijack browsers and urge you to call fraudulent support numbers. Don’t call those numbers. Instead, force-quit your browser immediately.",
      cta: "Learn How to Force-Quit",
    },
    {
      tag: "Payments",
      title: "UPI Request and Call Combo Scam Attacks",
      text:
        "Scammers send small UPI collect requests, then call pretending to help. Always decline and block suspicious requests. Confirm all transactions via official support channels.",
      cta: "View Safety Checklist",
    },
    {
      tag: "Investments",
      title: "Crypto ‘Quick Profit’ Groups on Messaging Apps",
      text:
        "New chat groups promise guaranteed returns but request wallet seed phrases. Never share your recovery phrases—ever.",
      cta: "Learn About Seed Phrase Safety",
    },
  ];

  return (
    <main className="alerts-section" role="main" aria-labelledby="alerts-heading">
      <h1 id="alerts-heading" className="alerts-heading" data-aos="zoom-in">
        Scam Alerts Hub
      </h1>

      {sections.map((section, idx) => (
        <article
          key={idx}
          className={`alerts-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          aria-labelledby={`section-title-${idx}`}
        >
          <div className="alerts-media" data-aos="zoom-in-up">
            <img
              src={section.media.img}
              alt={`${section.title} illustration`}
              loading={idx === 0 ? "eager" : "lazy"} // First image eager, others lazy
              decoding="async"
              width="600"
              height="400"
            />
          </div>

          <div className="alerts-text" data-aos="fade-up">
            <h2 id={`section-title-${idx}`}>{section.title}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <ul className="alerts-points">
              {section.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      <section className="alerts-feed" aria-label="Latest Scam Alerts Feed">
        {feed.map((item, i) => (
          <div className="alert-card" key={i} data-aos="fade-up" data-aos-delay={i * 120}>
            <span className="alert-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button className="alert-cta" aria-label={`Action button: ${item.cta}`}>
              {item.cta}
            </button>
          </div>
        ))}
      </section>

      <section className="alerts-cta" data-aos="zoom-in" aria-label="Enable Scam Alerts Call to Action">
        <h2>Stay Ahead of Scammers with Real-Time Alerts</h2>
        <p>
          Activate localized scam alerts, customize your notification channels, and access expert help when needed.
          Learn scam patterns once and protect yourself for life.
        </p>
        <button className="alerts-btn" aria-label="Enable Scam Alerts Hub">
          Enable Alerts Hub
        </button>
      </section>
    </main>
  );
}
