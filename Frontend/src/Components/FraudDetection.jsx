import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/FraudDetection.css";

export default function FraudDetection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      img: "/Images/FraudMonitoring.webp",
      title: "🚨 Real-Time Fraud Monitoring",
      text: [
        "DefendMePro constantly scans for suspicious transactions, account logins, and hidden red flags.",
        "Fake invoices, refund fraud, and vendor impersonation are caught instantly before money is stolen.",
        "Think of it as your 24/7 radar against financial scams.",
      ],
    },
    {
      img: "/Images/ProtectingYourHome.webp",
      title: "💳 Protecting Your Money and Identity",
      text: [
        "Scammers prey on trust — from fake bank calls to cloned payment pages.",
        "Our system uses adaptive detection to stop threats across emails, texts, and even phone scams.",
        "Because your money and identity deserve bulletproof protection.",
      ],
    },
    {
      img: "/Images/HumanExpertise.webp",
      title: "🌐 AI + Human Expertise",
      text: [
        "AI scans thousands of signals in real time — but we don’t stop there.",
        "Our human experts verify threats, ensuring accuracy and personal guidance.",
        "This powerful combination means you never fight fraud alone.",
      ],
    },
  ];

  return (
    <div className="fraud-section">
      <h1 className="fraud-heading" data-aos="zoom-in">
        🚫 Fraud Detection
      </h1>

      {sections.map((item, index) => (
        <div
          key={index}
          className={`fraud-block ${index % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="fraud-img" data-aos="zoom-in-up">
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
            />
          </div>
          <div className="fraud-text" data-aos="fade-up">
            <h2>{item.title}</h2>
            {item.text.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      ))}

      <div className="fraud-extra" data-aos="fade-up">
        <h2>🔎 Why Fraud Detection Matters</h2>
        <p>
          Every year, billions are lost to scams that antivirus and banks fail to detect.
          Fraud isn’t about malware — it’s about psychology, urgency, and manipulation.
        </p>
        <p>
          DefendMePro goes beyond traditional tools. We monitor behavior, detect patterns,
          and warn you before a scammer drains your savings or compromises your identity.
        </p>
        <ul>
          <li>📌 Fake refund scams flagged in seconds</li>
          <li>📌 Suspicious bank login attempts blocked instantly</li>
          <li>📌 Real-time alerts across web, SMS, and calls</li>
          <li>📌 Human experts available to guide you through confusion</li>
        </ul>
        <blockquote className="fraud-quote">
          “Fraud doesn’t wait. Neither should protection.”
        </blockquote>
      </div>
    </div>
  );
}
