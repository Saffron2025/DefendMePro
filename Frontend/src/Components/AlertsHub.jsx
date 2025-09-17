import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/AlertsHub.css";

export default function AlertsHub() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/Images/ScamFeeds.webp" },
      title: "📡 Real-Time Scam Feeds (Localized)",
      body: [
        "Scams roll out in waves—city by city. Alerts Hub tracks your region and pushes timely warnings you can actually use.",
        "From fake courier dues, electricity bill threats, and payment app clones—get explained alerts with simple steps: pause, verify, report.",
      ],
      points: [
        "Geo-aware alerts: see what’s trending near you",
        "Short, plain-language breakdowns—no jargon",
        "‘What to do now’ checklist on every alert",
      ],
    },
    {
      media: { img: "/Images/MultiChannel.webp" },
      title: "🧭 Multi-Channel Delivery You Control",
      body: [
        "Choose how you’re notified—push, email, or in-app cards. No spam, only high-signal alerts that matter to your safety.",
        "Mute categories you don’t need (e.g., crypto scams), boost ones you care about (e.g., banking or support impersonation).",
      ],
      points: [
        "Granular categories & quiet hours",
        "Inbox-friendly summaries",
        "One-tap ‘Mark as learning’ to train your profile",
      ],
    },
    {
      media: { video: "/Videos/AlertsWalkthrough.mp4", poster: "/Images/LiveWalk.webp" },
      title: "🎥 See It in Action: Alert → Action",
      body: [
        "A live walk-through of a trending refund scam wave: you’ll see the alert, the context, and the safe action sequence.",
        "We also show how Decision Guardrails tilt you away from risk in the exact moment scammers push urgency.",
      ],
      points: [
        "Tap-through steps (verify number, validate URL, safe callback)",
        "Save alert to Playbook for later",
        "Request a human expert in one tap",
      ],
    },
  ];

  const feed = [
    {
      tag: "Bank Impersonation",
      title: "Fake ‘account locked’ SMS surge",
      text:
        "Short links to lookalike portals harvesting OTPs. Use official app to verify. Never click unknown shorteners.",
      cta: "Open Bank App",
    },
    {
      tag: "Tech Support",
      title: "Full-screen pop-up lock scams rising",
      text:
        "Browsers getting hijacked by fake ‘virus detected’ pages. Don’t call numbers on the screen; force-quit browser.",
      cta: "How to Force-Quit",
    },
    {
      tag: "Payments",
      title: "UPI request + call combo attacks",
      text:
        "Fraudsters send tiny UPI collect requests, then call to ‘help’. Decline and block. Verify via official support.",
      cta: "See Safe Checklist",
    },
    {
      tag: "Investments",
      title: "Quick-profit crypto groups on chat apps",
      text:
        "New groups promising guaranteed returns. Requesting wallet seed phrases. Never share recovery phrases—ever.",
      cta: "Learn Seed Safety",
    },
  ];

  return (
    <div className="alerts-section">
      <h1 className="alerts-heading" data-aos="zoom-in">
        📢 Scam Alerts Hub
      </h1>

      {sections.map((s, idx) => (
        <div
          key={idx}
          className={`alerts-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="alerts-media" data-aos="zoom-in-up">
            {s.media.video ? (
              <video
                className="alerts-video"
                src={s.media.video}
                poster={s.media.poster}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={s.media.img} alt={s.title} />
            )}
          </div>

          <div className="alerts-text" data-aos="fade-up">
            <h2>{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="alerts-points">
              {s.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Feed-style cards */}
      <div className="alerts-feed">
        {feed.map((item, i) => (
          <div className="alert-card" key={i} data-aos="fade-up" data-aos-delay={i * 120}>
            <span className="alert-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button className="alert-cta">{item.cta}</button>
          </div>
        ))}
      </div>

      <div className="alerts-cta" data-aos="zoom-in">
        <h2>Turn on alerts. Stay ahead of scammers.</h2>
        <p>
          Enable localized alerts, pick your channels, and add Expert Help for critical cases.
          Learn patterns once—avoid them for life.
        </p>
        <button className="alerts-btn">Enable Alerts Hub</button>
      </div>
    </div>
  );
}
