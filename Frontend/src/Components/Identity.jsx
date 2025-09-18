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
      title: "🧬 Always-On Identity Monitoring",
      body: [
        "Your identity is more than a number—it’s your credit, your accounts, your reputation. We continuously scan breach dumps, dark-web forums, paste sites and credential lists for exposure of your emails, phone numbers and IDs.",
        "If your data appears where it shouldn’t, you get a high-signal alert with the breached fields, the first-seen timestamp and specific next steps.",
      ],
      points: [
        "Email/phone/username exposure watch",
        "Leaked passwords & credential stuffing risk score",
        "Breach context with first-seen sources",
      ],
    },
    {
      media: { img: "/Images/Credit.webp" },
      title: "💳 Credit & Account Takeover Defense",
      body: [
        "Account takeover often starts with small changes—address edits, new device sign-ins, or micro-transactions. We correlate signals across your providers to catch takeover attempts early.",
        "You’ll see what changed, where, and why it’s risky—plus a one-tap path to freeze, lock or contact the right provider.",
      ],
      points: [
        "New device & location anomalies",
        "Change-of-address / recovery-email edits",
        "Micro-debit & card-testing detection",
      ],
    },
    {
      media: {
        video: "/Videos/IdentityWalkthrough.mp4",
        poster: "/Images/WalkThrough.webp",
      },
      title: "🎥 Walkthrough: From Leak → Lockdown",
      body: [
        "Watch how a leaked password triggers a cascade of protections: you’re alerted, auto-generated replacements are suggested, high-risk accounts are flagged for 2FA upgrade, and optional credit freeze is guided step-by-step.",
      ],
      points: [
        "Contextual recommendations (rotate, revoke, re-auth)",
        "Auto-generated strong passwords & vault save",
        "One-tap 2FA upgrade checklist",
      ],
    },
    {
      media: { img: "/Images/Guardrails.webp" },
      title: "🔒 Document & KYC Guardrails",
      body: [
        "Scammers frequently request ID scans and PAN/Aadhaar images. Decision Guardrails warn on unsafe upload flows, fake KYC links and lookalike portals.",
        "We also watermark sensitive uploads (optional) and generate masked-ID redactions where accepted.",
      ],
      points: [
        "Lookalike KYC portal detection",
        "Redaction & watermark options",
        "Verified submission links directory",
      ],
    },
  ];

  const checklist = [
    "Enable 2FA on email + banking + payment apps.",
    "Rotate reused passwords—start with high-value accounts.",
    "Set up a credit freeze or fraud alert if you suspect misuse.",
    "Use masked cards / limited-limit payment methods for new merchants.",
    "Never share OTPs or recovery phrases—ever.",
    "Verify support numbers from official sites only.",
  ];

  return (
    <div className="identity-section">
      <h1 className="identity-heading" data-aos="zoom-in">
        🔐 Identity Theft Protection
      </h1>

      {sections.map((s, idx) => (
        <div
          key={idx}
          className={`identity-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="identity-media" data-aos="zoom-in-up">
            {s.media.video ? (
              <video
                className="identity-video"
                src={s.media.video}
                poster={s.media.poster}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={s.media.img}
                alt={s.title}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            )}
          </div>

          <div className="identity-text" data-aos="fade-up">
            <h2>{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="identity-points">
              {s.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Long-form helper area */}
      <div className="identity-extra" data-aos="fade-up">
        <h2>🛡️ What to Do If Your Identity Is Exposed</h2>
        <p>
          If a breach includes your email or password, assume credential-stuffing attempts will follow.
          Change the password on the breached site, then anywhere else you reused it. Turn on 2FA wherever possible,
          especially on your email and bank—those are crown jewels.
        </p>
        <p>
          If financial data is involved (cards, UPI, bank), contact the provider, freeze the instrument where possible,
          and review recent transactions. For suspected SIM-swap attempts, set a carrier PIN. When in doubt, tap
          <b> “Ask an Expert”</b>—a specialist will walk you through the safest path, step-by-step.
        </p>

        <div className="identity-checklist">
          <h3>✅ Quick Hardening Checklist</h3>
          <ul>
            {checklist.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="identity-cta" data-aos="zoom-in">
        <h2>Lock down your identity—before scammers try.</h2>
        <p>
          Turn on breach monitoring, upgrade 2FA, and enable decision guardrails.
          One weekend of setup saves years of headaches.
        </p>
        <button className="identity-btn">Enable Identity Protection</button>
      </div>
    </div>
  );
}
