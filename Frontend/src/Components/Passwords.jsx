import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Passwords.css";

export default function Passwords() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/Password/LockdownBeyond.webp" },
      title: "🧩 Generate Strong, Unique Passwords",
      body: [
        "Reused passwords are the #1 reason for account takeovers. Our generator creates long, random, unique passwords that resist brute force and dictionary attacks.",
        "You choose the profile: length, symbols, passphrases with separators, or compliance presets for banking/work apps.",
      ],
      points: [
        "Presets: 16–24 chars, symbols/ambiguous toggle",
        "Memorable passphrases (diceware-style) when needed",
        "Per-site rules (no spaces, must include symbol, etc.)",
      ],
    },
    {
      media: { img: "/Password/Encrypted.webp" },
      title: "🔐 Encrypted Vault with Zero-Knowledge",
      body: [
        "Your vault is end-to-end encrypted. We can’t read your passwords—only you can. Keys are derived locally from your master passphrase.",
        "Biometrics unlock on trusted devices. Clipboard clears automatically to reduce shoulder-surfing and malware risk.",
      ],
      points: [
        "Local encryption/decryption; syncs only ciphertext",
        "Biometric unlock + auto-lock timers",
        "Clipboard auto-clear & masked reveal",
      ],
    },
    {
      // Video replaced by image here
      media: { img: "/Password/AutoFill.webp" },
      title: "⚡ One-Tap Autofill Everywhere",
      body: [
        "Autofill works across browsers and apps: URLs are verified to avoid lookalike phishing domains before we offer credentials.",
        "App logins, 2FA prompts, and rotating passwords—seamlessly handled with minimal clicks.",
      ],
      points: [
        "Domain-matching + phishing lookalike warnings",
        "Per-account notes (security Qs, recovery codes)",
        "App-level autofill on mobile + desktop extensions",
      ],
    },
    {
      media: { img: "/Password/BreachWatch.webp" },
      title: "🛰️ Breach Watch & Health Score",
      body: [
        "We continuously check your logins against known breach dumps. If a service is breached, you’ll see impacted items and quick rotate actions.",
        "Your vault health score guides you: weak, reused, or old passwords get prioritized fixes.",
      ],
      points: [
        "Breach alerts with first-seen info & risk level",
        "Weak/reused/old password detection",
        "‘Fix all’ flows with batch rotation where supported",
      ],
    },
    {
      media: { img: "/Password/2FA.webp" },
      title: "🔑 2FA & Passkeys First",
      body: [
        "Wherever possible, we push you toward stronger auth: TOTPs stored securely, recovery codes saved safely, and passkey support for passwordless logins.",
        "You’ll see per-account guidance: upgrade to 2FA, save backup codes, or switch to passkeys if the site supports them.",
      ],
      points: [
        "Built-in TOTP (time-based one-time passcodes)",
        "Recovery code safe-storage & labels",
        "Passkey (WebAuthn) support & hints",
      ],
    },
    {
      media: { img: "/Password/SecureSharing.webp" },
      title: "🤝 Secure Sharing & Emergency Access",
      body: [
        "Share credentials with family or team without revealing the raw secret—access can be read-only, masked, or time-limited.",
        "Set a trusted contact for emergency access with a wait period; you’ll be notified and can cancel any request.",
      ],
      points: [
        "Masked or full-view sharing, revoke anytime",
        "Audit trail: who viewed, when, and from where",
        "Emergency access with configurable wait timer",
      ],
    },
    {
      media: { img: "/Password/Migration.webp" },
      title: "📦 Easy Migration from Other Managers",
      body: [
        "Import from Chrome/Edge/Firefox, iCloud Keychain, 1Password, LastPass, Bitwarden, and CSV exports. We auto-sanitize weird fields and map notes/URLs.",
        "During import, we can de-duplicate and merge variants of the same site (m.com vs www).",
      ],
      points: [
        "CSV/JSON import with validation",
        "De-dupe, merge, and normalize domains",
        "Optional auto-tag by category (bank, social, work)",
      ],
    },
    {
      media: { img: "/Password/AdminOrder.webp" },
      title: "🏢 Admin Controls for Teams (Optional)",
      body: [
        "For business plans, admins get policy templates: minimum length, rotation cadence for critical apps, 2FA requirement, and breach enforcement.",
        "Off-boarding flows safely transfer or revoke shared credentials without exposing secrets.",
      ],
      points: [
        "Org-wide password policies & reports",
        "Role-based vaults (Personal, Team, Admin)",
        "Off-boarding handover without plaintext exposure",
      ],
    },
  ];

  const checklist = [
    "Use a unique, long master passphrase (and enable biometrics).",
    "Turn on 2FA for email, banking, payments, and social.",
    "Migrate reused passwords—start with high-value accounts first.",
    "Save recovery codes in the vault (tag them clearly).",
    "Prefer passkeys when available; keep passwords as fallback.",
    "Review breach alerts monthly and rotate impacted logins.",
  ];

  const faqs = [
    {
      q: "What if I forget my master password?",
      a: "We can’t reset it (zero-knowledge). Enable recovery options: emergency contact with wait period, printable recovery kit, or a secure key split across devices.",
    },
    {
      q: "Is storing passwords in a manager actually safe?",
      a: "Yes—when done right. Your data stays encrypted locally; we sync only ciphertext. Compromise of our servers doesn’t reveal your secrets.",
    },
    {
      q: "Should I use browser-built-in passwords?",
      a: "Better than reuse, but dedicated managers add breach watch, phishing checks, secure sharing, health score, and cross-platform TOTP/passkeys.",
    },
  ];

  return (
    <div className="pw-section">
      <h1 className="pw-heading" data-aos="zoom-in">
        🔑 Password Manager
      </h1>

      {sections.map((s, idx) => (
        <div
          key={idx}
          className={`pw-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="pw-media" data-aos="zoom-in-up">
            {/* Only image now */}
            <img
              src={s.media.img}
              alt={s.title}
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
            />
          </div>

          <div className="pw-text" data-aos="fade-up">
            <h2>{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="pw-points">
              {s.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Checklist */}
      <div className="pw-extra" data-aos="fade-up">
        <h2>✅ Quick Setup Checklist</h2>
        <ul className="pw-checklist">
          {checklist.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {/* FAQs */}
      <div className="pw-faqs" data-aos="fade-up">
        <h2>❓ FAQs</h2>
        {faqs.map((f, i) => (
          <div className="pw-faq" key={i}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="pw-cta" data-aos="zoom-in">
        <h2>Upgrade your logins from chaos to control.</h2>
        <p>
          Generate, store, autofill, and rotate credentials the right way—plus breach
          monitoring, 2FA, and passkeys built-in.
        </p>
        <button className="pw-btn">Enable Password Manager</button>
      </div>
    </div>
  );
}
