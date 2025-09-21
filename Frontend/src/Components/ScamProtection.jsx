import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/ScamProtection.css";

// Import images for better bundling (Adjust path as per your project structure)
import CallSMSFraudImg from "../../public/Images/CallSMSFraud.webp";
import BrowserLevelImg from "../../public/Images/BrowserLevel.webp";
import SystemHardeningImg from "../../public/Images/SystemHardening.webp";
import LiveDemoImg from "../../public/Images/LIveDemo.webp";

export default function ScamProtection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: CallSMSFraudImg },
      title: "Call and SMS Scam Protection",
      points: [
        "Automatically silence known scam phone numbers and analyze unknown callers using behavioral heuristics.",
        "Detect smishing (SMS phishing) tactics including short links, payment scams, and fake OTP traps.",
        "Receive real-time ‘Pause & Verify’ prompts when risky calls or messages are detected.",
      ],
      body: [
        "Scammers create urgency to trick you. We slow down the process with clear on-screen guidance and a one-tap verification option.",
        "Our detection uses crowd intelligence, carrier data, and call frequency analysis to block scam waves locally and instantly.",
      ],
    },
    {
      media: { img: BrowserLevelImg },
      title: "Browser-Level Phishing Protection",
      points: [
        "Real-time domain risk scoring to detect lookalike URLs, brand impersonation, and newly registered malicious domains.",
        "On-page phishing traps detected, such as fake captchas, pixel-perfect login clones, and fraudulent support chatbots.",
        "One-click quarantine isolates suspicious browser tabs with clipboard and copy-paste restrictions.",
      ],
      body: [
        "Phishing bypasses antivirus by targeting human trust. We flag visual and linguistic cues that traditional blockers miss.",
        "Each warning explains risks clearly, helping users learn and stay safe online.",
      ],
    },
    {
      media: { img: SystemHardeningImg },
      title: "System Hardening Against Remote Access Attacks",
      points: [
        "Remote access tools like AnyDesk and TeamViewer are blocked by default unless explicitly approved.",
        "Clipboard and keystroke protections activate on sensitive screens such as refund forms and wallet imports.",
        "Fake full-screen pop-ups are closed automatically, and rogue scripts are blocked to prevent freezes and scams.",
      ],
      body: [
        "Social engineering often ends with unauthorized remote sessions. We proactively block these risks while allowing legitimate IT support through whitelisting.",
      ],
    },
    {
      media: { img: LiveDemoImg },
      title: "Live Demo: How Refund Scams Try to Trick You",
      points: [
        "Fake refund overpayments pressure victims to return money via gift cards or cryptocurrency.",
        "Scammers use fake bank portals and screen sharing to force urgent actions.",
        "DefendMePro intervenes at every step with contextual blocks and immediate access to human experts.",
      ],
      body: [
        "See how DefendMePro stops scams in real-time: URL warnings, clipboard locks, and expert support when you need it.",
      ],
    },
  ];

  const extras = [
    {
      title: "Real-Time Local Scam Alerts",
      text: [
        "Scam waves spread regionally. Our Alerts Hub highlights the latest threats near you, such as fake courier fees, power bill scams, and loan waiver frauds.",
        "Choose your preferred notification channels — email, push notifications, or in-app alerts. No spam, only actionable warnings.",
      ],
    },
    {
      title: "Smart Decision Support, Not Just Blocks",
      text: [
        "We don’t just block threats — we provide safer alternatives like verified support numbers, official payment links, and step-by-step checklists.",
        "Our goal is to protect moments of trust, helping you stay in control with clear information.",
      ],
    },
    {
      title: "Expert Support Available 7 Days a Week",
      text: [
        "Need help? Tap ‘Ask an Expert’ to connect with a trained specialist for personalized guidance — no bots or scripts.",
        "From verifying suspicious emails to escaping remote access traps, our experts have you covered.",
      ],
    },
  ];

  return (
    <main className="scam-section" aria-labelledby="scam-heading" role="main">
      <h1 id="scam-heading" className="scam-heading" data-aos="zoom-in">
        Scam Protection and Prevention
      </h1>

      {sections.map((section, idx) => (
        <article
          key={idx}
          className={`scam-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          aria-labelledby={`section-title-${idx}`}
        >
          <div className="scam-media" data-aos="zoom-in-up">
            <img
              src={section.media.img}
              alt={`${section.title} illustration`}
              loading={idx === 0 ? "eager" : "lazy"} // First image eager, others lazy
              decoding="async"
              width="600"
              height="400"
            />
          </div>

          <div className="scam-text" data-aos="fade-up">
            <h2 id={`section-title-${idx}`}>{section.title}</h2>
            <ul className="scam-points">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {section.body.map((paragraph, j) => (
              <p key={j}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}

      <section
        className="scam-extra-grid"
        aria-label="Additional Scam Protection Features"
      >
        {extras.map((extra, i) => (
          <div
            className="scam-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            <h3>{extra.title}</h3>
            {extra.text.map((text, k) => (
              <p key={k}>{text}</p>
            ))}
          </div>
        ))}
      </section>

      <section className="scam-cta" data-aos="zoom-in" aria-label="Call to Action">
        <h2>Stay Two Steps Ahead of Scammers</h2>
        <p>
          Activate Scam Protection, enable real-time Alerts Hub, and access
          one-tap Expert Help. Small guardrails at critical moments prevent major losses.
        </p>
        <button className="scam-btn" aria-label="Enable Scam Protection">
          Enable Protection
        </button>
      </section>
    </main>
  );
}
