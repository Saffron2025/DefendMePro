import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Identity.css";

export default function Identity() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/Images/IdentityMonitoring.webp" },
      title: "Continuous Identity Monitoring",
      body: [
        "Your identity is more than just numbers—it includes your credit, accounts, and reputation. We continuously scan breach databases, dark web forums, paste sites, and credential lists for exposure of your emails, phone numbers, and personal IDs.",
        "If your data is found where it shouldn’t be, you receive a high-priority alert detailing the breached information, first-seen date, and clear next steps.",
      ],
      points: [
        "Monitoring for exposed email, phone, and usernames",
        "Leaked password detection and credential stuffing risk scoring",
        "Detailed breach context with initial discovery sources",
      ],
    },
    {
      media: { img: "/Images/Credit.webp" },
      title: "Credit and Account Takeover Protection",
      body: [
        "Account takeovers often start with subtle changes such as address edits, new device sign-ins, or micro-transactions. We correlate signals across your accounts to detect takeover attempts early.",
        "You get detailed insights on what changed, where it happened, why it’s suspicious, and one-tap options to freeze accounts, lock access, or contact providers.",
      ],
      points: [
        "Detection of new devices and unusual locations",
        "Alerts on address and recovery email changes",
        "Micro-debit and card testing activity monitoring",
      ],
    },
    {
      media: { img: "/Images/WalkThrough.webp" },
      title: "Step-by-Step Walkthrough: Leak to Lockdown",
      body: [
        "See how a leaked password triggers multiple layers of protection: immediate alerts, suggested strong password replacements, high-risk account flags for two-factor authentication (2FA) upgrades, and guided credit freeze options.",
      ],
      points: [
        "Contextual security recommendations including password rotation and account re-authentication",
        "Auto-generated strong passwords with secure vault storage",
        "One-tap 2FA upgrade checklist to enhance account security",
      ],
    },
    {
      media: { img: "/Images/Guardrails.webp" },
      title: "Document and KYC Upload Protection",
      body: [
        "Scammers often target document uploads such as ID scans or PAN/Aadhaar images. Our decision guardrails warn you of unsafe upload flows, fake KYC portals, and phishing links.",
        "Optional watermarking and masked-ID redaction help protect your sensitive documents during submission.",
      ],
      points: [
        "Detection of lookalike and fraudulent KYC portals",
        "Document watermarking and redaction features",
        "Directory of verified submission links for safe uploads",
      ],
    },
  ];

  const checklist = [
    "Enable two-factor authentication (2FA) on email, banking, and payment apps.",
    "Change reused passwords, starting with your most valuable accounts.",
    "Set up credit freezes or fraud alerts if you suspect unauthorized access.",
    "Use masked or limited-limit payment cards for new merchants.",
    "Never share one-time passwords (OTPs) or recovery phrases.",
    "Verify customer support numbers only from official websites.",
  ];

  return (
    <main className="identity-section" aria-labelledby="identity-heading" role="main">
      <h1 id="identity-heading" className="identity-heading" data-aos="zoom-in">
        Identity Theft Protection and Monitoring
      </h1>

      {sections.map((section, idx) => (
        <article
          key={idx}
          className={`identity-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          aria-labelledby={`section-title-${idx}`}
        >
          <div className="identity-media" data-aos="zoom-in-up">
            <img
              src={section.media.img}
              alt={`${section.title} illustration`}
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
            />
          </div>

          <div className="identity-text" data-aos="fade-up">
            <h2 id={`section-title-${idx}`}>{section.title}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <ul className="identity-points">
              {section.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      <section className="identity-extra" data-aos="fade-up" aria-label="Identity Exposure Guidance">
        <h2>What To Do If Your Identity Is Compromised</h2>
        <p>
          If your email or password is breached, assume attackers will attempt credential stuffing. Immediately change your password on the affected site and anywhere else you use the same password. Enable two-factor authentication (2FA) especially on your email and financial accounts.
        </p>
        <p>
          For financial data breaches, contact your provider, freeze your accounts if possible, and review recent transactions. Set a PIN with your carrier to protect against SIM swap attacks. When uncertain, contact our experts by tapping <strong>“Ask an Expert”</strong> for personalized assistance.
        </p>

        <div className="identity-checklist">
          <h3>Quick Security Checklist</h3>
          <ul>
            {checklist.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="identity-cta" data-aos="zoom-in" aria-label="Enable Identity Protection Call to Action">
        <h2>Protect Your Identity Before Fraud Happens</h2>
        <p>
          Enable continuous breach monitoring, strengthen two-factor authentication, and activate decision guardrails. Investing time now prevents costly identity theft in the future.
        </p>
        <button className="identity-btn" aria-label="Enable Identity Theft Protection">
          Enable Identity Protection
        </button>
      </section>
    </main>
  );
}
