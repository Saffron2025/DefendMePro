import React, { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
import "aos/dist/aos.css";
import "../Styles/FraudDetection.css";

export default function FraudDetection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Preload images manually to hint browser
    [
      "/Images/FraudMonitoring.webp",
      "/Images/ProtectingYourHome.webp",
      "/Images/HumanExpertise.webp",
    ].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const sections = [
    {
      img: "/Images/FraudMonitoring.webp",
      title: "Real-Time Fraud Monitoring",
      text: [
        "DefendMePro continuously scans for suspicious transactions, unauthorized logins, and hidden fraud indicators.",
        "Fake invoices, refund fraud, and vendor impersonation are detected instantly, preventing financial loss.",
        "Think of it as your 24/7 radar against evolving financial scams.",
      ],
    },
    {
      img: "/Images/ProtectingYourHome.webp",
      title: "Comprehensive Money and Identity Protection",
      text: [
        "Scammers exploit trust—from fake bank calls to cloned payment websites.",
        "Our adaptive detection system protects you across emails, texts, phone calls, and online transactions.",
        "Because your finances and identity deserve robust, multi-layered security.",
      ],
    },
    {
      img: "/Images/HumanExpertise.webp",
      title: "Advanced AI Combined with Human Expertise",
      text: [
        "AI analyzes thousands of signals in real-time to identify potential threats.",
        "Our experienced human analysts verify alerts to ensure accuracy and provide personalized guidance.",
        "This powerful synergy ensures you never face fraud risks alone.",
      ],
    },
  ];

  return (
    <main className="fraud-section" aria-labelledby="fraud-heading" role="main">
      <Helmet>
        {/* Preload images to speed up loading */}
        <link rel="preload" as="image" href="/Images/FraudMonitoring.webp" />
        <link rel="preload" as="image" href="/Images/ProtectingYourHome.webp" />
        <link rel="preload" as="image" href="/Images/HumanExpertise.webp" />
      </Helmet>

      <h1 id="fraud-heading" className="fraud-heading" data-aos="zoom-in">
        Fraud Detection and Prevention
      </h1>

      {sections.map((item, index) => (
        <article
          key={index}
          className={`fraud-block ${index % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          aria-labelledby={`section-title-${index}`}
        >
          <div className="fraud-img" data-aos="zoom-in-up">
            <img
              src={item.img}
              alt={`${item.title} illustration`}
              loading={index === 0 ? "eager" : "lazy"} // first image eager, rest lazy
              decoding="async"
              width="600"
              height="400"
            />
          </div>
          <div className="fraud-text" data-aos="fade-up">
            <h2 id={`section-title-${index}`}>{item.title}</h2>
            {item.text.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>
      ))}

      <section className="fraud-extra" data-aos="fade-up" aria-label="Why Fraud Detection Matters">
        <h2>Why Fraud Detection Matters</h2>
        <p>
          Billions of dollars are lost annually to scams that traditional antivirus and banking systems fail to catch.
          Fraud is driven by psychological manipulation, urgency, and social engineering—not just malware.
        </p>
        <p>
          DefendMePro goes beyond conventional security by monitoring behavior, identifying suspicious patterns, and alerting you before scammers can access your money or personal information.
        </p>
        <ul>
          <li>Instant detection of fake refund and payment scams</li>
          <li>Blocking of suspicious bank login attempts in real-time</li>
          <li>Alerts across websites, SMS, emails, and phone calls</li>
          <li>Access to human experts for personalized fraud prevention support</li>
        </ul>
        <blockquote className="fraud-quote">
          “Fraud never sleeps. Neither should your protection.”
        </blockquote>
      </section>
    </main>
  );
}
